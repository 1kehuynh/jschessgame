
import Phaser from "phaser";
export default class main extends Phaser.Scene {

    constructor ()
    {
        super('main');
    }

    preload ()
    {
        this.load.image('logo', 'menu.png');
    }

    create ()
    {
         this.add.image(400, 300, 'logo');
    }

}