// Problem #: 22
// Problem name: Generate Parentheses
// Problem description:
var generateParenthesis = function(n) {
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

var generateParenthesisHelper = function(left, right, str, result) {
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


// Other solutions:
var generateParenthesis = function(n) {
    // Global result
    const result = [];

    // dfs recursive helper
    const dfs = (i, n, slate, oCount, cCount) => {
        // backtracking case
        if(oCount < cCount) return;
        if(oCount > n ) return;

        // Base case
        if(i === n*2) {
            result.push(slate.join(''));

            return
        }

        // add open paren
        slate.push('(');
        dfs(i + 1, n, slate, oCount + 1, cCount);
        slate.pop();
        
        // add close paren
        slate.push(')');
        dfs(i + 1, n, slate, oCount, cCount + 1);
        slate.pop();
    }
    
    dfs(0, n, [], 0, 0)
    return result;
};