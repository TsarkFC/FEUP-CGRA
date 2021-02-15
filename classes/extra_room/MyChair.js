/**
 * MyChair
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyChair extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.cube = new MyUnitCubeQuad(this.scene);
	}
	display(scene){
		
        //Leg 1
        this.scene.pushMatrix();
        this.scene.scale(0.1,0.1,0.6);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();
          
        //Leg 2
        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.scale(0.1,0.1,0.6);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();

        //Leg 3
        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.scale(0.1,0.1,0.6);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();

        //Leg 4
        this.scene.pushMatrix();
        this.scene.translate(0.5,0.5,0);
        this.scene.scale(0.1,0.1,0.6);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();
        
        //Seat
        this.scene.pushMatrix();
        this.scene.translate(0.5/2, 0.5/2, 0.6);
        this.scene.scale(0.6, 0.6, 0.1);
        this.cube.display();
        this.scene.popMatrix();

        //Back
        this.scene.pushMatrix();
        this.scene.translate(0, 0, 0.6);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.scene.translate(0.5/2, 0.7/2, 0);
        this.scene.scale(0.6, 0.6, 0.1);
        this.cube.display();
        this.scene.popMatrix();

	}
}