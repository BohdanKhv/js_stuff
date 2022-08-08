// Problem #: 1491
// Title: Average Salary Excluding the Minimum and Maximum Salary
// Difficulty: Easy
var average = function(salary) {
    let min = salary[0];
    let max = 0;
    let total = 0;
    
    for(let i = 0; i < salary.length; i++) {
        if(max < salary[i]) {
            max = salary[i];
        }
        if(min > salary[i]) {
            min = salary[i];
        }

        total += salary[i];
    }
    
    return ( total - min - max ) / ( salary.length - 2 );
};

// One Line Solution
var average = function(salary) {
    return ( salary.reduce((a,b) => a + b, 0) - Math.max(...salary) - Math.min(...salary) ) / ( salary.length - 2 );
};