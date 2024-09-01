'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');
let inputString: string = '';
let inputLines: string[] = [];
let currentLine: number = 0;
process.stdin.on('data', function(inputStdin: string): void {
    inputString += inputStdin;
});

process.stdin.on('end', function(): void {
    inputLines = inputString.split('\n');
    inputString = '';
    main();
});

function readLine(): string {
    return inputLines[currentLine++];
}

// Nulis kodenya dari sini
interface AdvancedArithmetic { // interface yg ngedefinisiin metode 'divisorSum(n)' yg harus diimplementasiin
    divisorSum(n: number): number // deklarasi sebuah metode dalam TS. 'divisorSum' adalah sebuah metode yg nerima satu parameter 'n' bertipe 'number', dan metode ini akan mengembalikan nilai bertipe 'number'
}

class Calculator implements AdvancedArithmetic {
    divisorSum(n: number): number {
        let sum = 0;
        // loop untuk menemukan semua pembagi dari n
        for (let i = 1; i <= n; i++) {
            if (n % i === 0) {
                sum += i;
            }
        }
        return sum;
    }
}

function main() {
    // Enter your code here
    const n: number = parseInt(readLine());
    const myCalculator = new Calculator();
    const sum = myCalculator.divisorSum(n);
    console.log(`I implemented: AdvancedArithmetic`);
    console.log(sum);
}
