A library that allows you to upload html elements to webgl and manipulate them

# Instalation

`npm i @emotionagency/glhtml`

or

`yarn add @emotionagency/glhtml`

# Usage

Basic example
at first you need to create Figure (shader program)
```
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
```


Then you need to make a node
```
const imgs = [...document.querySelectorAll('.js-gl-img')]

let nodes = imgs.map((img) => ({
  $el: img,
  Figure: Images,
}))
```


Then you need to create an instance of the Sketch class and pass the nodes there
```
// The first parameter is the container selector into which the canvas will be inserted
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


## Nodes options
| Option | Type         | Default                                       | Description                                                                                  |
|--------|--------------|-----------------------------------------------|----------------------------------------------------------------------------------------------|
| el     | HTML Element | undefined                                     | The element to be rendered in the webgl                                                      |
| Figure | Figure class | undefined                                     | A program that has been extended from the Figure's base class                                |
| cover  | Object       | {state: true, positionX: 0.5, positionY: 0.5} | If you want to render an image, then you can assign properties to it as css background cover |


## Scetch instance options

| Option                | Type             | Default                    | Description                                                                                                                                                                          |
|-----------------------|------------------|----------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| nodes                 | Array of objects | []                         | An array of objects that consists of a reference to an element and a shape that refers to it                                                                                         |
| camera                | Object           | { near: 0.01, far: 10000 } | An object that consists of a field near and a field far. Which is responsible for the range of the camera                                                                            |
| raf                   | Function         | null                       | Allows you to pass a custom function to requestAnimationFrame                                                                                                                        |
| dpr                   | Number           | 2                          | Value of canvas pixel ratio                                                                                                                                                          |
| antialias             | Boolean          | true                       | Determines if anti-aliasing is enabled                                                                                                                                               |
| alpha                 | Boolean          | true                       | Determines if the canvas can be transparent                                                                                                                                          |
| premultipliedAlpha    | Boolean          | true                       | Smoothes transparency                                                                                                                                                                |
| depth                 | Boolean          | true                       | Displays whether depth accuracy is enabled                                                                                                                                           |
| stencil               | Boolean          | false                      | Indicates whether stencil drawing is enabled                                                                                                                                         |
| preserveDrawingBuffer | Boolean          | false                      | Whether to preserve the buffers until manually cleared or overwritten                                                                                                                |
| powerPreference       | String           | 'default'                  | Provides a hint to the user agent indicating what configuration of GPU is suitable for this WebGL context. Can be "high-performance", "low-power" or "default". Default is "default" |
| autoClear             | Boolean          | true                       | Defines whether the renderer should automatically clear its output before rendering a frame                                                                                          |
| webgl                 | Number           | 2                          | The version of the webgl that will render                                                                 

## Figure methods
| Method         | Description                                                                                                            |
|----------------|------------------------------------------------------------------------------------------------------------------------|
| uploadTexture  | An async method that allows you to load textures                                                                       |
| disposeTexture | Method that allows you to destroy the texture                                                                          |
| createMaterial | Method for creating material . You need to inherit and throw uniforms, fragment and vertex shaders into it |
| createGeometry | Method for creating geometry. |
| createMesh     | Method for creating a mesh. You can inherit and load textures here, for example                                        |
| update         | Method that is updated by ticker. Here you can add your animations                                                     |
| destroy        | Allows you to safely destroy an instance, avoiding memory leaks                                            


## Structure

- Figure.js — Shader program
- Scetch.js — Launches functionality
- DefaultScetch.js — If the functionality of the library is not enough for you, you can use the base class and write your own functionality
- TextureLoader.js — If you need to load a texture outside the Figure class. Required parameter {gl: /* renderer.gl */}
— And all methods from ogl library


### If you need some functionality from ogl, you can call any method from its structure

More about ogl structure: https://github.com/oframe/ogl


## You can add or remove Figures from the Sketch by id

```
import {Figure, Scetch} from '@emotionagency/glhtml'

const scetch = new Scetch('#gl')

const imgs = [...document.querySelectorAll('.js-gl-img')]

let nodes = imgs.map((img) => ({
  $el: img,
  Figure: Images,
}))

scetch.addFigures(nodes)
scetch.removeFigure([id]) // all figures has a unic id

```