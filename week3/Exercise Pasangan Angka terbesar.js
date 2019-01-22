/*
Logic Challenge - Pasangan Angka Terbesar

Problem
Diberikan sebuah function pasanganTerbesar(angka) yang menerima 1 parameter berupa angka. Functiona akan menentukan pasangan dua digit angka mana yang paling besar dan me-return angka tersebut. Contoh, jika angka adalah 183928, maka function akan me-return 92, pasangan dua digit angka yang paling besar diantara yang lainnya.


Code
*/
function pasanganTerbesar(num) {
    // you can only write your code here!
    let stringNum = String(num);
    // console.log(typeof stringNum);
    let temp = [];
    for (let i = 0; i < stringNum.length-1; i++) {
        // console.log(stringNum[i]);
        temp.push(Number(stringNum[i] + stringNum[i+1]));
    }
    // console.log(temp);
    for (let i = 0; i < temp.length; i++) {
        // console.log(temp[i]);
        let result = 0;
        for (let j = 0; j < temp.length; j++) {
            if (result < temp[j]) {
                result = temp[j];
            } else if (result > temp[j]) {
                result = result;
            }
        }
        return result;
    }
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99