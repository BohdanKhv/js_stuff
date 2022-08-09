// Problem #: 852
// Title: Peak Index in a Mountain Array
// Difficulty: Medium
var peakIndexInMountainArray = function(arr) {
    let left = 0;
    let right = arr.length - 1;
    
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (arr[mid] < arr[mid + 1]) left = mid + 1;
        else right = mid - 1;
    }
    
    return left;
}