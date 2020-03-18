/**
 * MyTriangle
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTriangleBig3 extends CGFobject {
	constructor(scene) {
		super(scene);
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

		this.texCoords = [
			0.25,0.75,
			0.75,0.75,
			0.5,0.5
		];

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
