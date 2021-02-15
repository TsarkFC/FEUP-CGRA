/**
 * MyBlock
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyBlock extends CGFobject {
	constructor(scene) {
        super(scene);
        
        this.chair = new MyChair(this.scene);
        this.table = new MyTable(this.scene);
	}
	display(scene){
		
        //Chair 1
        this.scene.pushMatrix();
        this.scene.translate(2,2,0);
        this.chair.display();
        this.scene.popMatrix();
          
        //Chair 2
        this.scene.pushMatrix();
        this.scene.translate(3,2,0);
        this.chair.display();
        this.scene.popMatrix();

        //Chair 3
        this.scene.pushMatrix();
        this.scene.translate(2,5,0);
        this.scene.scale(1,-1,1);
        this.chair.display();
        this.scene.popMatrix();

        //Chair 4
        this.scene.pushMatrix();
        this.scene.translate(3,5,0);
        this.scene.scale(1,-1,1);
        this.chair.display();
        this.scene.popMatrix();
        
        //Table
        this.scene.pushMatrix();
        this.scene.translate(1.75,2.5,0);
        this.table.display();
        this.scene.popMatrix();

	}
}