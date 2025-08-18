import 'phaser';
import { register_network } from './network';
import { Game } from './scenes/game';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.WEBGL,
    width: 600,
    height: 800,
    parent: 'game-container',
    backgroundColor: '#141414',
    scene: [Game],
};

// NOTE: Register modules
register_network();

new Phaser.Game(config);