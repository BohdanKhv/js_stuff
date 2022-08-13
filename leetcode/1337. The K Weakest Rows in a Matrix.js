// Problem #: 1337
// Title: The K Weakest Rows in a Matrix
// Difficulty: Easy
var kWeakestRows = function(mat, k) {
    const arr = [];

    for (let i = 0; i < mat.length; i++) {
        let sum = 0;
        for (let j = 0; j < mat[i].length; j++) {
            sum += mat[i][j];
        }
        arr.push([i, sum]);
    }

    arr.sort((a, b) => a[1] - b[1]);
    return arr.map(x => x[0]).slice(0, k);
}