/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyTangram extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);
		
        this.green_diamond = new MyDiamond(this.scene);
        this.yellow_parallelogram = new MyParallelogram(this.scene);
        this.orange_triangle_big = new MyTriangleBig(this.scene, "orange");
        this.blue_triangle_big = new MyTriangleBig(this.scene, "blue");
        this.pink_triangle_big = new MyTriangleBig(this.scene, "pink");
        this.red_triangle_big = new MyTriangleBig(this.scene, "red");
        this.purple_triangle_big = new MyTriangleBig(this.scene, "purple");
    }

    initMaterials(scene) {
        //------ Texture Material
        this.texture = new CGFappearance(scene);
        this.texture.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/tangram.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');
        
    }
    
	display(){
		var transl = [1.0, 0.0, 0.0, 0.0,
            0.0, 1.0, 0.0, 0.0,
            0.0, 0.0, 1.0, 0.0,
            0.25, Math.sqrt(8) + 1, 0.0, 1.0]; 
			   
        this.scene.pushMatrix();
        this.scene.multMatrix(transl);
        this.texture.apply();
        this.green_diamond.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(Math.PI * 0.25, 0.0, 0.0, 1.0);
        this.scene.translate(2, 0, 0);
        this.orange_triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.rotate(-Math.PI * 0.75, 0.0, 0.0, 1.0);
        this.texture.apply();
		this.blue_triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(2), - Math.sqrt(2), 0.0);
        this.scene.pushMatrix();
        this.scene.scale(0.75, 0.75, 0.75);
        this.scene.rotate(-Math.PI * 0.5, 0.0, 0.0, 1.0);
        this.pink_triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.625, -1.875 , 0.0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.scene.rotate(Math.PI * 0.5, 0.0, 0.0, 1.0);
        this.red_triangle_big.display();
        this.scene.popMatrix();
        this.scene.popMatrix();

        this.scene.pushMatrix();
		this.scene.translate(-Math.sqrt(2), -Math.sqrt(2) * 1.5, 0.0);
        this.scene.rotate(Math.PI * 0.25, 0.0, 0.0, 1.0);
        this.scene.scale(0.5, 0.5, 0.5);
        this.purple_triangle_big.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(Math.sqrt(8) + Math.sqrt(2), Math.sqrt(8), 0);
        this.scene.scale(1.0, -1.0, 1.0);
        this.scene.rotate(Math.PI * 0.75, 0.0, 0.0, 1.0);
        this.yellow_parallelogram.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity){
        this.orange_triangle_big.updateBuffers();
        this.blue_triangle_big.updateBuffers();
        this.pink_triangle_big.updateBuffers();
        this.red_triangle_big.updateBuffers();
        this.purple_triangle_big.updateBuffers();
        this.yellow_parallelogram.updateBuffers();
        this.green_diamond.updateBuffers();
    }
	
	enableNormalViz(){
        this.orange_triangle_big.enableNormalViz();
        this.blue_triangle_big.enableNormalViz();
        this.pink_triangle_big.enableNormalViz();
        this.red_triangle_big.enableNormalViz();
        this.purple_triangle_big.enableNormalViz();
        this.green_diamond.enableNormalViz();
        this.yellow_parallelogram.enableNormalViz();
    }
	disableNormalViz(){
        this.orange_triangle_big.disableNormalViz();
        this.blue_triangle_big.disableNormalViz();
        this.pink_triangle_big.disableNormalViz();
        this.red_triangle_big.disableNormalViz();
        this.purple_triangle_big.disableNormalViz();
        this.green_diamond.disableNormalViz();
        this.yellow_parallelogram.disableNormalViz();
    }
}

