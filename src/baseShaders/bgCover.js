export default `uniform vec2 cover;

vec2 bgCover(vec2 planeSize, vec2 imageSize, vec2 uv) {

  uv -= cover;

  float aspect = planeSize.x / planeSize.y;
  float imageAspect = imageSize.x / imageSize.y;

  if (aspect < imageAspect) {
    uv.x *= aspect / imageAspect;
  } else {
    uv.y *= imageAspect / aspect;
  }

  uv += cover;
  return uv;
}`
