/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
		super(scene);
		
		//--> Default diamond
        this.diamond = new MyDiamond(this.scene);

        //--> Exercise 1.1
        this.triangle = new MyTriangle(this.scene);

        //--> Exercise 1.3
        this.parallelogram = new MyParallelogram(this.scene);

        //--> Exercise 2
        this.triangle_small = new MyTriangleSmall(this.scene);
		this.triangle_big = new MyTriangleBig(this.scene);
	}
	display(scene){
		
		var transl = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
			0.25, Math.sqrt(8) + 1, 0.0, 1.0];      
			   
        this.scene.pushMatrix();
        this.scene.multMatrix(transl);
        this.diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 0.25, 0.0, 0.0, 1.0);
        this.scene.translate(2, 0, 0);
        this.triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI * 0.75, 0.0, 0.0, 1.0);
		this.triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), - Math.sqrt(2), 0.0);
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(-Math.PI * 0.5, 0.0, 0.0, 1.0);
        this.triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.625, -1.875 , 0.0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI * 0.5, 0.0, 0.0, 1.0);
        this.triangle_big.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(-Math.sqrt(2), -Math.sqrt(2) * 1.5, 0.0);
        this.scene.rotate(Math.PI * 0.25, 0.0, 0.0, 1.0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8) + Math.sqrt(2), Math.sqrt(8), 0);
        this.scene.scale(1.0, -1.0, 1.0);
        this.scene.rotate(Math.PI * 0.75, 0.0, 0.0, 1.0);
        this.parallelogram.display();
        this.scene.popMatrix();

	}
}

