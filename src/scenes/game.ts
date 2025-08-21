import { SYSTEM_CONFIG } from "../config";
import { Keyboard } from "../keyboard";
import { NetIdMessages, NetMessages } from "../protocol";
import { random_position_in_bounds } from "../utils";


export class Game extends Phaser.Scene {
    private pingText!: Phaser.GameObjects.Text;
    private keyboard!: Keyboard;

    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        // NOTE: Подключаемся к серверу
        Network.connect(SYSTEM_CONFIG.hostname, SYSTEM_CONFIG.port);
        Network.addMessageListener(NetIdMessages.CONNECT, this.on_connect_other_client.bind(this));

        // NOTE: Загружаем изображение
        this.load.image('button', 'assets/button.png');
    }

    // NOTE тестовый колбэк для отрисовки подключения других клиентов к серверу
    on_connect_other_client(_: NetMessages[NetIdMessages.CONNECT]) {
        // NOTE: Рисуем кружок в случайной точке экрана
        const pos = random_position_in_bounds(0, 0, this.cameras.main.width, this.cameras.main.height);
        this.add.circle(pos.x, pos.y, 10, 0xffffff, 1);
    }

    // NOTE: Вызывается при создании сцены
    create(): void {
        // NOTE: Добавляем текст для отображения пинга
        this.pingText = this.add.text(0, 0, `Ping: ${Network.get_current_ping()}ms`, {
            fontFamily: 'Arial',
            fontSize: '20px',
            color: '#ffffff',
            align: 'center',
            backgroundColor: '#000000',
        });

        // NOTE: Добавляем клавиатуру
        this.keyboard = new Keyboard(this, 0, 0);
    }

    // NOTE: Вызывается каждый кадр
    update(): void {
        // NOTE: Обновляем текст пинга
        this.pingText.setText(`Ping: ${Network.get_current_ping()}ms`);
    }
}
