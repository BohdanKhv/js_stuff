// Problem #: 167
// Title: Two Sum II - Input array is sorted
// Difficulty: Medium
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        let left = 0;
        let right = numbers.length;
        
        while(left < right) {
            let mid = Math.floor(( left + right ) / 2);
            
            if(mid === i) {
                right = right;
                left = mid + 1;
            } else {
                if(numbers[mid] + numbers[i] === target) return [i + 1, mid + 1]

                if(numbers[mid] + numbers[i] > target) right = mid;
                if(numbers[mid] + numbers[i] < target) left = mid + 1;
            }
        }
    }
};

// Time Limit Exceeded
var twoSum = function(numbers, target) {
    for(let i = 0; i < numbers.length; i++) {
        for(let j = 0; j < numbers.length; j++) {
            if(i !== j && numbers[i] + numbers[j] === target) return [i+1, j+1]
        }
    }
};