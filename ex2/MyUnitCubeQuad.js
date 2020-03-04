/**
 * MyUnitCubeQuad
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
                super(scene);
                this.quad = new MyQuad(this.scene);
        }

        display(scene){
                //FACE 1
                this.scene.pushMatrix();
                this.scene.translate(0,0,-0.5);
                this.quad.display();
                this.scene.popMatrix();
                
                //FACE 2
                this.scene.pushMatrix();
                this.scene.translate(0, 0.5, 0);
                this.scene.rotate(Math.PI / 2, 1, 0, 0);
                this.quad.display();
                this.scene.popMatrix();

                //FACE 3
                this.scene.pushMatrix();
                this.scene.translate(0, -0.5, 0);
                this.scene.rotate(-Math.PI / 2, 1, 0, 0);
                this.quad.display();
                this.scene.popMatrix();

                //FACE 4
                this.scene.pushMatrix();
                this.scene.translate(0.5, 0, 0);
                this.scene.rotate(Math.PI / 2, 0, 1, 0);
                this.quad.display();
                this.scene.popMatrix();

                //FACE 5
                this.scene.pushMatrix();
                this.scene.translate(-0.5, 0, 0);
                this.scene.rotate(-Math.PI / 2, 0, 1, 0);
                this.quad.display();
                this.scene.popMatrix();
                
                //FACE 6 
                this.scene.pushMatrix();
                this.scene.translate(0, 0, 0.5);
                this.quad.display();
                this.scene.popMatrix();
        }
        
	
}
