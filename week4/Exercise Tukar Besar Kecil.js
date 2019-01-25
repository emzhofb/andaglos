/*
Logic Challenge - Tukar Besar Kecil

Problem
Diberikan function tukarBesarKecil(kalimat) yang menerima satu parameter berupa string. Function akan me-return string tersebut dengan menukar karakter yang uppercase menjadi lowercase, dan sebaliknya. Spasi dan simbol diabaikan.


Code
*/
function tukarBesarKecil(kalimat) {
    // you can only write your code here!
    const hurufKecil = 'abcdefghijklmnopqrstuvwxyz';
    const hurufBesar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let result = '';
    for (let i = 0; i < kalimat.length; i++) {
        let flag = false;
        for (let j = 0; j < hurufKecil.length; j++) {
            if (kalimat[i] === hurufKecil[j]) {
                result += hurufBesar[j];
                flag = true;
            } else if (kalimat[i] === hurufBesar[j]) {
                result += hurufKecil[j];
                flag = true;
            }
        }
        if (flag === false) {
            result += kalimat[i];
        }
    }
    return result;
}

// TEST CASES
console.log(tukarBesarKecil('Hello World')); // "hELLO wORLD"
console.log(tukarBesarKecil('I aM aLAY')); // "i Am Alay"
console.log(tukarBesarKecil('My Name is Bond!!')); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil('IT sHOULD bE me')); // "it Should Be ME"
console.log(tukarBesarKecil('001-A-3-5TrdYW')); // "001-a-3-5tRDyw"