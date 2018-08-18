// We test coders. Give us a try?


function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    if (S == undefined) return 0;

    let results = [];
    let arr = [];
    let splits = S.split('.');

    splits.length > 1 && splits.map(s => {
        let q = s.split('?');
        arr = arr.concat(q);
    });

    arr.length > 1 && arr.map(s => {
        let q = s.split('!');
        q.map(i => {
            results.push(i);
        })
    });

    let counter = 0;
    results.map(r => {
        let res = r.split(' ');
        let filters = res.filter(str => str.length != 0)
        console.log(filters);
        if (filters.length > counter) {
            counter = filters.length;
        }
    })

    console.log("arr", counter);

    return counter;
}

let s = "We test coders. Give us a try?";
let s1 = "Forget  CVs..Save time . x x";
solution(s1)