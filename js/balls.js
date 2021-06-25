export class Balls extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, texture){
        super(scene, x, y, texture);
        scene.add.existing(this);
        scene.physics.add.existing(this);
        this.setCollideWorldBounds(true);
        this.setBounce(1, 1);

        this.velocity = {
            y: Phaser.Math.Between(-200, 200),
            x: Phaser.Math.Between(-200, 200)
        };

        this.setVelocity(this.velocity.x, this.velocity.y);
    }

}