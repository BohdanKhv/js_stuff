// Problem #: 1678
// Title: Goal Parser Interpretation
// Difficulty: Easy
var interpret = (command) => command.replaceAll('()', 'o').replaceAll('(al)', 'al')