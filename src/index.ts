import 'phaser';
import { GameScene } from './scenes/GameScene';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 800,
    height: 600,
    parent: 'game-container',
    backgroundColor: '#141414',
    scene: [GameScene],
};

new Phaser.Game(config);