export function random_position_in_bounds(x: number, y: number, width: number, height: number) {
    return {
        x: x + Math.random() * width,
        y: y + Math.random() * height
    };
}