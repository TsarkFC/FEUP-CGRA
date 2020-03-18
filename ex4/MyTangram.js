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
        this.orange_triangle_big = new MyTriangleBig(this.scene);
        this.blue_triangle_big = new MyTriangleBig1(this.scene);
        this.pink_triangle_big = new MyTriangleBig2(this.scene);
        this.red_triangle_big = new MyTriangleBig3(this.scene);
        this.purple_triangle_big = new MyTriangleBig4(this.scene);
    }

    initMaterials(scene) {
        // Green colour
        this.green = new CGFappearance(scene);
        this.green.setAmbient(0, 0, 0, 1.0);
        this.green.setDiffuse(0, 0, 0, 1.0);
        this.green.setSpecular(0, 1, 0, 1.0);
        this.green.setShininess(10.0);

        // Yellow colour
        this.yellow = new CGFappearance(scene);
        this.yellow.setAmbient(0.0, 0.0, 0.0, 1.0);
        this.yellow.setDiffuse(1, 1, 0, 1.0);
        this.yellow.setSpecular(1, 1, 0, 1.0);
        this.yellow.setShininess(10.0);

        // Orange colour
        this.orange = new CGFappearance(scene);
        this.orange.setAmbient(0, 0, 0, 1.0);
        this.orange.setDiffuse(1, 165/255, 0, 1.0);
        this.orange.setSpecular(1, 165/255, 0, 1.0);
        this.orange.setShininess(10.0);

        // Blue colour
        this.blue = new CGFappearance(scene);
        this.blue.setAmbient(0, 0, 0, 1.0);
        this.blue.setDiffuse(0, 0, 1, 1.0);
        this.blue.setSpecular(0, 0, 1, 1.0);
        this.blue.setShininess(10.0);

        // Pink colour
        this.pink = new CGFappearance(scene);
        this.pink.setAmbient(0, 0, 0, 1.0);
        this.pink.setDiffuse(1, 102/255, 204/255, 1.0);
        this.pink.setSpecular(1, 102/255, 204/255, 1.0);
        this.pink.setShininess(10.0);

        // Red colour
        this.red = new CGFappearance(scene);
        this.red.setAmbient(0, 0, 0, 1.0);
        this.red.setDiffuse(1, 0, 0, 1.0);
        this.red.setSpecular(1, 0, 0, 1.0);
        this.red.setShininess(10.0);

        // Purple colour
        this.purple = new CGFappearance(scene);
        this.purple.setAmbient(0, 0, 0, 1.0);
        this.purple.setDiffuse(200/255, 43/255, 226/255, 1.0);
        this.purple.setSpecular(200/255, 43/255, 226/255, 1.0);
        this.purple.setShininess(10.0);

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

