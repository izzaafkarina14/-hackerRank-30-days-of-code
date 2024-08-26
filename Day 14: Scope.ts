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

// private: hanya bisa diakses dari dalam kelas yg didefinisiin aja
class Difference { // langkah awal ngebuat class differenece
    private __elements: number[]; // elemen disini sbg array yg nyimpen elemen2 angka (integer) yg bakalan dipake buat analisis selisih maksimum. Number[] itu sebgai tipe 'number' & dipake buat nyimpen lebih dari 1 angka
    public maximumDifference: number; // nyimpen 1 nilai sbg selisih maksimum

    constructor(elements: number[]) {
        this.__elements = elements;
        this.maximumDifference = 0; // Inisialisasi dengan nilai 0
    }

    computeDifference(): void {
        // Cari nilai maksimum dan minimum dalam array
        const maxElement = Math.max(...this.__elements);
        const minElement = Math.min(...this.__elements);

        // Hitung selisih maksimum
        this.maximumDifference = Math.abs(maxElement - minElement);
    }
}

function main() {
    const n = parseInt(readLine()); // Membaca jumlah elemen dalam array
    const elements = readLine().split(' ').map(Number); // Membaca array dari input

    const difference = new Difference(elements); // Membuat instance kelas Difference
    difference.computeDifference(); // Memanggil metode computeDifference

    console.log(difference.maximumDifference); // Mencetak hasil maksimum selisih
}
