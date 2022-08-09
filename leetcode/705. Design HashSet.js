// Problem #: 705
// Title: Design HashSet
// Difficulty: Easy
var MyHashSet = function() {
    this.set = {};
};

MyHashSet.prototype.add = function(key) {
    this.set[key] = key;
};

MyHashSet.prototype.remove = function(key) {
    this.set[key] = undefined;
};

MyHashSet.prototype.contains = function(key) {
    return this.set[key] === undefined ? false : true;
};