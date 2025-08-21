import 'phaser';
import { register_network } from './network';
import { Game } from './scenes/game';

const config: Phaser.Types.Core.GameConfig = {
    type: Phaser.AUTO,
    width: 1080,
    height: 1920,
    parent: 'game-container',
    backgroundColor: '#ffffff',
    scene: [Game],
    render: {
        pixelArt: false,
        antialias: true,
        roundPixels: false,
        powerPreference: 'high-performance',
    },
    scale: {
        mode: Phaser.Scale.RESIZE,
    }
};

// NOTE: Register modules
register_network();

new Phaser.Game(config);