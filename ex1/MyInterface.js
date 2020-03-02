/**
* MyInterface
* @constructor
*/
class MyInterface extends CGFinterface {
    constructor() {
        super();
    }

    init(application) {
        // call CGFinterface init
        super.init(application);
        // init GUI. For more information on the methods, check:
        // http://workshop.chromeexperiments.com/examples/gui
        this.gui = new dat.GUI();
        
        var obj = this;

        //Checkbox element in GUI
        this.gui.add(this.scene, 'displayAxis').name('Display Axis');

        //Checkbox for exercise 1.2 - display diamond
        this.gui.add(this.scene, 'displayDiamond').name('Display Diamond');

        //Checkbox for exercise 1.2 - display triangle
        this.gui.add(this.scene, 'displayTriangle').name('Display Triangle');

        //Checkbox for exercise 1.3 - display paralelogram
        this.gui.add(this.scene, 'displayParallelogram').name('Display Parallelo');

        //Checkboxes for exercise 2
        this.gui.add(this.scene, 'displaySmall').name('Display Small');
        this.gui.add(this.scene, 'displayBig').name('Display Big');

        //Slider element in GUI
        this.gui.add(this.scene, 'scaleFactor', 0.1, 5).name('Scale Factor');

        return true;
    }
}