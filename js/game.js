import MainScene from './mainscene.js'

const config = {
    width: 1024,
    height: 768,
    type: Phaser.AUTO,
    parent: 'game-canvas',
    backgroundColor: '#0000000',
    scene: [MainScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    pixelArt: true
}

new Phaser.Game(config);