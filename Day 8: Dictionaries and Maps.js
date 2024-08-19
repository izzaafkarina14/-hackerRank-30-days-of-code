function processData(input) {
    //Enter your code here
    let readLine = input.split('\n');
    let n = parseInt(readLine[0]);
    let phoneBook = {}; // ngebuat sebuah objek kosong
    
    // loop buat ngisi key value di dalem objek
    for (let i = 1; i <= n; i++) {
        let [name, phone] = readLine[i].split(' ');
        phoneBook[name] = phone;
    }
    
    // loop buat ngeproses baris yang kesisa sebagai query
    for (let i = n + 1; i < readLine.length; i++) { // n+ 1 karena proses yg dimulai itu dari array ke-1. trs i < readLine.length bukan i <= readLine.length karena utk ngemastiin bakal ngeproses baris yg ada querinya
        let queryName = readLine[i];
        if (phoneBook[queryName]) {
            console.log(queryName + '=' + phoneBook[queryName]);
        } else {
            console.log("Not found");
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
