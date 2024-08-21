'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    // Membaca input sebagai integer
    let n = parseInt(readLine().trim(), 10);

    // Konversi angka ke biner
    let binaryString = n.toString(2);
    
    // Inisialisasi variabel untuk menghitung jumlah total '1' yang berdekatan
    let maxCount = 0;
    let currentCount = 0;

    // Iterasi melalui string biner
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] === '1') {
            // Menambah jumlah '1' yang berdekatan
            currentCount++;
        } else {
            // Reset currentCount saat bertemu '0'
            maxCount = Math.max(maxCount, currentCount);
            currentCount = 0;
        }
    }

    // Pastikan untuk memeriksa terakhir kali jika string biner diakhiri dengan '1'
    maxCount = Math.max(maxCount, currentCount);

    // Output hasil jumlah maksimum '1' yang berdekatan
    console.log(maxCount);
}
