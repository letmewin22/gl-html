import {Texture} from 'ogl'
import {ImageLoader} from './ImageLoader.js'
import {Loader} from './Loader.js'

class TextureLoader extends Loader {
  constructor({manager, gl}) {
    super(manager)
    this.gl = gl
  }

  load(url, onLoad, onProgress, onError) {
    const texture = new Texture(this.gl, {
      anisotropy: 1,
      generateMipmaps: false,
    })

    const loader = new ImageLoader(this.manager)
    loader.setCrossOrigin(this.crossOrigin)
    loader.setPath(this.path)

    loader.load(
      url,
      (image) => {
        texture.image = image

        if (onLoad !== undefined) {
          onLoad(texture)
        }
      },
      onProgress,
      onError,
    )
    return texture
  }
}

export {TextureLoader}
