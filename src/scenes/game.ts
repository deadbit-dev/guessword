import { SYSTEM_CONFIG } from "../config";


export class Game extends Phaser.Scene {
    private text!: Phaser.GameObjects.Text;
    private pingText!: Phaser.GameObjects.Text;

    private counter: number = 0;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // NOTE: Подключаемся к серверу
        Network.connect(SYSTEM_CONFIG.hostname, SYSTEM_CONFIG.port);

        // NOTE: Загружаем изображение
        this.load.image('button', 'assets/button.png');
    }

    // NOTE: Вызывается при создании сцены
    create(): void {
        // NOTE: Добавляем текст в центр экрана
        this.text = this.add.text(
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

        // NOTE: Добавляем обработчик нажатия на кнопку/sprite
        sprite.setInteractive();
        sprite.on('pointerdown', () => {
            this.counter++;
            this.text.setText(`Clicks: ${this.counter}\nKeep clicking!`);
        });

        // NOTE: Добавляем текст для отображения пинга
        this.pingText = this.add.text(0, 0, `Ping: ${Network.get_current_ping()}ms`);
    }

    // NOTE: Вызывается каждый кадр
    update(): void {
        // NOTE: Обновляем текст пинга
        this.pingText.setText(`Ping: ${Network.get_current_ping()}ms`);
    }
}
