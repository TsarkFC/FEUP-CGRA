/**
 * MyTable
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTable extends CGFobject {
	constructor(scene) {
		super(scene);
		
		this.cube = new MyUnitCubeQuad(this.scene);
	}
	display(scene){
		
        //Leg 1
        this.scene.pushMatrix();
        this.scene.scale(0.2,0.2,0.9);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();
          
        //Leg 2
        this.scene.pushMatrix();
        this.scene.translate(2,0,0);
        this.scene.scale(0.2,0.2, 0.9);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();

        //Leg 3
        this.scene.pushMatrix();
        this.scene.translate(0,2,0);
        this.scene.scale(0.2,0.2,0.9);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();

        //Leg 4
        this.scene.pushMatrix();
        this.scene.translate(2,2,0);
        this.scene.scale(0.2,0.2,0.9);
        this.scene.translate(0,0,0.5);
        this.cube.display();
        this.scene.popMatrix();
        
        //Top
        this.scene.pushMatrix();
        this.scene.translate(1,1,0.9);
        this.scene.scale(2.2,2.2,0.1);
        this.cube.display();
        this.scene.popMatrix();

	}
}