/*
Logic Challenge - Mencari Median

Problem
Diberikan sebuah function cariMedian(arr) yang menerima sebuah array angka. Function akan me-return median dari deret angka tersebut. Median adalah nilai tengah dari sebuah deret bilangan. Contoh, median atau dari [1, 2, 3, 4, 5] adalah 3 yang merupakan nilai yang ada di posisi tengah dari deret tersebut. Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah. Contoh, median dari [1, 2, 3, 4] adalah 2.5, karena (2 + 3 / 2).


Code
*/
function cariMedian(arr) {
    // you can only write your code here!
    const middle = Math.floor(arr.length / 2);
    const beforeMid = middle-1;
    let result = 0;
    if (arr.length % 2 !== 0) {
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i === middle) {
                temp += arr[i];
            }
        }
        result = temp;
    } else {
        let temp = 0;
        for (let i = 0; i < arr.length; i++) {
            if (i === middle) {
                temp += arr[i];
            }
            if (i === beforeMid) {
                temp += arr[i];
            }
        }
        result = temp / 2;
    }
    return result;
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 7
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5