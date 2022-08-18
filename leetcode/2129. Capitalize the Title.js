// Problem #: 2129
// Title: Capitalize the Words in a String
// Difficulty: Easy
var capitalizeTitle = (title) => title.split(' ').map(w => w.length > 2 ? w.slice(0, 1).toUpperCase() + w.slice(1, w.length).toLowerCase() : w.toLowerCase()).join(' ')