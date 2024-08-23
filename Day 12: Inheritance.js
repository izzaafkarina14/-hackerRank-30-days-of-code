'use strict';

var _input = '';
var _index = 0;
process.stdin.on('data', (data) => { _input += data; });
process.stdin.on('end', () => {
    _input = _input.split(new RegExp('[ \n]+'));
    main();    
});
function read() { return _input[_index++]; }

/**** Ignore above this line. ****/

class Person {
    constructor(firstName, lastName, identification) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.idNumber = identification;
    }
    
    printPerson() {
        console.log(
            "Name: " + this.lastName + ", " + this.firstName 
            + "\nID: " + this.idNumber
        )
    }
}

class Student extends Person {
    /*	
    *   Class Constructor
    *   
    *   @param firstName - A string denoting the Person's first name.
    *   @param lastName - A string denoting the Person's last name.
    *   @param id - An integer denoting the Person's ID number.
    *   @param scores - An array of integers denoting the Person's test scores.
    */
    // Write your constructor here
    constructor(firstName, lastName, idNumber, scores) {
        super(firstName, lastName, idNumber); // inisalisasi properti dari Person
        this.scores = scores; //menambahkan properti untuk Student class & menyimpan nilai
    }
        
    calculate() {
        // menghitung skor rata-rata
        let total = this.scores.reduce((acc, score) => acc + score, 0) // acc (accumulator/pengumpul). Setiap reduce dijalankan, akan menambah nilai elemen array saat ini (score) ke total elemen sementara (acc). 0 itu sebagai nilai awal accumulator
        let average = total/this.scores.length; 
    /*	
    *   Method Name: calculate
    *   @return A character denoting the grade.
    */
    // Write your method here
    // Menentukan nilai berdasarkan rata-rata
        if (90 <= average && average <= 100) {
            return 'O';
        } else if (80 <= average && average < 90) {
            return 'E';
        } else if (70 <= average && average < 80) {
            return 'A';
        } else if (55 <= average && average < 70) {
            return 'P';
        } else if (40 <= average && average < 55) {
            return 'D';
        } else {
            return 'T';
        }
    }
}

function main() {
    let firstName = read()
    let lastName = read()
    let id = +read()
    let numScores = +read()
    let testScores = new Array(numScores)
    
    for (var i = 0; i < numScores; i++) {
        testScores[i] = +read()  
    }

    let s = new Student(firstName, lastName, id, testScores)
    s.printPerson()
    s.calculate()
    console.log('Grade: ' + s.calculate())
}
