function processData(input) {
    //Enter your code here
    let inputLine = input.split('\n'); // buat ngemisah baris. misal: input 2. brrt ada 2 barus, hacker (baris 1) & rank (baris 2)
    let T = parseInt(inputLine[0]);
    
    // proses untuk setiap kasus
    for(let i = 1; i <= T; i++) {
        let splitWord = inputLine[i];
        let even = [];
        let odd = [];
        
        // memisah karakter dalam index ganjil dan genap
        for (let j = 0; j < splitWord.length; j++) {
            if(j % 2 === 0) {
                even.push(splitWord[j]);
            } else {
                odd.push(splitWord[j]);
            }
        }
        console.log(even.join('') + ' ' + odd.join(''));
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
