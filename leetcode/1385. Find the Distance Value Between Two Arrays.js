// Problem #: 1385
// Title: Find the Distance Value Between Two Arrays
// Difficulty: Easy
var findTheDistanceValue = function(arr1, arr2, d) {
    let count = 0;
    
    for(let i = 0; i < arr1.length; i++) {
        let tempCount = 0;

        for(let j = 0; j < arr2.length; j++) {
            let sum = Math.abs(arr1[i] - arr2[j])     
            
            if(sum <= d) tempCount++;
        }
        
        if(tempCount === 0) count++;
        
        tempCount = 0;
    }
    
    return count;
};