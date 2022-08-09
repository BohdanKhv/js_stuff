// Problem #: 1281
// Title: Subtract the Product and Sum of Digits of an Integer
// Difficulty: Easy
var subtractProductAndSum = function(n) {
    let str = n.toString();
    let p = +str[0];
    let s = +str[0];
    
    for(let i = 1; i < str.length; i++) {
        p = p * +str[i];
        s = s + +str[i];
    }

    return p - s;
};

// One line solution
var subtractProductAndSum = function(n) {
    return `${n}`.split('').reduce((a,b) => +a * +b) - `${n}`.split('').reduce((a,b) => +a + +b, 0)
};

// Faster solution
var subtractProductAndSum = function(n) {
    return n.toString().split('').reduce((a,b) => +a * +b) - n.toString().split('').reduce((a,b) => +a + +b, 0)
}