function isPrime(n) {
    if (n <= 1) {
        return false; // bukan bilangan prima
    }
    
    if (n === 2) {
        return true; // 2 adalah bilangan prima
    }
    
    if (n % 2 === 0) {
        return false; // bil genap selain 2 bukan prima
    }
    
    // mengecek faktor dari 3 hingga √n
        // i = 3 -> i dimulai dari 3
        // i * i <= n -> memeriksa bahwa hanya memeriksa faktor pembagi hingga √n. contoh, √36 = 6. faktor dari 36 itu, 2*18, 3*12, 4*9, 6*6. jadi cmn perlu ngecek maksimal sampe hasil dari √n. ini sebagai bentuk efektifitas algoritma dalam eksekusi program.
        // i += 2 -> untuk melompati bilangan genap. karena, bil genap (selain 2) gaperlu diperiksa, krn hasilnya pasti prima
    for (let i = 3; i * i <= n; i += 2) {
        if (n % i === 0) { // jika ada yg memenuhi kondisi ini, maka n itu punya pembagi selain 1 dan dirinya sendiri. shg itu bkn bil. prima
            return false; // jika ditemukan pembagi, maka bukan bil. prima
        }
    }
    return true; // jika tidak ada pembagi, maka itu bilangan prima
}


function processData(input) {
    //Enter your code here
    const lines = input.trim().split("\n");
    const T = parseInt(lines[0], 10); // jumlah kasus uji
    for (let i = 1; i <= T; i++) {
        const n = parseInt(lines[i], 10); // angka yg diuji
        if (isPrime(n)) {
            console.log("Prime");
        } else {
            console.log("Not prime");
        }
    }
} 

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
    _input += input;
});


process.stdin.on("end", function () {
   processData(_input);
});
