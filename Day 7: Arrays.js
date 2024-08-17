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
    const n = parseInt(readLine().trim(), 10);
    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10)); // split buat ngemecah array jadi pake spasi, arrTemp itu buat ngubah tiap elemen dalam string menjadi basis 10
    const reverseArray = arr.reverse(); // buat ngereverse si array
    console.log(reverseArray.join(' ')); // join buat ngegabungin semua elemen array jadi sebuah string
}
