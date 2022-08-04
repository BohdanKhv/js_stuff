// Problem #13
// Roman to Integer
const romanToInt = (roman) => {
    const romanMap = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let sum = 0;
    let prev = 0;

    for (let i = roman.length - 1; i >= 0; i--) {
        const current = romanMap[roman[i]];
        sum += current < prev ? -current : current;
        prev = current;
    }

    return sum;
}