// Problem #: 1796
// Title: Second Largest Digit in a String
// Difficulty: Easy
var secondHighest = function(n) {
    return s.split('').filter((n, i, arr) => Number.isInteger(+n) && arr.indexOf(n) === i).sort((a,b) => b-a)[1] ?? -1
};

var secondHighest=s=>s.split('').filter((n,i,arr)=>Number.isInteger(+n)&&arr.indexOf(n)===i).sort((a,b)=>b-a)[1]??-1;