// Problem #: 50
// Title: Pow(x, n)
// Difficulty: Medium
var myPow = function(x, n) {
    if (n === 0) return 1;
    if (n === 1) return x;
    if (n === -1) return 1 / x;
    
    // if n is even then x^n = x^(n/2) * x^(n/2)
    if (n % 2 === 0) return myPow(x * x, n / 2);

    // if n is odd then x^n = x^(n/2) * x^(n/2) * x
    // Recursive call
    return x * myPow(x * x, (n - 1) / 2);
}