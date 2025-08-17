export class GameScene extends Phaser.Scene {
    private text: Phaser.GameObjects.Text | null = null;
    private counter: number = 0;

    constructor() {
        super({ key: 'GameScene' });
    }

    // NOTE: Вызоветься при создании сцены
    create(): void {
        // NOTE: Добавляем текст в центр экрана
        this.text = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Welcome to Guess Word Game!\nClick anywhere to start',
            {
                fontSize: '40px',
                color: '#ffffff',
                align: 'center',
                fontFamily: 'Arial'
            }
        ).setOrigin(0.5);

        // NOTE: Считываение нажатия мыши 
        this.input.on('pointerdown', () => {
            this.counter++;
            this.text?.setText(`Clicks: ${this.counter}\nKeep clicking!`);
        });
    }

    update(): void {
        // NOTE: вызывается каждый кадр
    }
}
