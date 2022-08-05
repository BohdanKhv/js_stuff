// Problem #: 88
// Problem Name: Merge Sorted Array
// Difficulty: Easy
const merge2 = function(nums1, m, nums2, n) {
    const notZero = nums1.slice(0, m);
    const temp = [...notZero, ...nums2].sort((a,b) => a-b);
    
    for(let i = 0; i < m + n; i++) {
        nums1[i] = temp[i]
    }
};

// Faster Solution
const merge = (nums1, m, nums2, n) => {
    let i = m - 1;
    let j = n - 1;
    let k = m + n - 1;
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
        nums1[k--] = nums1[i--];
        } else {
        nums1[k--] = nums2[j--];
        }
    }
    while (j >= 0) {
        nums1[k--] = nums2[j--];
    }
}