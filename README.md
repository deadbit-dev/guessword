# Guess Word Game

Проект игры на Phaser с TypeScript.

## Установка

```bash
npm install
```

## Запуск в режиме разработки

```bash
npm run dev
```

Игра откроется в браузере по адресу http://localhost:8080

## Сборка для продакшена

```bash
npm run build
```

## Структура проекта

```
src/
├── index.html          # HTML файл игры
├── index.ts            # Точка входа
├── scenes/             # Сцены игры
│   └── GameScene.ts    # Основная сцена
└── assets/             # Игровые ресурсы (изображения, звуки)
```

## Технологии

- Phaser 3.70.0 - игровой движок
- TypeScript 5.3.2 - типизированный JavaScript
- Webpack 5 - сборщик модулей
- Webpack Dev Server - сервер разработки

## Настройка

Все настройки находятся в файлах:
- `tsconfig.json` - конфигурация TypeScript
- `webpack.config.js` - конфигурация Webpack
- `package.json` - зависимости и скрипты

## Добавление новых сцен

1. Создайте новый файл в папке `src/scenes/`
2. Унаследуйте класс от `Phaser.Scene`
3. Добавьте сцену в массив сцен в `src/index.ts`
