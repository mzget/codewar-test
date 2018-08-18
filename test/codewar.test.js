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


test('removeChar', () => {
    expect(Codewar.removeChar("eloquent")).toBe("loquen");
    expect(Codewar.removeChar("country")).toBe("ountr");
});