import {Plane, Program, Mesh, Vec2} from 'ogl'
import {TextureLoader} from './TextureLoader/TextureLoader'
import {generateID} from './utils/generateID'

// shaders
import baseFragmentOld from './baseShaders/fragment_webgl1'
import vertexShaderOld from './baseShaders/vertex_webgl1'
import baseFragmentNew from './baseShaders/fragment_webgl2'
import vertexShaderNew from './baseShaders/vertex_webgl2'
import bgCover from './baseShaders/bgCover'

export default class BaseFigure {
  sizes = new Vec2(0, 0)
  offset = new Vec2(0, 0)
  time = 0
  rendering = false

  constructor({scene, renderer, el, cover}) {
    this.scene = scene
    this.renderer = renderer
    this.gl = this.renderer.gl
    this.$el = el
    this.cover = cover

    this._id = generateID(12)
    this.$el.setAttribute('data-gl-id', this._id)

    this.loader = new TextureLoader({gl: this.gl})
    this._setupShaders()
    this.createMesh()
  }

  _setupShaders() {
    this.vertexShader = this.renderer.isWebgl2
      ? vertexShaderNew
      : vertexShaderOld

    this.baseVertex = bgCover + '\n' + this.vertexShader

    this.baseFragment = this.renderer.isWebgl2
      ? baseFragmentNew
      : baseFragmentOld
  }

  async uploadTexture(src) {
    return new Promise(resolve => {
      const texture = this.loader.load(src, () => resolve(texture))
    })
  }

  disposeTexture(texture) {
    this.gl.deleteTexture(texture.texture)
  }

  createGeometry(opts = {}) {
    this.geometry = new Plane(this.renderer.gl, {
      width: 1,
      height: 1,
      widthSegments: opts.widthSegments ?? 128,
      heightSegments: opts.heightSegments ?? 128,
    })
  }

  createMaterial(opts = {}) {
    const resolution = {
      type: 'v2',
      value: new Vec2(
        this.getBoundingTexture.naturalWidth,
        this.getBoundingTexture.naturalHeight
      ),
    }

    const size = {
      type: 'v2',
      value: new Vec2(
        this.getBoundingTexture.width,
        this.getBoundingTexture.height
      ),
    }

    const cover = {
      type: 'v2',
      value: new Vec2(this.cover.positionX, this.cover.positionY),
    }

    let baseUniforms = {
      size,
      cover,
      uTime: {value: 0},
    }

    if (this.cover.state) {
      baseUniforms = {...baseUniforms, resolution}
    }

    const finalVertex = this.cover.state ? this.baseVertex : this.vertexShader

    const uniforms = {...baseUniforms, ...opts?.uniforms}
    let vertex = finalVertex + '\n' + opts?.vertex
    const fragment = this.baseFragment + '\n' + opts?.fragment

    vertex = this.renderer.isWebgl2 ? '#version 300 es' + '\n' + vertex : vertex

    const options = {
      vertex,
      fragment,
      uniforms,
      transparent: opts.transparent ?? true,
      cullFace: opts.cullFace ?? null,
      depthTest: opts.depthTest ?? false,
      depthWrite: opts.depthWrite ?? false,
    }

    this.material = new Program(this.renderer.gl, options)
  }

  async createMesh() {
    this.$el.classList.add('js-hidden')

    this.createGeometry()
    await this.createMaterial()

    this.setSizes()

    this.mesh = new Mesh(this.renderer.gl, {
      geometry: this.geometry,
      program: this.material,
    })

    this.mesh.position.set(this.offset.x, this.offset.y, 0)
    this.mesh.scale.set(this.sizes.x, this.sizes.y, this.sizes.x / 2)

    this.mesh.setParent(this.scene)
    this.rendering = true
  }

  setSizes() {
    if (!this.rendering) {
      return
    }
    const {width, height, top, left} = this.getBoundingTexture

    const ww = window.innerWidth
    const wh = window.innerHeight

    this.sizes.set(width, height)
    this.offset.set(left - ww / 2 + width / 2, wh / 2 - top - height / 2)
  }

  get getBoundingTexture() {
    const {width, height, top, left} = this.$el.getBoundingClientRect()
    let naturalWidth
    let naturalHeight

    if (this.texture && this.cover.state) {
      naturalWidth = this.texture.image.naturalWidth
      naturalHeight = this.texture.image.naturalHeight
    }

    return {width, height, top, left, naturalWidth, naturalHeight}
  }

  update() {
    if (!this.rendering) {
      return
    }
    this.time++
    const m = this.material.uniforms
    m.uTime.value = this.time
  }

  resize() {
    if (!this.rendering) {
      return
    }
    this.setSizes()
    this.mesh.position.set(this.offset.x, this.offset.y, 0)
    this.mesh.scale.set(this.sizes.x, this.sizes.y, 1)

    this.material.uniforms.size.value.x = this.getBoundingTexture.width
    this.material.uniforms.size.value.y = this.getBoundingTexture.height
  }

  destroy() {
    this.$el.classList.remove('js-hidden')
    this.$el.removeAttribute('data-gl-id')
    this.geometry.remove()
    this.material.remove()

    this.scene.removeChild(this.mesh)
  }
}
