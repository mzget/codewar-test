// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    let result = false
    // write your code in JavaScript (Node.js 8.9.4)
    let i = 0;
    let j = (A.length - 1);
    let couter = 0;
    for (i = (j - 1); i > 0; i-- , j--) {
        if (A[i] < A[j]) {
            couter++;
        }
    }

    result = (couter >= 2) ? false : true
    return result;
}

const a = [1, 5, 3, 3, 7]
const b = [1, 3, 5, 3, 4]
const r = solution(a)

console.log(r);