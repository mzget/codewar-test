export function rotateLikeAVortex(matrix: number[][]): number[][] {
    console.log(matrix)

    let copys: number[][] = []
    matrix.map(r => {
        copys.push([...r])
    })

    let arrs: number[][] = new Array();
    for (let index = 0; index < matrix.length; index++) {
        arrs.push(new Array())

    }

    arrs.map((arr, i) => {
        // move first row to first colume
        arrs[i][0] = copys[0][copys[0].length - (i + 1)]
    })
    console.log("first colume", arrs)


    let lastRow = arrs.length - 1
    let lastColunm = copys[0].length - 1;
    arrs.map((arr, i) => {
        // move first colume to last row
        arrs[lastRow][i] = copys[i][0];

        // move last row to last colume
        arrs[i][lastColunm] = copys[lastRow][lastRow - i];
    })

    // move last colume to first row
    copys[0].map((arr, i) => {
        let target = copys[i][lastColunm]
        arrs[0][i] = target;
    })
    console.log("last row", arrs)

    if (arrs.length > 1) {
        for (let index = 0; index < 2; index++) {
            if (index == 0) {
                arrs[1][1] = copys[1][2];
                arrs[1][2] = copys[2][2];
                arrs[2][1] = copys[1][1];
                arrs[2][2] = copys[2][1];
            }
            else if (index == 1) {
                let tmp1 = [...arrs[1]];
                let tmp2 = [...arrs[2]];

                arrs[1][1] = tmp1[2];
                arrs[1][2] = tmp2[2];
                arrs[2][1] = tmp1[1];
                arrs[2][2] = tmp2[1];
            }
        }
    }

    return arrs;
}

let test1 = [
    [5, 3, 6, 1],
    [5, 8, 7, 4],
    [1, 2, 4, 3],
    [3, 1, 2, 2]
];
let test2 = [[3]];
console.log(rotateLikeAVortex(test1));
var expected = [
    [1, 4, 3, 2],
    [6, 4, 2, 2],
    [3, 7, 8, 1],
    [5, 5, 1, 3]];