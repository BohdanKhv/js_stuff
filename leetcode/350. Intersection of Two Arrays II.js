// Problem #: 350
// Title: Intersection of Two not sorted Arrays II
// Difficulty: Easy
var intersect = function(nums1, nums2) {
    var result = [];
    var map = {};

    // create a map of nums1
    for (var i = 0; i < nums1.length; i++) {
        // if the map already has the number, increment the count
        if (map[nums1[i]]) {
            // if the number is already in the map, increase the count
            map[nums1[i]]++;
        } else {
            // if the number is not in the map, add it to the map with a count of 1
            map[nums1[i]] = 1;
        }
    }

    // check if nums2 is in map
    for (var i = 0; i < nums2.length; i++) {
        // if nums2 is in map, add to result and delete from map
        if (map[nums2[i]]) {
            // add to result
            result.push(nums2[i]);
            // delete from map
            map[nums2[i]]--;
        }
    }
    return result;
}