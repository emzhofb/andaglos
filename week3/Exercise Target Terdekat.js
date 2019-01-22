/*
Logic Challenge - Target Terdekat

Problem
Diberikan sebuah function targetTerdekat(arr) yang menerima satu parameter berupa array yang terdiri dari karakter. Function akan me-return jarak spasi antar karakter 'o' dengan karakter 'x' yang terdekat. Contoh, jika arr adalah ['x', '', 'o', '', '', 'x'], maka jarak terdekat dari 'o' ke 'x' adalah 2. Jika tidak ditemukan 'x' sama sekali, function akan me-return nilai 0.


Code
*/
function targetTerdekat(arr) {
    // you can only write your code here!
    let result = 0;
    let myO = 0;
    let myX = [];
    let temp = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'o') {
            myO = i;
        }
    }
    for (let j = 0; j < arr.length; j++) {
        if (arr[j] === 'x') {
            myX.push(j);
        }
    }
    for (let k = 0; k < myX.length; k++) {
        temp.push(Math.abs(myX[k]-myO));
    }
    for (let l = 0; l < temp.length; l++) {
        let trash = temp[0];
        for (let m = 0; m < temp.length; m++) {
            if (trash > temp[m]) {
                trash = temp[m];
            }
        }
        result = trash;
    }
    if (temp[0] === undefined) {
            return 0;
    }
    return result;
}

// TEST CASES
console.log(targetTerdekat(['', '', 'o', '', '', 'x', '', 'x'])); // 3
console.log(targetTerdekat(['o', '', '', '', 'x', 'x', 'x'])); // 4
console.log(targetTerdekat(['x', '', '', '', 'x', 'x', 'o', ''])); // 1
console.log(targetTerdekat(['', '', 'o', ''])); // 0
console.log(targetTerdekat(['', 'o', '', 'x', 'x', '', '', 'x'])); // 2