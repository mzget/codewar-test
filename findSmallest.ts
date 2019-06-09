function smallest(n: number): number[] {
    let original = n.toString().split('')

    original.reduce((a, b, i, arr) => {
        console.log(i)
        return b;
    })
    // your code
    // console.log(a)
    let minId = original.indexOf('0');
    // minId = (a[0] !== '0') ? original.indexOf(a[0]) : original.indexOf(a[1]);
    // console.log(minId, a[0])
    let sp = original.splice(minId, 1);
    original.unshift(sp[0]);
    return [Number(original.join('')), minId, 0]
}

// Give up.
console.log(smallest(209917))