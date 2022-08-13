// Problem #: 189
// Title: Rotate Array
// Difficulty: Medium
const rotate = function(nums, k) {
    if(k > nums.length) {
        for(let i = 0; i < k; i++) {
            nums.unshift(nums.pop());
        }
    } else {
        const right = nums.slice(nums.length - k, nums.length);
        nums.splice(nums.length - k, nums.length);
        nums.unshift(...right);
    }
};

// Faster solution
const rotate2 = function(nums, k) {
    k = k % nums.length;
    nums.unshift(...nums.splice(-k, nums.length));
}

// One line solution
const rotate3 = function(nums, k) {
    nums.unshift( ...nums.splice( -(k % nums.length), nums.length ) );
}

// Time Limit Exceeded
const rotate4 = function(nums, k) {
    for(let i = 0; i < k; i++) {
        nums.unshift(nums.pop());
    }
};