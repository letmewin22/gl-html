export default `#version 300 es
precision highp float;
#define varying in
#define texture2D texture
#define gl_FragColor FragColor
out vec4 FragColor;
#define PI 3.14159265359


vec3 fromRGB(vec3 rgb) {
  return rgb / 255.;
}`
