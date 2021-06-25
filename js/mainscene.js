import { Balls } from "./balls.js";

export default class MainScene extends Phaser.Scene {
    constructor() {
        super('MainScene');
    }

    init() { 
    }

    
    preload(){
        this.load.spritesheet('balls', './images/Balls.png',{
            frameWidth: 32,
            frameHeight: 32
        })
    }

    create() { 
        this.numberOfBalls = 200;

        this.ball = this.add.existing(
            new Balls (this, Phaser.Math.Between(0, this.game.config.width), 
                        Phaser.Math.Between(0, this.game.config.height), 'balls')
        )

        this.balls = this.add.group();
        this.balls.enableBody = true;

        this.scoreText = this.add.text(this.game.config.width * 0.5, 80, `${this.numberOfBalls}`,
        {
            fontFamily: 'Arial',
            fontSize: 64    ,
            color: "#fff",
            align: 'center'
        }
        ).setOrigin(0.5);

        for(let i = 0; i < this.numberOfBalls; i++){
            this.ball = this.add.existing(
                new Balls (this, Phaser.Math.Between(0, this.game.config.width), 
                            Phaser.Math.Between(0, this.game.config.height), 'balls')
            )
            // if(i > 0){
            //     this.physics.add.collider(this.ball[i - 1], this.ball[i], this.onCollision, null, this);
            // }
            this.balls.add(this.ball);
        }
        
 
    }


    update(time) {
    }
}