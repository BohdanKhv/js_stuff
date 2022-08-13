// Problem #: 383
// Title: Ransom Note
// Difficulty: Easy
var canConstruct = function(ransomNote, magazine) {
    let hashMap = {}

    for(let i = 0; i < magazine.length; i++) {
        if(hashMap[magazine[i]] === undefined)
            hashMap[magazine[i]] = 1;
        else
            hashMap[magazine[i]]++;
    }

    for(let i = 0; i < ransomNote.length; i++) {
        if(hashMap[ransomNote[i]] && hashMap[ransomNote[i]] > 0)
            hashMap[ransomNote[i]]--
        else
            return false
    }

    return true;
};