"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function descendingOrder(n) {
    //...
    let digits = ("" + n).split("");
    let nums = digits.map(i => parseInt(i, 10));
    let results = nums.sort((a, b) => b - a);
    let strResult = "";
    results.forEach(i => strResult += i);
    return parseInt(strResult, 10);
}
function foldArray(sources, runs) {
    let loop = 0;
    let results = new Array();
    function calc(array) {
        let spliceId = array.length / 2;
        let firsts = array.slice(0, spliceId);
        let lasts = array.slice(spliceId).reverse();
        results = lasts.map((v, i, a) => (!!firsts[i]) ? v + firsts[i] : v);
        loop++;
        console.log(loop);
        console.log(firsts, lasts, results);
        if (loop < runs) {
            calc(results);
        }
    }
    calc(sources);
    console.log("res", results);
    return results;
}
// const input = [1, 2, 3, 4, 5];
// const input2 = [-9, 9, -8, 8, 66, 23];
// foldArray(input2, 1)
function findLongest(array) {
    let strArr = array.map(item => item.toString());
    let highest = 0;
    let maps = new Map();
    strArr.map(item => {
        if (highest < item.length) {
            highest = item.length;
            maps.set(highest, Number(item));
        }
        // console.log(highest);
    });
    // console.log(maps);
    let res = maps.get(highest) || 0;
    return res;
}
// let input = [1, 10, 100]; // 100
// let input2 = [8, 900, 500]; // 900
// findLongest(input2)
function findOdd(xs) {
    let maps = new Map();
    let result = 0;
    xs.map(item => {
        let count = maps.get(item) || 0;
        count++;
        maps.set(item, count);
    });
    maps.forEach((value, key, map) => {
        if (value % 2 != 0) {
            result = key;
        }
    });
    // console.log(result);
    return result;
}
;
// let input = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]; // 5
// let input2 = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]; //10
// console.info(findOdd(input))
function findUniq(arr) {
    let maps = new Map();
    arr.map(v => {
        let count = maps.get(v) || 0;
        count++;
        return maps.set(v, count);
    });
    let result = 0;
    maps.forEach((v, k, m) => {
        if (v == 1)
            result = k;
    });
    return result;
}
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55
function missing(s) {
    let sequenceArr = [...s];
    console.log(sequenceArr.length, s);
    let result = -1;
    let wrongFormat = true;
    let digit = 1;
    function findNext(index, _digit) {
        let end = index + _digit;
        let slice = sequenceArr.slice(index, end);
        console.log("findNext", index, end, slice);
        let text = "";
        slice.forEach(i => {
            text += i;
        });
        let next = Number(text);
        return next;
    }
    function looper(_digit) {
        let seq = [];
        for (let index = 0; index < sequenceArr.length;) {
            let prev = seq[seq.length - 1];
            let next = findNext(index, _digit);
            prev = (!prev) ? next - 1 : prev;
            console.log("text", prev, next);
            if (prev > next) {
                // let diff = prev - next;
                _digit += 1;
                next = findNext(index, _digit);
                console.log("text2", prev, next);
                let diff2 = next - prev;
                if (diff2 > 2) {
                    return;
                }
                else if (diff2 == 2) {
                    seq.push(next);
                    return seq;
                }
            }
            else {
                let diff = next - prev;
                if (diff > 2 || diff == 0) {
                    return;
                }
                if (diff == 2) {
                    seq.push(next);
                    return seq;
                }
            }
            seq.push(next);
            index += _digit;
        }
        return seq;
    }
    function spiltArr2(_digit) {
        const seq = looper(_digit);
        console.log("seq", seq);
        if (seq && seq.length !== 0) {
            for (let index = 0; index < seq.length; index++) {
                let nextVal = seq[index + 1];
                let val = seq[index];
                let diff = nextVal - val;
                if (val < nextVal && diff == 1) {
                    console.log('A');
                    wrongFormat = false;
                }
                else if (val < nextVal) {
                    console.log('B');
                    wrongFormat = (diff > 2) ? true : false;
                    result = (!wrongFormat) ? val + 1 : -1;
                    return;
                }
                else {
                    console.log('C');
                    wrongFormat = true;
                    return;
                }
            }
        }
        if (wrongFormat) {
            digit++;
            spiltArr2(digit);
        }
    }
    spiltArr2(digit);
    return result;
}
exports.missing = missing;
var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
function mxdiflg(a1, a2) {
    if (a1.length == 0 || a2.length == 0)
        return -1;
    let result = -1;
    let s1 = a1.map(s => s.length);
    let s2 = a2.map(s => s.length);
    for (let index = 0; index < s1.length; index++) {
        const s1element = s1[index];
        for (let index = 0; index < s2.length; index++) {
            const s2element = s2[index];
            let len = Math.abs(s1element - s2element);
            if (len > result) {
                result = len;
            }
        }
    }
    return result;
}
exports.mxdiflg = mxdiflg;
// Buying new car.
function nbMonths(startPriceOld, startPriceNew, savingperMonth, percentLossByMonth) {
    let loop = 0;
    let remain = 0;
    let fixedLose = 0.5;
    let saving = 0;
    function calc() {
        saving += savingperMonth;
        let pLose = percentLossByMonth / 100;
        startPriceOld -= startPriceOld * pLose;
        startPriceNew -= startPriceNew * pLose;
        remain = Math.round(startPriceOld + saving - startPriceNew);
        loop += 1;
        if (loop % 2 == 1) {
            percentLossByMonth += fixedLose;
        }
        if (startPriceOld + saving < startPriceNew) {
            calc();
        }
    }
    if (startPriceOld >= startPriceNew)
        return [0, startPriceOld - startPriceNew];
    calc();
    return [loop, remain];
}
exports.nbMonths = nbMonths;
//Form The Minimum
exports.minValue = (values) => {
    let vals = values.filter((v, i, a) => a.indexOf(v) === i);
    vals.sort();
    let result = "";
    vals.map(v => result += v);
    return Number(result);
};
//Century From Year
exports.centuryFromYear = (year) => {
    let cent = Math.ceil(year / 100);
    return cent;
    // return (Math.round(cent) < cent) ? Math.round(cent) + 1 : Math.round(cent);
};
//Remove First and Last Character
function removeChar(str) {
    return str.slice(1, str.length - 1);
}
exports.removeChar = removeChar;
