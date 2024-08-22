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

    let arr = Array(6);
    
    let maxSum = -63 // didapat dari 9 * (-9) atau si constrainnya

    for (let i = 0; i < 6; i++) {
        arr[i] = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));
    }
    for (let i = 0; i<= 3; i++) {
        for (let j = 0; j <=3; j++) {
            let sum = arr[i][j] + arr[i][j+1] + arr[i][j+2]    // Baris pertama
                      + arr[i+1][j+1]                        // Baris kedua (elemen tengah)
                      + arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];  // Baris ketiga
            
            // Perbarui maxSum jika sum saat ini lebih besar
            if (sum > maxSum) {
                maxSum = sum;
            }
        }
    }
    console.log(maxSum);
}
