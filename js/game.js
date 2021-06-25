import MainScene from './mainscene.js'


const config = {
    width: ,
    height: ,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#',
    scene: [MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: -9.8 },
            debug: false
        }
    },
    pixelArt: false
}

new Phaser.Game(config);