
import Phaser from "phaser";
export default class menu extends Phaser.Scene {

    constructor ()
    {
        super('menu');
    }

    preload ()
    {
        this.load.image('menu', 'menu.png')
        this.load.image('start', 'start.png')
        this.load.image('tung', 'tung.png')
    }

    create ()
    {

        this.add.image(0,0,'menu').setOrigin(0,0);
        this.add.image(370,500,'tung').setScale(0.5);
        this.add.image(900,500,'tung');
        const startHitBox = new Phaser.Geom.Circle(109, 100,60);
        const start = this.add.sprite(640,500,'start').setInteractive(startHitBox,Phaser.Geom.Circle.Contains,{ useHandCursor: true });
        
        //this.input.enableDebug(start, 0xff0000); 
        start.setTint(0xffd700); 
        start.on('pointerover', () => {
            start.setAlpha(0.5);
            start.setScale(1.5)

        })
        start.on('pointerout',() => {
            start.setAlpha(1);
            start.setScale(1)
        })
        start.on('pointerdown', () => {
            this.scene.start('main');

        }, this);
    }

}