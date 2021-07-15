#extension GL_EXT_shader_texture_lod : enable
#extension GL_OES_standard_derivatives : enable
#define PI 3.14159265359

precision highp float;

vec3 fromRGB(vec3 rgb) {
  return rgb / 255.;
}