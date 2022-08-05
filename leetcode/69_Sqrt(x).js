// Problem #: 69
// Title: Sqrt(x)
// Difficulty: Easy
const mySqrt = function(x) {
    if(x === 0) return 0;
    else if(x === 1) return 1;

    let left = 1;
    let right = x;

    while(left < right) {
        const mid = Math.floor((left + right) / 2);

        if(mid * mid === x) return mid;
        else if(mid * mid < x) left = mid + 1;
        else right = mid;
    }
    return left - 1;
}

// Faster solution:
const mySqrt2 = function(x) {
    return Math.floor(Math.sqrt(x))
};