A library that allows you to upload html elements to webgl and manipulate them

# Instalation

`npm i @emotionagency/glhtml`

or

`yarn add @emotionagency/glhtml`

# Usage

Basic example
```
at first you need to create Figure (shader program)

import {Figure, Scetch} from '@emotionagency/glhtml'

class Images extends Figure {
  constructor(scene, renderer, $el) {
    super(scene, renderer, $el)
  }

  createMaterial() {
    const uniforms = {
      uTexture: {type: 't', value: this.texture},
    }

    const vertex = `
      varying vec2 vUv;

      void main() {
        vUv = bgCover(size, resolution, uv);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `

    const fragment = `
      varying vec2 vUv;
      uniform sampler2D uTexture;

      void main() {
        vec4 myTexture = texture2D(uTexture, uv);
        gl_FragColor = myTexture;
      }
    `

    super.createMaterial({uniforms, vertex, fragment})
  }

  async createMesh() {
    this.texture = await this.uploadTexture(this.$el.dataset.src)
    super.createMesh()
  }

  destroy() {
    this.disposeTexture(this.texture)
    super.destroy()
  }
}

Then you need to make a node

const imgs = [...document.querySelectorAll('.js-gl-img')]

let nodes = imgs.map((img) => ({
  $el: img,
  Figure: Images,
}))

Then you need to create an instance of the Sketch class and pass the nodes there

new Scetch('#gl', {
  nodes,
})

```



this library is built based on OGL library: https://github.com/oframe/ogl

If you need you can import all OGL modules
```
import {OGL} from '@emotionagency/glhtml'

const scene = new OGL.Transform();
```