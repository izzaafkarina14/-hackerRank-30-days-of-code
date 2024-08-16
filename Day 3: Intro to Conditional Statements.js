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
    const N = parseInt(readLine().trim(), 10);
}

// CARA 1
function main() {
    let N = parseInt(readLine()); // readLine buat ngebaca input dari user yg udh ditentuin
    // gapake for, karena akan mengubah nilai N sehingga tidak sesuai dengan input yg sudah digunakan. FOR dipake kalo input gadiketahui
    if (N % 2 !== 0) {
        console.log(`Weird`);
    } else if (N % 2 === 0 && N >= 2 && N <= 5) {
        console.log(`Not Weird`);
    } else if (N % 2 === 0 && N >= 6 && N <= 20) {
        console.log(`Weird`);
    } else if (N % 2 === 0 && N > 20) {
        console.log(`Not Weird`);
    }
}

// CARA 2
// function main() {
//     let N = parseInt(readLine());
    
//     if ((N % 2 !== 0) || N % 2 == 0 && N >= 6 && N <= 20) {
//         console.log(`Weird`);
//     } else {
//         console.log(`Not Weird`);
//     }
// }
