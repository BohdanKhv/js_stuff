// Problem #: 17
// Title: Letter Combinations of a Phone Number
// Difficulty: Medium
var letterCombinations = function(digits) {
    if(digits.length === 0) return []

    // Global result
    const result = [];

    // Map of digits to letters
    const hashMap = {
        2: 'abc',
        3: 'def',
        4: 'ghi',
        5: 'jkl',
        6: 'mno',
        7: 'pqrs',
        8: 'tuv',
        9: 'wxyz'
    }

    // Recursive function to generate combinations
    const dfs = (i, digits, slate) => {
        // Base case
        if(i >= digits.length) {
            // Add slate to result as a string
            result.push([...slate].join(''));
            return;
        }


        // dfs recursive case
        // Get the letters for the current digit
        let chars = hashMap[digits[i]];

        // For each letter, add it to the slate and call dfs
        for(let char of chars) {
            // Add the letter to the slate
            slate.push(char);
            // Call dfs on the next digit
            dfs(i+1, digits, slate);
            // Remove the letter from the slate
            // This is for getting up the tree
            slate.pop();
        }
    }

    dfs(0, digits, []);

    return result;
};