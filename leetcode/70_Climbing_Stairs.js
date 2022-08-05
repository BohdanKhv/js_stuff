// Problem #: 70
// Title: Climbing Stairs
// Difficulty: Easy
const climbStairs = function(n) {
    if(n === 1) return 1;
    else if(n === 2) return 2;
    
    let first = 1;
    let second = 2;
    let third = 0;
    
    for(let i = 3; i <= n; i++) {
        third = first + second;
        first = second;
        second = third;
    }
    return third;
}