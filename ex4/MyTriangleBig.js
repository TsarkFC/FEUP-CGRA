/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig extends CGFobject {
	constructor(scene, colour) {
		super(scene);
		this.colour = colour;
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-2, 0, 0,	//0
			2, 0, 0,	//1
			0, 2, 0   	//2
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			1, 2, 0,
			0, 2, 1
		];

		//Normals
		this.normals = [
			0, 0, 1,
			0, 0, 1,
			0, 0, 1
		];
		
		if (this.colour == "orange"){
			this.texCoords = [
				1,1,
				1,0,
				0.5,0.5
			];
		}
		else if (this.colour == "blue"){
			this.texCoords = [
				0,0,
				1,0,
				0.5,0.5
			];
		}
		else if (this.colour == "pink"){
			this.texCoords = [
				0,0.5,
				0.5,1,
				0,1
			];
		}
		else if (this.colour == "red"){
			this.texCoords = [
				0.25,0.75,
				0.75,0.75,
				0.5,0.5
			];
		}
		else if (this.colour == "purple"){
			this.texCoords = [
				0,0,
				0,0.5,
				0.25,0.25
			];
		}
		

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();

	}

	updateBuffers(complexity){
        // reinitialize buffers
        this.initBuffers();
        this.initNormalVizBuffers();
    }
}

