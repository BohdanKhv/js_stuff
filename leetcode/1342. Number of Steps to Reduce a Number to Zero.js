// Problem #: 1342
// Title: Number of Steps to Reduce a Number to Zero
// Difficulty: Easy
var numberOfSteps = function(num) {
    let counter = 0;
    let n = num;

    while(n > 0) {
        if(n % 2 === 0)
            n = n / 2;
        else
            n--;

        counter++;
    }
    
    return counter;
};