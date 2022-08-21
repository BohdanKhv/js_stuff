// Problem #: 209
// Title: Minimum Size Subarray Sum
// Difficulty: Medium
var minSubArrayLen = function(s, nums) {
    let start = 0;
    let end = 0;
    let sum = 0;
    let minLen = Infinity;

    while(end < nums.length) {
        sum += nums[end];
        end++;

        while(sum >= target) {
            minLen = Math.min(minLen, end - start);
            sum -= nums[start];
            start++;
        }
    }

    return minLen === Infinity ? 0 : minLen;
}