#ifdef GL_ES
precision highp float;
#endif

varying vec2 vTextureCoord;

uniform sampler2D uSamplerWater;
uniform sampler2D uSampler2;
uniform float timeFactor;

void main() {
    vec2 mov = mod(vTextureCoord + timeFactor*0.005, 1.0);

    vec4 color = texture2D(uSamplerWater, mov);
	vec4 filter = texture2D(uSampler2, vec2(0.0,0.1)+vTextureCoord);
	
	gl_FragColor = color;


}