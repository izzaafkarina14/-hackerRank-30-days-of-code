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
    const S = readLine();
    // tulis kode program disini
    const parsedInt = parseInt(S, 10);
    console.log(Number.isNaN(parsedInt) ? "Bad String" : parsedInt);
}
