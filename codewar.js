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
//6 kyu Your order, please
function order(words) {
    if (!words)
        return "";
    let splitWord = words.split(" ");
    let s = words.match(/\d+/g).map(Number);
    let mapped = splitWord.map((v, i) => ({ word: v, id: i, numb: s[i] }));
    let result = mapped.sort(function (a, b) { return a.numb - b.numb; }).map(item => item.word).join(" ");
    return result;
}
exports.order = order;
// 6 kyu : Length of missing array
function getLengthOfMissingArray(arrayOfArrays) {
    if (!arrayOfArrays || arrayOfArrays.length === 0)
        return 0;
    let arrs = arrayOfArrays.map((arr) => arr);
    if (arrs.some(v => v.length === 0))
        return 0;
    let sortArrs = arrs.sort((a, b) => a.length - b.length);
    let result = 0;
    let startAt = sortArrs[0].length;
    for (let index = 0; index < sortArrs.length; index++) {
        const element = sortArrs[index];
        if (element.length !== (index + startAt)) {
            result = (index + startAt);
            break;
        }
    }
    return result;
}
exports.getLengthOfMissingArray = getLengthOfMissingArray;
// 6 kyu : A Rule of Divisibility by 13
function thirt(n) {
    let result = n;
    function calc(source) {
        // 1, 10, 9, 12, 3, 4
        let mult = [1, 10, 9, 12, 3, 4];
        let nString = source.toString().split('').map(Number).reverse();
        let results = nString.map((v, i) => {
            return v * mult[i % 6];
        });
        let red = results.reduce((a, b) => a + b);
        if (red.toString().length > 2) {
            calc(red);
        }
        else {
            result = red;
        }
    }
    calc(result);
    return result;
}
exports.thirt = thirt;
//7 kyu : Possiblities Array
function isAllPossibilities(x) {
    let f = x.filter((v, i) => x.indexOf(v) === i);
    if (f.length != x.length)
        return false;
    let pass1 = f.some(v => v === 0);
    let pass2 = x.some(v => v == x.length - 1);
    return (pass1 && pass2);
}
exports.isAllPossibilities = isAllPossibilities;
// 7 kyu : Complementary DNA
function dnaStrand(dna) {
    let T = dna.replace(/A|T|G|C/gi, function (v, i, a) {
        switch (v) {
            case "A": return "T";
            case "T": return "A";
            case "C": return "G";
            case "G": return "C";
            default: return "";
        }
    });
    return T;
}
exports.dnaStrand = dnaStrand;
// 7 kyu : Digital cypher
function encode(str, n) {
    const keys = new Map();
    keys.set("a", 1);
    keys.set("b", 2);
    keys.set("c", 3);
    keys.set("d", 4);
    keys.set("e", 5);
    keys.set("f", 6);
    keys.set("g", 7);
    keys.set("h", 8);
    keys.set("i", 9);
    keys.set("j", 10);
    keys.set("k", 11);
    keys.set("l", 12);
    keys.set("m", 13);
    keys.set("n", 14);
    keys.set("o", 15);
    keys.set("p", 16);
    keys.set("q", 17);
    keys.set("r", 18);
    keys.set("s", 19);
    keys.set("t", 20);
    keys.set("u", 21);
    keys.set("v", 22);
    keys.set("w", 23);
    keys.set("x", 24);
    keys.set("y", 25);
    keys.set("z", 26);
    let key = n.toString().split('');
    let text = str.split('');
    let r = text.map((v, i) => {
        return keys.get(v) + Number(key[i % key.length]);
    });
    return r;
}
exports.encode = encode;
// 7 kyu : Growth of a Population
function nbYear(p0, percent, aug, p) {
    let loop = 0;
    while (p0 < p) {
        p0 = p0 + (p0 * (percent / 100) + aug);
        loop++;
    }
    return loop;
}
exports.nbYear = nbYear;
//7 kyu : Averages of numbers
function averages(numbers) {
    if (!numbers || numbers.length <= 1)
        return [];
    let results = new Array();
    let reduces = numbers.reduce((a, b) => {
        let r = (a + b);
        let avr = r / 2;
        results.push(avr);
        return b;
    });
    return results;
}
exports.averages = averages;
function feast(beast, dish) {
    return (beast[0] === dish.charAt(0) && beast.charAt(beast.length - 1) === dish.charAt(dish.length - 1)) ? true : false;
}
exports.feast = feast;
function positiveSum(arr) {
    return (arr.length == 0) ? 0 : arr.reduce((a, b) => {
        return a + ((b >= 0) ? b : 0);
    }, 0);
}
exports.positiveSum = positiveSum;
function findSmallestInt(args) {
    let sorts = args.sort((a, b) => a - b);
    return sorts[0];
}
exports.findSmallestInt = findSmallestInt;
// 8 kyu : Fake Binary
exports.fakeBin = (x) => {
    let str = x.split("").map(Number).map((v, i, a) => {
        return (v < 5) ? "0" : "1";
    }).join("");
    return str;
};
//7 kyu : Vowel Count
function getCount(str) {
    let newStr = str.match(/a|e|i|o|u/gi);
    return (newStr && newStr.length) ? newStr.length : 0;
}
exports.getCount = getCount;
function xor(a, b) {
    const i = (a) ? 1 : 0;
    const j = (b) ? 1 : 0;
    return ((i ^ j) == 1) ? true : false;
}
exports.xor = xor;
function repeatStr(n, s) {
    let r = "";
    for (let i = 1; i < n; i++) {
        r = r + s.toString();
    }
    return r;
}
exports.repeatStr = repeatStr;
// 6 kyu : Steps in Primes
exports.step = (g, m, n) => {
    let source = Array.from({ length: (n - m) + 1 }).map((v, i) => {
        return m + i;
    });
    let primes = source.filter(n => {
        var m = Math.sqrt(n);
        var isPrime = true;
        for (var i = 2; i <= m; i++) {
            if (n % i == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime)
            return n;
    });
    let res = new Array();
    for (let index = 0; index < primes.length; index++) {
        const prime = primes[index];
        for (let loop2 = index; loop2 < primes.length; loop2++) {
            const prime2 = primes[loop2];
            if (prime2 - prime == g) {
                res = [prime, prime2];
                index = prime.length;
            }
        }
    }
    return (res.length === 0) ? null : res;
};
// 5 kyu : A Chain adding function
// export function add(fn): any {
//     if (typeof fn === "function") {
//         return (x) => {
//             if (fn.length <= 1) {
//                 return fn(x);
//             }
//             return add(fn.bind(null, x));
//         };
//     }
// }
// function strictCurry(fn) {
//     return (x) => {
//         if (fn.length <= 1) {
//             return fn(x);
//         }
//         return strictCurry(fn.bind(null, x));
//     };
// }
function curry(fn) {
    return (...xs) => {
        if (xs.length === 0) {
            throw Error('EMPTY INVOCATION');
        }
        if (xs.length >= fn.length) {
            return fn(...xs);
        }
        return curry(fn.bind(null, ...xs));
    };
}
function magician(targetfn) {
    var numOfArgs = targetfn.length;
    console.log(targetfn);
    if (arguments.length - 1 < numOfArgs) {
        return magician.bind(null, ...arguments);
    }
    else {
        return targetfn.apply(null, Array.prototype.slice.call(arguments, 1));
    }
    // return function fn(...a) {
    //     console.log(arguments.length, arguments, numOfArgs)
    //     if (arguments.length < numOfArgs) {
    //         return fn.bind(null, ...arguments);
    //     } else {
    //         return targetfn.apply(null, arguments);
    //     }
    // }
}
function strictCurry(fn) {
    return (x) => {
        if (fn.length <= 1) {
            return fn(x);
        }
        return strictCurry(fn.bind(null, x));
    };
}
const sum = (x, y, z, a) => {
    // return   ...args.reduce((a, b) => a + b);
    return x + y + z + a;
};
function add(x) {
    // const r = magician(sum)(x);
    const r = cur(sum)(x);
    console.log(x, r);
    return r;
}
exports.default = add;
const cur = fn => (...args) => fn.bind(null, ...args);
console.log(add(1)(2)(3)(4));
