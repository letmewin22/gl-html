import {Camera} from 'ogl'
import DefaultScetch from './DefaultScetch'

const cover = {
  state: true,
  positionX: 0.5,
  positionY: 0.5,
}

// const opts = {
// raf: '',
// camera: {
// near: ''
// far: ''
// }
//   nodes: [
//     {
//       $el: '',
//       Figure: '',
//       cover: '',
//     },
//     {
//       $el: '',
//       Figure: '',
//       cover: '',
//     },
//   ],
// }

export default class Scetch extends DefaultScetch {
  figures = []
  $els = []

  constructor($selector, opts = {}) {
    super($selector, opts)
    this._init()
    this.addFigures(opts.nodes)
  }

  _init() {
    super._init()
  }

  _setupCamera() {
    super._setupCamera()

    this.perspective = 800
    const formula = 2 * Math.atan(this.sizes.h / 2 / this.perspective)
    const fov = (180 * formula) / Math.PI

    this.camera = new Camera(this.renderer.gl, {
      fov,
      aspect: this.sizes.w / this.sizes.h,
      near: this.opts.camera?.near ?? 0.01,
      far: this.opts.camera?.far ?? 10000,
    })

    this.camera.position.set(0, 0, this.perspective)
    this.camera.lookAt([0, 0, 0])
  }

  _updatePos() {
    this.figures.forEach((figure) => {
      figure.setSizes()
      figure.resize()
      figure.update()
    })
  }

  addFigures(nodes = []) {
    const $els = nodes.map((node) => node.$el)
    this.$els = [...this.$els, ...$els]

    $els.length &&
      $els.forEach((el, i) => {
        const figureIns = new nodes[i].Figure({
          el,
          scene: this.scene,
          renderer: this.renderer,
          cover: nodes[i].cover ?? cover,
        })
        this.figures.push(figureIns)
      })
  }

  removeFigure(id) {
    this.$els = this.$els.filter(($el) => $el.dataset.glId !== id)

    this.figures.find((f) => f._id === id).destroy()
    this.figures = this.figures.filter((f) => f._id !== id)
  }

  _animate() {
    this._updatePos()
    super._animate()
  }

  destroy() {
    this.figures.forEach((figure) => {
      this.removeFigure(figure._id)
    })
    setTimeout(() => {
      super.destroy()
    }, 100)
  }
}
