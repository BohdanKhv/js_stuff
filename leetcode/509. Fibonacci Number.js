// Problem #: 509
// Problem Name: Fibonacci Number
// Difficulty: Easy
var fib = function(n) {
    // Base Case
    if(n <= 1) {
        return n;
    }

    const result = [0, 1];

    for (let i = 2; i <= n; i++) {
        result[i] = result[i - 2] + result[i - 1];
    }

    return result[result.length - 1];
};

// Recursive Solution
var fib = function(n) {
    if (n === 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
}