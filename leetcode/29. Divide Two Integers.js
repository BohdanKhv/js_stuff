// Problem #: 29
// Problem Name: Divide Two Integers
// Type: Easy
const divide = (dividend, divisor) => {
    // This is dumb    
    if (dividend === -2147483648 && divisor === -1) return 2147483647;
    
    const result = dividend/divisor
    return result >= 0 ? Math.floor(result) : Math.ceil(result)
}