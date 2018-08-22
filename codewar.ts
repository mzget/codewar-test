function descendingOrder(n: number) {
    //...
    let digits = ("" + n).split("");
    let nums = digits.map(i => parseInt(i, 10))
    let results = nums.sort((a, b) => b - a);

    let strResult = "";
    results.forEach(i => strResult += i)

    return parseInt(strResult, 10);
}

function foldArray(sources: number[], runs: number): number[] {
    let loop = 0;
    let results = new Array();
    function calc(array: number[]) {
        let spliceId = array.length / 2;
        let firsts = array.slice(0, spliceId);
        let lasts = array.slice(spliceId).reverse();

        results = lasts.map((v, i, a) => (!!firsts[i]) ? v + firsts[i] : v);

        loop++;
        console.log(loop)
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

function findLongest(array: number[]): number {
    let strArr = array.map(item => item.toString());

    let highest = 0;
    let maps = new Map<number, number>();
    strArr.map(item => {
        if (highest < item.length) {
            highest = item.length;
            maps.set(highest, Number(item));
        }
        // console.log(highest);
    })
    // console.log(maps);
    let res = maps.get(highest) || 0;
    return res;
}
// let input = [1, 10, 100]; // 100
// let input2 = [8, 900, 500]; // 900
// findLongest(input2)

function findOdd(xs: number[]): number {
    let maps = new Map<number, number>();
    let result = 0;
    xs.map(item => {
        let count = maps.get(item) || 0;
        count++
        maps.set(item, count);
    });
    maps.forEach((value, key, map) => {
        if (value % 2 != 0) {
            result = key;
        }
    });
    // console.log(result);
    return result;
};

// let input = [20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5]; // 5
// let input2 = [1, 1, 1, 1, 1, 1, 10, 1, 1, 1, 1]; //10
// console.info(findOdd(input))

function findUniq(arr: Array<number>): number {
    let maps = new Map();
    arr.map(v => {
        let count = maps.get(v) || 0;
        count++;
        return maps.set(v, count);
    })

    let result = 0;
    maps.forEach((v, k, m) => {
        if (v == 1) result = k;
    });

    return result;
}
// console.log(findUniq([1, 1, 1, 2, 1, 1])); // 2
// console.log(findUniq([0, 0, 0.55, 0, 0])); // 0.55

export function missing(s: string) {
    let sequenceArr = [...s];
    console.log(sequenceArr.length, s);
    let result = -1;
    let wrongFormat = true;
    let digit = 1;

    function findNext(index, _digit) {
        let end = index + _digit;
        let slice = sequenceArr.slice(index, end);
        console.log("findNext", index, end, slice)
        let text = "";
        slice.forEach(i => {
            text += i;
        })
        let next = Number(text)

        return next;
    }

    function looper(_digit) {
        let seq = [];
        for (let index = 0; index < sequenceArr.length;) {
            let prev = seq[seq.length - 1];

            let next = findNext(index, _digit);
            prev = (!prev) ? next - 1 : prev;
            console.log("text", prev, next)
            if (prev > next) {
                // let diff = prev - next;
                _digit += 1;
                next = findNext(index, _digit);
                console.log("text2", prev, next)
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
                    console.log('A')
                    wrongFormat = false;
                } else if (val < nextVal) {
                    console.log('B')
                    wrongFormat = (diff > 2) ? true : false;
                    result = (!wrongFormat) ? val + 1 : -1;
                    return;
                }
                else {
                    console.log('C')
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

var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
export function mxdiflg(a1: Array<string>, a2: Array<string>) {
    if (a1.length == 0 || a2.length == 0) return -1;

    let result = -1;

    let s1 = a1.map(s => s.length);
    let s2 = a2.map(s => s.length);
    for (let index = 0; index < s1.length; index++) {
        const s1element = s1[index];
        for (let index = 0; index < s2.length; index++) {
            const s2element = s2[index];
            let len = Math.abs(s1element - s2element)
            if (len > result) {
                result = len;
            }
        }
    }

    return result;
}

// Buying new car.
export function nbMonths(startPriceOld: number, startPriceNew: number, savingperMonth: number, percentLossByMonth: number): number[] {
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

    if (startPriceOld >= startPriceNew) return [0, startPriceOld - startPriceNew];
    calc();

    return [loop, remain];
}

//Form The Minimum
export const minValue = (values: number[]): number => {
    let vals = values.filter((v, i, a) => a.indexOf(v) === i);
    vals.sort();
    let result = "";
    vals.map(v => result += v);
    return Number(result);
};

//Century From Year
export const centuryFromYear = (year: number): number => {
    let cent = Math.ceil(year / 100);
    return cent;
    // return (Math.round(cent) < cent) ? Math.round(cent) + 1 : Math.round(cent);
};

//Remove First and Last Character
export function removeChar(str: string): string {
    return str.slice(1, str.length - 1);
}

//6 kyu Your order, please
export function order(words: string): string {
    if (!words) return "";

    let splitWord = words.split(" ");
    let s = words.match(/\d+/g).map(Number);

    let mapped = splitWord.map((v, i) => ({ word: v, id: i, numb: s[i] }));
    let result = mapped.sort(function (a, b) { return a.numb - b.numb }).map(item => item.word).join(" ");

    return result;
}

// 6 kyu : Length of missing array
export function getLengthOfMissingArray(arrayOfArrays: any[]): number {
    if (!arrayOfArrays || arrayOfArrays.length === 0) return 0;

    let arrs = arrayOfArrays.map((arr: Array<number>) => arr);
    if (arrs.some(v => v.length === 0)) return 0;
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

// 6 kyu : A Rule of Divisibility by 13
export function thirt(n: number): number {
    let result = n;

    function calc(source: number) {
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
    calc(result)
    return result;
}

//7 kyu : Possiblities Array
export function isAllPossibilities(x: number[]): boolean {
    let f = x.filter((v, i) => x.indexOf(v) === i)
    if (f.length != x.length) return false;
    let pass1 = f.some(v => v === 0);
    let pass2 = x.some(v => v == x.length - 1);
    return (pass1 && pass2);
}

// 7 kyu : Complementary DNA
export function dnaStrand(dna: string) {
    let T = dna.replace(/A|T|G|C/gi, (v, i, a) => {
        switch (v) {
            case "A": return "T";
            case "T": return "A";
            case "C": return "G";
            case "G": return "C";
        }
    });
    return T;
}

// 7 kyu : Digital cypher
export function encode(str: String, n: number): number[] {
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
    })
    return r;
}
