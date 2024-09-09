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

// Fungsi untuk mencari indeks elemen dengan nilai minimum
function minimum_index(seq: number[]): number {
    if (seq.length === 0) {
        throw new Error("Cannot get the minimum value index from an empty sequence");
    }
    
    let min_idx = 0;
    for (let i = 1; i < seq.length; i++) {
        if (seq[i] < seq[min_idx]) {
            min_idx = i;
        }
    }
    return min_idx;
}

// Kelas untuk mengembalikan array kosong
class TestDataEmptyArray {
    static get_array(): number[] {
        return [];
    }
}

// Kelas untuk mengembalikan array dengan nilai unik
class TestDataUniqueValues {
    static get_array(): number[] {
        return [5, 10, 2, 7, 8]; // Contoh array dengan nilai unik
    }

    static get_expected_result(): number {
        return 2; // Indeks dari elemen dengan nilai minimum yaitu 2
    }
}

// Kelas untuk mengembalikan array dengan dua nilai minimum
class TestDataExactlyTwoDifferentMinimums {
    static get_array(): number[] {
        return [3, 1, 4, 1, 5]; // Ada dua elemen dengan nilai minimum 1 di indeks 1 dan 3
    }

    static get_expected_result(): number {
        return 1; // Indeks pertama dari elemen minimum yaitu 1
    }
}

// Fungsi untuk menjalankan pengujian
function runTests() {
    // Test 1: Cek jika array kosong mengembalikan exception
    try {
        const emptyArray = TestDataEmptyArray.get_array();
        minimum_index(emptyArray);
        throw new Error("Test 1 gagal: Exception tidak dilemparkan");
    } catch (e) {
        if (e.message !== "Cannot get the minimum value index from an empty sequence") {
            throw e;
        }
    }

    // Test 2: Cek jika array dengan nilai unik mengembalikan hasil yang benar
    const uniqueValuesArray = TestDataUniqueValues.get_array();
    const uniqueExpected = TestDataUniqueValues.get_expected_result();
    const uniqueResult = minimum_index(uniqueValuesArray);
    if (uniqueResult !== uniqueExpected) {
        throw new Error("Test 2 gagal: Hasil tidak sesuai");
    }

    // Test 3: Cek jika array dengan dua nilai minimum mengembalikan indeks yang benar
    const twoMinsArray = TestDataExactlyTwoDifferentMinimums.get_array();
    const twoMinsExpected = TestDataExactlyTwoDifferentMinimums.get_expected_result();
    const twoMinsResult = minimum_index(twoMinsArray);
    if (twoMinsResult !== twoMinsExpected) {
        throw new Error("Test 3 gagal: Hasil tidak sesuai");
    }
}

function main() {
    runTests();
    console.log("OK"); // Cetak satu kali OK jika semua pengujian berhasil
}
