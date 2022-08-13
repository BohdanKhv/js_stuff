// Problem #: 22
// Problem name: Generate Parentheses
// Problem description:
const generateParenthesis = function(n) {
    let result = [];
    // base case
    if(n === 0) return result;
    // recursive case
    else {
        // generate all possible combinations of n pairs of parentheses
        generateParenthesisHelper(n, n, "", result);
        return result;
    }
}

const generateParenthesisHelper = function(left, right, str, result) {
    // base case
    if(left === 0 && right === 0) {
        result.push(str);
        return;
    }
    // recursive case
    else {
        if(left > 0) {
            generateParenthesisHelper(left - 1, right, str + "(", result);
        }
        if(right > 0 && right > left) {
            generateParenthesisHelper(left, right - 1, str + ")", result);
        }
    }
}