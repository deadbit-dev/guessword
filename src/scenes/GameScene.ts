export class GameScene extends Phaser.Scene {
    private counter: number = 0;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // NOTE: Загружаем изображение
        this.load.image('button', 'assets/button.png');
    }

    // NOTE: Вызоветься при создании сцены
    create(): void {
        // NOTE: Добавляем текст в центр экрана
        const text = this.add.text(
            this.cameras.main.centerX,
            this.cameras.main.centerY,
            'Welcome to Guess Word Game!\nClick on button :)',
            {
                fontSize: '40px',
                color: '#ffffff',
                align: 'center',
                fontFamily: 'Arial'
            }
        ).setOrigin(0.5);

        // NOTE: Добавляем изображение
        const sprite = this.add.sprite(
            this.cameras.main.centerX,
            this.cameras.main.centerY + 100,
            'button'
        );

        sprite.setInteractive();
        sprite.on('pointerdown', () => {
            this.counter++;
            text.setText(`Clicks: ${this.counter}\nKeep clicking!`);
        });
    }

    update(): void {
        // NOTE: вызывается каждый кадр
    }
}
