
export function getRndInteger(min: number = 1000000000, max: number = 10000000000000000000): string {
    return (Math.floor(Math.random() * (max - min)) + min).toString();
}