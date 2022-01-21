// 1. Array : [ 2, 5, 10, saya, 29, 99, 38 ]
// Array : [ 100, 3, 66, 20, 'abjad' ]
// jika panjang array a + array b < 50,
// looping array with the condition,
// print the array if the index modulo = 0
// print the array of sum array a + array b
// print the array of string in array a + array b
// else print boolean

// 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
// Array : [ 200, 300, 21, 'dari', indonesia ]
// jika array b + array b bukan 32,
// looping array with the condition
// print the array of string
// prtin the array of modulo = 1
// print the array of sum array a + array b
// else print boolean

// 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
// Array: [ 'cyber', 'security', 20, 15, 21]
// jika ( panjang array ) + a = 28,
// looping array with the condition
// print the array of string
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean

// 4. Array: [ 20, 12, 43, 54, 24 ]
// Array: [ 'saya', 'adalah', 'seorang', 'pemusik', 0, 201]
// jika panjang array + 1 != 35,
// looping array with the condition
// print the array if the index modulo = 1
// print the array of string
// else print boolean

// 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
// Array: [ 19, 'tujuh', 'sepuluh', 11, 23, 40 ]
// jika x + ( panjang array ) bukan 35,
// looping array with the condition
// print the array of sum array a + array b
// print the array of modulo = 0
// else print boolean

// 6. Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
// Array: [ 9, 7, 24, 'data', 'lima', 25]
// jika array a + array b + u bukan 25,
// looping array with the condition
// print the array of sum array a + array b
// print the array if the index modulo = 1
// else print boolean

let dataArrayQ1A = [2, 5, 10, "saya", 29, 99, 38];
let dataArrayQ1B = [100, 3, 66, 20, "abjad"];
let dataArrayQ2A = [3, 100, 283, "saya", "adalah", "kapiten", 75];
let dataArrayQ2B = [200, 300, 21, "dari", "indonesia"];
let dataArrayQ3A = [29, 12, 30, "ini", "saya", 85];
let dataArrayQ3B = ["cyber", "security", 20, 15, 21];
let dataArrayQ4A = [20, 12, 43, 54, 24];
let dataArrayQ4B = ["saya", "adalah", "seorang", "pemusik", 0, 201];
let dataArrayQ5A = [20, "empat", "limat", 8, 29, 30];
let dataArrayQ5B = [19, "tujuh", "sepuluh", 11, 23, 40];
let dataArrayQ6A = ["data", "empat", 8, 3, 100, 8, 100, 3];
let dataArrayQ6B = [9, 7, 24, "data", "lima", 25];
let a = 22;
let x = 50;
let u = 50;
let number = 1;

class Quiz {
  constructor(dataArrayA, dataArrayB) {
    this.dataArrayA = dataArrayA;
    this.dataArrayB = dataArrayB;
    this.dataArray = dataArrayA.concat(dataArrayB);
    this.isNumber = 0;
    this.isString = [];
  }

  methodQuiz1() {
    if (this.dataArray.length < 50) {
      for (let i = 0; i < this.dataArray.length; i++) {
        if (this.dataArray.length % i == 0) {
          console.log(this.dataArray[i]);
        }
        if (typeof this.dataArray[i] == "number") {
          this.isNumber += this.dataArray[i];
        }
        if (typeof this.dataArray[i] == "string") {
          this.isString.push(this.dataArray[i]);
        }
      }
      console.log(this.isNumber);
      console.log(this.isString);
    } else {
      console.log(false);
    }
  }

  methodQuiz2() {
    if (this.dataArrayB.length + this.dataArrayB.length != 32) {
      for (let i = 0; i < this.dataArray.length; i++) {
        if (typeof this.dataArray[i] == "string") {
          this.isString.push(this.dataArray[i]);
        }
        if (this.dataArray.length % i == 1) {
          console.log(this.dataArray[i]);
        }
        if (typeof this.dataArray[i] == "number") {
          this.isNumber += this.dataArray[i];
        }
      }
      console.log(this.isNumber);
      console.log(this.isString);
    } else {
      console.log(false);
    }
  }

  methodQuiz3(a) {
    if (this.dataArray.length + a == 28) {
      for (let i = 0; i < this.dataArray.length; i++) {
        if (typeof this.dataArray[i] == "string") {
          this.isString.push(this.dataArray[i]);
        }
        if (typeof this.dataArray[i] == "number") {
          this.isNumber += this.dataArray[i];
        }
        if (this.dataArray.length % i == 0) {
          console.log(this.dataArray[i]);
        }
      }
      console.log(this.isNumber);
      console.log(this.isString);
    } else {
      console.log(false);
    }
  }

  methodQuiz4(number) {
    if (this.dataArray.length + number != 35) {
      for (let i = 0; i < this.dataArray.length; i++) {
        if (this.dataArray.length % i == 1) {
          console.log(this.dataArray[i]);
        }
        if (typeof this.dataArray[i] == "string") {
          this.isString.push(this.dataArray[i]);
        }
      }
      console.log(this.isString);
    } else {
      console.log(false);
    }
  }

  methodQuiz5(x) {
    if (x + this.dataArray.length != 35) {
      for (let i = 0; i < this.dataArray.length; i++) {
        if (typeof this.dataArray[i] == "number") {
          this.isNumber += this.dataArray[i];
        }
        if (this.dataArray.length % i == 0) {
          console.log(this.dataArray[i]);
        }
      }
      console.log(this.isNumber);
    } else {
      console.log(false);
    }
  }

  methodQuiz6(u) {
    if (this.dataArray.length + u != 25) {
      for (let i = 0; i < this.dataArray.length; i++) {
        if (typeof this.dataArray[i] == "number") {
          this.isNumber += this.dataArray[i];
        }
        if (this.dataArray.length % i == 1) {
          console.log(this.dataArray[i]);
        }
      }
      console.log(this.isNumber);
    } else {
      console.log(false);
    }
  }
}

// 1
let objectQuiz1 = new Quiz(dataArrayQ1A, dataArrayQ1B);
objectQuiz1.methodQuiz1();

// 2
let objectQuiz2 = new Quiz(dataArrayQ2A, dataArrayQ2B);
objectQuiz2.methodQuiz2();

// 3
let objectQuiz3 = new Quiz(dataArrayQ3A, dataArrayQ3B);
objectQuiz3.methodQuiz3(a);

// 4
let objectQuiz4 = new Quiz(dataArrayQ4A, dataArrayQ4B);
objectQuiz4.methodQuiz4(number);

// 5
let objectQuiz5 = new Quiz(dataArrayQ5A, dataArrayQ5B);
objectQuiz5.methodQuiz5(x);

// 6
let objectQuiz6 = new Quiz(dataArrayQ6A, dataArrayQ6B);
objectQuiz6.methodQuiz6(u);
