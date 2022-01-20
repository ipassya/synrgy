// 1. Array : [ 2, 5, 10, 'ini dia', 'data', 100 , 38 ]
// jika panjang array kurang dari 50, looping array
// else print boolean

// 2. Array : [ 3, 100, 283, 'saya', 'adalah', 'kapiten', 75 ]
// jika b + ( panjang array ) bukan 32, looping array
// else print boolean

// 3. Array: [ 29, 12, 30, 'ini', 'saya', 85 ]
// jika ( panjang array ) + a = 28, looping array
// else print boolean

// 4. Array: [ 20, 12, 43, 54, 24 ]
// jika panjang array + 1 bukan 35, looping array
// else print boolean

// 5. Array: [ 20, 'empat', 'limat', 8, 29, 30 ]
// jika x + ( panjang array ) bukan 35, looping array
// else print boolean

// 6.  Array: [ 'data', 'empat', 8 , 3, 100, 8, 100, 3  ]
// jika c + ( panjang array ) + a bukan 25, looping array
// else print boolean

let dataArray1 = [2, 5, 10, "ini dia", "data", 100, 38];
let dataArray2 = [3, 100, 283, "saya", "adalah", "kapiten", 75];
let dataArray3 = [29, 12, 30, "ini", "saya", 85];
let dataArray4 = [20, 12, 43, 54, 24];
let dataArray5 = [20, "empat", "limat", 8, 29, 30];
let dataArray6 = ["data", "empat", 8, 3, 100, 8, 100, 3];
let a = 50;
let b = 50;
let c = 50;
let x = 50;
let number = 1;

// 1
const quiz1 = (dataArray) => {
  if (dataArray.length < 50) {
    dataArray.forEach((data) => {
      console.log(data);
    });
  } else {
    console.log(false);
  }
};
quiz1(dataArray1);

// 2
const quiz2 = (dataArray, b) => {
  if (b + dataArray.length != 32) {
    dataArray.forEach((data) => {
      console.log(data);
    });
  } else {
    console.log(false);
  }
};
quiz2(dataArray2, b);

// 3
const quiz3 = (dataArray, a) => {
  if (dataArray.length + a == 28) {
    dataArray.forEach((data) => {
      console.log(data);
    });
  } else {
    console.log(false);
  }
};
quiz3(dataArray3, a);

// 4
const quiz4 = (dataArray, number) => {
  if (dataArray.length + number != 35) {
    dataArray.forEach((data) => {
      console.log(data);
    });
  } else {
    console.log(false);
  }
};
quiz4(dataArray4, number);

// 5
const quiz5 = (dataArray, x) => {
  if (x + dataArray.length != 35) {
    dataArray.forEach((data) => {
      console.log(data);
    });
  } else {
    console.log(false);
  }
};
quiz5(dataArray5, x);

// 6
const quiz6 = (dataArray, a, c) => {
  if (c + dataArray.length + a != 25) {
    dataArray.forEach((data) => {
      console.log(data);
    });
  } else {
    console.log(false);
  }
};
quiz6(dataArray6, a, c);
