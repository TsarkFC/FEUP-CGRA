/**
 * MyTangram
 * @constructor
 * @param scene - Reference to MyScene object
 */
class MyUnitCubeQuad extends CGFobject {
	constructor(scene) {
        super(scene);
        this.initMaterials(this.scene);

        this.squareSide = new MyQuad(this.scene);
        this.squareTop = new MyQuad(this.scene);
        this.squareBottom = new MyQuad(this.scene);
    }

    initMaterials(scene) {

        //------ Texture Material
        this.texture = new CGFappearance(scene);
        this.texture.setAmbient(0.1, 0.1, 0.1, 1);
        this.texture.setDiffuse(0.9, 0.9, 0.9, 1);
        this.texture.setSpecular(0.1, 0.1, 0.1, 1);
        this.texture.setShininess(10.0);
        this.texture.loadTexture('images/mineSide.png');
        this.texture.setTextureWrap('REPEAT', 'REPEAT');

        //------ Texture Material
        this.textureTop = new CGFappearance(scene);
        this.textureTop.setAmbient(0.1, 0.1, 0.1, 1);
        this.textureTop.setDiffuse(0.9, 0.9, 0.9, 1);
        this.textureTop.setSpecular(0.1, 0.1, 0.1, 1);
        this.textureTop.setShininess(10.0);
        this.textureTop.loadTexture('images/mineTop.png');
        this.textureTop.setTextureWrap('REPEAT', 'REPEAT');

        //------ Texture Material
        this.textureBottom = new CGFappearance(scene);
        this.textureBottom.setAmbient(0.1, 0.1, 0.1, 1);
        this.textureBottom.setDiffuse(0.9, 0.9, 0.9, 1);
        this.textureBottom.setSpecular(0.1, 0.1, 0.1, 1);
        this.textureBottom.setShininess(10.0);
        this.textureBottom.loadTexture('images/mineBottom.png');
        this.textureBottom.setTextureWrap('REPEAT', 'REPEAT');
    }
    
	display(){
        this.texture.apply();
        if (this.scene.linearInt) this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0,0,0.5);
        this.squareSide.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0,0,-0.5);
        this.scene.rotate(Math.PI, 0, 1, 0);
        this.squareSide.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(0.5,0,0);
        this.scene.rotate(Math.PI / 2, 0, 1, 0);
        this.squareSide.display();
        this.scene.popMatrix();

        this.scene.pushMatrix();
        this.scene.translate(-0.5,0,0);
        this.scene.rotate(3*Math.PI / 2, 0, 1, 0);
        this.squareSide.display();
        this.scene.popMatrix();

        this.textureBottom.apply();
        if (this.scene.linearInt) this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);
        
        this.scene.pushMatrix();
        this.scene.translate(0,-0.5,0);
        this.scene.rotate(Math.PI/2, 1, 0, 0);
        this.squareBottom.display();
        this.scene.popMatrix();

        this.textureTop.apply();
        if (this.scene.linearInt) this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.LINEAR);
        else this.scene.gl.texParameteri(this.scene.gl.TEXTURE_2D, this.scene.gl.TEXTURE_MAG_FILTER, this.scene.gl.NEAREST);

        this.scene.pushMatrix();
        this.scene.translate(0,0.5,0);
        this.scene.rotate(-Math.PI/2, 1, 0, 0);
        this.squareTop.display();
        this.scene.popMatrix();
    }

    updateBuffers(complexity){
        this.squareSide.updateBuffers();
        this.squareTop.updateBuffers();
        this.squareBottom.updateBuffers();
    }
	
	enableNormalViz(){
        this.squareSide.enableNormalViz();
        this.squareTop.enableNormalViz();
        this.squareBottom.enableNormalViz();
    }
	disableNormalViz(){
        this.squareSide.disableNormalViz();
        this.squareTop.disableNormalViz();
        this.squareBottom.disableNormalViz();
    }
}

