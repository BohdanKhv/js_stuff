// Problem #: 1779
// Title: Find Nearest Point That Has the Same X or Y Coordinate
// Difficulty: Easy
var nearestValidPoint = function(x, y, points) {
    let index = -1;
    let min = Infinity;
    
    for(let i = 0; i < points.length; i++) {
        // Check if the point has the same x or y coordinate as the input point
        if(x === points[i][0] || y === points[i][1]) {
            // Calculate the distance between the input point and the current point
            const dist = Math.abs(x - points[i][0]) + Math.abs(y - points[i][1]);

            // Check if the distance is less than the current minimum distance
            if(dist < min) {
                index = i;
                min = dist;
            }
        }
    }

    return index;
};