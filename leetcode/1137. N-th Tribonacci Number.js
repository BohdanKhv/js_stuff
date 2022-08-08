// Problem #: 1137
// Problem Name: N-th Tribonacci Number
// Difficulty: Easy
var tribonacci = function(n) {
    let t = [0,1,1, ...Array(35).keys()]
    for(let i = 3; i < n + 1; i++) {
        t[i] = t[i-1] + t[i-2] + t[i-3];
    }
    return t[n]
};