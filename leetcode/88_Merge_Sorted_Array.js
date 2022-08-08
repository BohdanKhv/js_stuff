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

// Other solution
var merge = function(nums1, m, nums2, n) {
    let counter1 = 0;
    let counter2 = 0;
    let tem = nums1.slice(0, m);

    for (let i = 0; i < m + n; i++) {
        if (counter1 < m && counter2 < n) {
            if (tem[counter1] < nums2[counter2]) {
                nums1[i] = tem[counter1];
                counter1++;
            } else {
                nums1[i] = nums2[counter2];
                counter2++;
            }
        } else if (counter1 < m) {
            nums1[i] = tem[counter1];
            counter1++;
        } else {
            nums1[i] = nums2[counter2];
            counter2++;
        }
    }
}

// Faster Solution
const merge = (nums1, m, nums2, n) => {
    // Length of nums1
    let i = m - 1;
    // Length of nums2
    let j = n - 1;
    // Length of nums1 + nums2
    let k = m + n - 1;

    // While there are still elements in nums1 and nums2
    while (i >= 0 && j >= 0) {
        if (nums1[i] > nums2[j]) {
            // If the last element of nums1 is greater than the last element of nums2,
            // then we add the last element of nums1 to the end of nums1
            nums1[k--] = nums1[i--];
        } else {
            // If the last element of nums2 is greater than the last element of nums1,
            // then we add the last element of nums2 to the end of nums1
            nums1[k--] = nums2[j--];
        }
    }

    // If there are still elements in nums2, then we add them to the end of nums1
    while (j >= 0) {
        // Add the last element of nums2 to the end of nums1
        nums1[k--] = nums2[j--];
    }
}