// Problem #: 374
// Title: Guess Number Higher or Lower
// Difficulty: Easy
var guessNumber = function(n) {
    if(n === 1) return 1
    
    let left = 0;
    let right = n;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        
        let result = guess(mid);
        if(result === 0) return mid;
        if(result === -1) right = mid - 1;
        if(result === 1) left = mid + 1;
    }
};
