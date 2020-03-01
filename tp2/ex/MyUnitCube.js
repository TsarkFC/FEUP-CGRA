/**
 * MyUnitCube
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCube extends CGFobject {
	constructor(scene) {
		super(scene);
		this.initBuffers();
	}
	initBuffers() {
		this.vertices = [
			-0.5, -0.5, 0.5,//0 Bottom left (z>0)
			0.5, -0.5, 0.5,	//1 Bottom right (z>0)
			0.5, 0.5, 0.5,	//2 Top right (z>0)
            -0.5, 0.5, 0.5,  //3 Top left (z>0)
            -0.5, -0.5, -0.5,//4 Bottom left (z<0)
			0.5, -0.5, -0.5,	//5 Bottom right (z<0)
			0.5, 0.5, -0.5,	//6 Top right (z<0)
            -0.5, 0.5, -0.5  //7Top left (z<0)
		];

		//Counter-clockwise reference of vertices
		this.indices = [
			0, 1, 2, //Plano xy positivo (ccw)
            2, 3, 0,
            
            6, 5, 4, //Plano xy negativo (cw)
            4, 7, 6,
            
            6, 2, 1, //Plano zy positivo (clockwise)
            5, 6, 1,

            0, 3, 7, //Plano zy negativo (ccw)
            0, 7, 4

            
            

		];

		//The defined indices (and corresponding vertices)
		//will be read in groups of three to draw triangles
		this.primitiveType = this.scene.gl.TRIANGLES;

		this.initGLBuffers();
	}
}
