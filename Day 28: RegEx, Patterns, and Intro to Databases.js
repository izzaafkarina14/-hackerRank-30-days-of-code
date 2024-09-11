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
    const N = parseInt(readLine().trim(), 10); // Membaca jumlah N
    let gmailUsers = [];

    for (let NItr = 0; NItr < N; NItr++) {
        const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

        const firstName = firstMultipleInput[0]; // Membaca nama depan
        const emailID = firstMultipleInput[1]; // Membaca email

        // Cek apakah email berakhiran dengan @gmail.com
        if (emailID.endsWith('@gmail.com')) {
            gmailUsers.push(firstName); // Simpan nama depan ke dalam array
        }
    }

    // Urutkan nama secara alfabetis
    gmailUsers.sort();

    // Cetak setiap nama di array yang sudah diurutkan
    gmailUsers.forEach(name => console.log(name));
}
