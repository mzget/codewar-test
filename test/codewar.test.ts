/**
 * @jest-environment node
 */


import * as Codewar from "../codewar";

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


// test('A Rule of Divisibility by 13', () => {
//     expect(Codewar.thirt(8529)).toBe(79);
//     expect(Codewar.thirt(85299258)).toBe(31);
// });

// test('Possiblities Array', () => {
//     expect(Codewar.isAllPossibilities([0, 1, 2, 3])).toBe(true);
//     expect(Codewar.isAllPossibilities([1, 2, 3, 4])).toBe(false);
//     expect(Codewar.isAllPossibilities([0, 0, 2, 3])).toBe(false);
// });

// test('Complementary DNA', () => {
//     // expect(Codewar.dnaStrand("AAAA")).toBe("TTTT");
//     expect(Codewar.dnaStrand("ATTGC")).toBe("TAACG");
//     expect(Codewar.dnaStrand("GTAT")).toBe("CATA");
// });


// test('Digital cypher', () => {
//     expect(Codewar.encode("scout", 1939)).toEqual([20, 12, 18, 30, 21]);
//     expect(Codewar.encode("masterpiece", 1939)).toEqual([14, 10, 22, 29, 6, 27, 19, 18, 6, 12, 8]);
// });

// test('Growth of a Population', () => {
//     expect(Codewar.nbYear(1500, 5, 100, 5000)).toBe(15);
//     expect(Codewar.nbYear(1500000, 2.5, 10000, 2000000)).toBe(10);
//     expect(Codewar.nbYear(1500000, 0.25, 1000, 2000000)).toBe(94);
//     expect(Codewar.nbYear(1500000, 0.25, -1000, 2000000)).toBe(151);
// });



// test('Averages of numbers', () => {
//     expect(Codewar.averages([2, 2, 2, 2, 2])).toEqual([2, 2, 2, 2]);
//     expect(Codewar.averages([2, -2, 2, -2, 2])).toEqual([0, 0, 0, 0]);
//     expect(Codewar.averages([1, 3, 5, 1, -10])).toEqual([2, 4, 3, -4.5]);
// });

// test('Averages of numbers', () => {
//     expect(Codewar.findSmallestInt([78, 56, 232, 12, 8])).toBe(8);
// });

// test('Averages of numbers', () => {
//     expect(Codewar.findSmallestInt([78, 56, 232, 12, 8])).toBe(8);
// });


// assert.equal(solution.fakeBin('45385593107843568'), '01011110001100111');
// assert.equal(solution.fakeBin('509321967506747'), '101000111101101');
// assert.equal(solution.fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
// test('Fake Binary', () => {
//     expect(Codewar.fakeBin("45385593107843568")).toBe("01011110001100111");
// });

// test('Vowel Count', () => {
//     expect(Codewar.getCount("Abracadabra")).toBe(5);
// });

// test('Steps in Primes', () => {
//     expect(Codewar.step(2, 100, 110)).toEqual([101, 103]);
//     expect(Codewar.step(4, 100, 110)).toEqual([103, 107]);
//     expect(Codewar.step(6, 100, 110)).toEqual([101, 107]);
//     expect(Codewar.step(8, 300, 400)).toEqual([359, 367]);
//     expect(Codewar.step(10, 300, 400)).toEqual([307, 317]);
// });

test('A Chain adding function', () => {
    //assert(add(1)(2) == 3);
    expect(Codewar.add(1)(2)).toBe(3);
    expect(Codewar.add(1)(2)(3)(4)(5)).toBe(15);
});