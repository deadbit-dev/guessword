# Phaser - Базовое использование

## Работа со спрайтами

### Загрузка изображения
```typescript
preload() {
    this.load.image('player', 'assets/player.png');
}
```

### Создание спрайта
```typescript
create() {
    this.player = this.add.sprite(400, 300, 'player');
}
```

## Работа с текстом

### Создание текста
```typescript
create() {
    // Простой текст
    this.add.text(400, 100, 'Hello World', { 
        fontSize: '32px', 
        color: '#ffffff' 
    });
    
    // Текст с центрированием
    this.scoreText = this.add.text(400, 50, 'Score: 0', {
        fontSize: '24px',
        color: '#ffffff'
    }).setOrigin(0.5);
}
```

### Обновление текста
```typescript
updateScore(newScore: number) {
    this.scoreText.setText(`Score: ${newScore}`);
}
```

## Взаимодействие

### Обработка кликов
```typescript
create() {
    this.player.setInteractive();
    
    this.player.on('pointerdown', () => {
        console.log('Player clicked!');
    });
}
```

# Работа с GameObjects

### Основные типы GameObjects
```typescript
create() {
    // Изображение
    this.background = this.add.image(400, 300, 'background');
    
    // Спрайт
    this.player = this.add.sprite(400, 300, 'player');
    
    // Текст
    this.title = this.add.text(400, 100, 'Game Title', { 
        fontSize: '32px', 
        color: '#ffffff' 
    });
    
    // Прямоугольник
    this.rect = this.add.rectangle(200, 200, 100, 50, 0xff0000);
    
    // Круг
    this.circle = this.add.circle(300, 300, 25, 0x00ff00);
    
    // Линия
    this.line = this.add.line(0, 0, 0, 0, 100, 100, 0xffff00);
}
```

### Свойства и методы GameObjects
```typescript
create() {
    this.player = this.add.sprite(400, 300, 'player');
    
    // Позиция
    this.player.setPosition(200, 200);
    this.player.x = 300;
    this.player.y = 400;
    
    // Размер
    this.player.setScale(2, 2);
    this.player.scaleX = 1.5;
    this.player.scaleY = 0.8;
    
    // Поворот
    this.player.setRotation(Math.PI / 4); // 45 градусов
    this.player.angle = 90;
    
    // Прозрачность
    this.player.setAlpha(0.5);
    this.player.alpha = 0.8;
    
    // Видимость
    this.player.setVisible(false);
    this.player.visible = true;
    
    // Происхождение (anchor)
    this.player.setOrigin(0.5, 0.5); // центр
    this.player.setOrigin(0, 0); // левый верхний угол
}
```