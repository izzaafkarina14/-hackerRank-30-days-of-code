function processData(input) {
    // Memisahkan input menjadi baris-baris
    const lines = input.trim().split('\n');

    // Memparsing tanggal pengembalian aktual
    const [D1, M1, Y1] = lines[0].split(' ').map(Number);

    // Memparsing tanggal jatuh tempo pengembalian
    const [D2, M2, Y2] = lines[1].split(' ').map(Number);

    let fine = 0;

    if (Y1 > Y2) {
        // Buku dikembalikan setelah tahun jatuh tempo
        fine = 10000;
    } else if (Y1 === Y2) {
        if (M1 > M2) {
            // Buku dikembalikan setelah bulan jatuh tempo dalam tahun yang sama
            fine = 500 * (M1 - M2);
        } else if (M1 === M2 && D1 > D2) {
            // Buku dikembalikan setelah hari jatuh tempo dalam bulan dan tahun yang sama
            fine = 15 * (D1 - D2);
        }
        // Jika dikembalikan sebelum atau pada tanggal jatuh tempo, tidak ada denda
    }
    // Jika buku dikembalikan sebelum tahun jatuh tempo atau pada tahun dan bulan yang sama dengan tanggal lebih awal, tidak ada denda

    console.log(fine);
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
let _input = "";
process.stdin.on("data", function (input) {
    _input += input;
});

process.stdin.on("end", function () {
    processData(_input);
});
