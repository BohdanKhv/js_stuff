// Problem #: 118
// Title: Pascal's Triangle
// Difficulty: Easy
var generate = function(numRows) {
    let result = [];

    for(let i = 0; i < numRows; i++) {
        let row = [];
        for(let j = 0; j <= i; j++) {
            if(j === 0 || j === i) {
                // first and last element in each row is 1
                row.push(1);
            } else {
                // get the previous row
                row.push(result[i - 1][j - 1] + result[i - 1][j]);
            }
        }
        result.push(row);
    }
    return result;
}