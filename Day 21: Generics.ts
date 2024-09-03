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

// fungsi generik printArray
function printArray<T>(arr: T[]): void {
    arr.forEach(element => {
        console.log(element);
    });
}

// fungsi main
function main() {
    while (currentLine < inputLines.length) { // memastikan bahwa program tidak membaca lebih dari jumlah input yang tersedia.
        // contoh membaca input dan memanggil printArray
        const n = parseInt(readLine()); // membaca jml elemen dlm array
        const arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(readLine());
        }
        printArray(arr);
    }
}
