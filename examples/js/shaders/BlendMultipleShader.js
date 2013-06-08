/**
 * @author alteredq / http://alteredqualia.com/
 *
 * Blend two textures
 */

THREE.BlendMultipleShader = {

	uniforms: {

		"t1": { type: "t", value: null },
		"t2": { type: "t", value: null },
		"t3": { type: "t", value: null },
		"t3": { type: "t", value: null },
		"t4": { type: "t", value: null },
		"t5": { type: "t", value: null },
		"t6": { type: "t", value: null },
		"t7": { type: "t", value: null },
		"t8": { type: "t", value: null },
		"t9": { type: "t", value: null },

    "i1": { type: "i", value: 1 },
    "i2": { type: "i", value: 0 },
    "i3": { type: "i", value: 0 },
    "i4": { type: "i", value: 0 },
    "i5": { type: "i", value: 0 },
    "i6": { type: "i", value: 0 },
    "i7": { type: "i", value: 0 },
    "i8": { type: "i", value: 0 },
    "i9": { type: "i", value: 0 },

		"exposure": { type: "f", value: 1.0 }

	},

	vertexShader: [

		"varying vec2 vUv;",

		"void main() {",

			"vUv = uv;",
			"gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );",

		"}"

	].join("\n"),

	fragmentShader: [

		"varying vec2 vUv;",

		"uniform sampler2D t1;",
		"uniform sampler2D t2;",
		"uniform sampler2D t3;",
		"uniform sampler2D t4;",
		"uniform sampler2D t5;",
		"uniform sampler2D t6;",
		"uniform sampler2D t7;",
		"uniform sampler2D t8;",
		"uniform sampler2D t9;",

    "uniform int i1;",
    "uniform int i2;",
    "uniform int i3;",
    "uniform int i4;",
    "uniform int i5;",
    "uniform int i6;",
    "uniform int i7;",
    "uniform int i8;",
    "uniform int i9;",

		"uniform float exposure;",

		"vec4 myMix(vec4 color1, vec4 color2, float ratio) {",
//      "return color1 * ( exposure - color2.a ) + color2 * color2.a;",
      "return mix(color1, color2, ratio);",
    "}",

		"void main() {",

			"vec4 texel1 = texture2D( t1, vUv );",
			"vec4 texel2 = texture2D( t2, vUv );",
			"vec4 texel3 = texture2D( t3, vUv );",
			"vec4 texel4 = texture2D( t4, vUv );",
			"vec4 texel5 = texture2D( t5, vUv );",
			"vec4 texel6 = texture2D( t6, vUv );",
			"vec4 texel7 = texture2D( t7, vUv );",
			"vec4 texel8 = texture2D( t8, vUv );",
			"vec4 texel9 = texture2D( t9, vUv );",

      "vec4 result = vec4(0.0);",
      "if (i1 == 1) result = texel1;",
      "if (i2 == 1) result = myMix(result, texel2, texel2.a);",
      "if (i3 == 1) result = myMix(result, texel3, texel3.a);",
      "if (i4 == 1) result = myMix(result, texel4, texel4.a);",
      "if (i5 == 1) result = myMix(result, texel5, texel5.a);",
      "if (i6 == 1) result = myMix(result, texel6, texel6.a);",
      "if (i7 == 1) result = myMix(result, texel7, texel7.a);",
      "if (i8 == 1) result = myMix(result, texel8, texel8.a);",
      "if (i9 == 1) result = myMix(result, texel9, texel9.a);",
			"gl_FragColor = result;",

		"}"

	].join("\n")

};
