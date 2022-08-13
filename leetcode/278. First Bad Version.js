// Problem #: 278
// Title: First Bad Version
// Difficulty: Easy
var solution = function(isBadVersion) {
    return function(n) {
        let left = 0;
        let right = n;
        while (left < right) {
            let mid = Math.floor((left + right) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
}

// Other solution:
var solution = function(isBadVersion) {
    return function(n) {
        let left = 0;
        let right = n;
        
        while(left < right) {
            let mid = Math.floor((left + right) / 2);
            
            if(isBadVersion(mid) === false && isBadVersion(mid + 1) === true) return mid + 1;
            else if ( isBadVersion(mid) === true ) right = mid;
            else left = mid + 1;
        }
        
        return left
    };
};