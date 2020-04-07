attribute vec3 aVertexPosition;
attribute vec3 aVertexNormal;
attribute vec2 aTextureCoord;

uniform mat4 uMVMatrix;
uniform mat4 uPMatrix;
uniform mat4 uNMatrix;

varying vec2 vTextureCoord;

uniform sampler2D uSamplerWater;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {

    vTextureCoord = aTextureCoord;

    vec3 offset=aVertexNormal*texture2D(uSampler2, vTextureCoord).b * 0.05;
    vec3 offset_mov=aVertexNormal*texture2D(uSampler2, vTextureCoord + sin(0.005*timeFactor)).b * 0.05;

	gl_Position = uPMatrix * uMVMatrix * vec4(aVertexPosition + offset + offset_mov, 1.0);
}