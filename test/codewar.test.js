/**
 * @jest-environment node
 */


const Codewar = require("../codewar");

// var s1 = ["hoqq", "bbllkw", "oox", "ejjuyyy", "plmiis", "xxxzgpsssa", "xxwwkktt", "znnnnfqknaz", "qqquuhii", "dvvvwz"];
// var s2 = ["cccooommaaqqoxii", "gggqaffhhh", "tttoowwwmmww"];
// test('mxdiflg', () => {
//     expect(Codewar.mxdiflg(s1, s2)).toBe(13);
// });

// test('nbMonths', () => {
//     //2000, 8000, 1000, 1.5, [6, 766]
//     // 12000, 8000, 1000, 1.5,[0, 4000]
//     expect(Codewar.nbMonths(2000, 8000, 1000, 1.5)).toEqual([6, 766]);
//     expect(Codewar.nbMonths(12000, 8000, 1000, 1.5)).toEqual([0, 4000]);
// });

// test('minValue', () => {
//     expect(Codewar.minValue([1, 3, 1])).toEqual(13);
//     expect(Codewar.minValue([4, 7, 5, 7])).toEqual(457);
// });

// test('centuryFromYear', () => {
//     expect(Codewar.centuryFromYear(1601)).toBe(17);
//     expect(Codewar.centuryFromYear(1705)).toBe(18);
// });


// test('removeChar', () => {
//     expect(Codewar.removeChar("eloquent")).toBe("loquen");
//     expect(Codewar.removeChar("country")).toBe("ountr");
// });

// test('Your order, please', () => {
//     expect(Codewar.order("")).toBe("");
//     expect(Codewar.order("is2 Thi1s T4est 3a")).toBe("Thi1s is2 3a T4est");
//     expect(Codewar.order("4of Fo1r pe6ople g3ood th5e the2")).toBe("Fo1r the2 g3ood 4of th5e pe6ople");
// });

// test('Length of missing array', () => {
//     expect(Codewar.getLengthOfMissingArray([])).toBe(0);
//     expect(Codewar.getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])).toBe(3);
//     expect(Codewar.getLengthOfMissingArray([[5, 2, 9], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]])).toBe(2);
//     expect(Codewar.getLengthOfMissingArray([[null], [null, null, null]])).toBe(2);
//     expect(Codewar.getLengthOfMissingArray([['a', 'a', 'a'], ['a', 'a'], ['a', 'a', 'a', 'a'], ['a'], ['a', 'a', 'a', 'a', 'a', 'a']])).toBe(5);
//     expect(Codewar.getLengthOfMissingArray(
//         [[2],
//         [],
//         [3, 2, 2, 2, 4],
//         [2, 1],
//         [1, 0, 2]])).toBe(0);
// });


test('A Rule of Divisibility by 13', () => {
    expect(Codewar.thirt(8529)).toBe(79);
    expect(Codewar.thirt(85299258)).toBe(31);
});