/*
Logic Challenge - Cari Pelaku (Regex)

Problem
Diberikan sebuah function cariPelaku(kalimat) yang menerima satu parameter berupa string. Function akan me-return jumlah berapa kali ditemukan kata "abc" secara berturut-turut di dalam kalimat tersebut. Gunakan regex untuk melatih kemampuan regex.


Code
*/
function cariPelaku(str) {
    // you can only write your code here!
    const abc = str.match(/abc/g);
    let count = 0;
    for (let i = 0; i < abc.length; i++) {
        count++;
    }
    return count;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2