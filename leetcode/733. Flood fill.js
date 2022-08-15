// Problem #: 733
// Title: Flood Fill
// Difficulty: Medium
var floodFill = function(image, sr, sc, color) {
    let oldColor = image[sr][sc];
    // if the old color is the new color, return the image
    if (oldColor === color) return image;

    // Otherwise, change the color of the current pixel and recurse on the neighbors
    let queue = [[sr, sc]];
    while (queue.length) {
        let [r, c] = queue.shift();

        // if the current pixel is the old color, change it to the new color and add its neighbors to the queue
        if (image[r][c] === oldColor) {
            image[r][c] = color;
            if (r - 1 >= 0) queue.push([r - 1, c]);
            if (r + 1 < image.length) queue.push([r + 1, c]);
            if (c - 1 >= 0) queue.push([r, c - 1]);
            if (c + 1 < image[0].length) queue.push([r, c + 1]);
        }
    }
    return image;
}

// Recursive solution
var floodFill = function(image, sr, sc, newColor) {
    const currentColor = image[sr][sc];

    if(newColor === currentColor) return image;

    const dfs = (img, row, col) => {
        if(row >= img.length || row < 0 || col >= img[0].length || col < 0 || img[row][col] !== currentColor) return;

        img[row][col] = newColor;

        dfs(img, row - 1, col); // top
        dfs(img, row + 1, col); // bottom
        dfs(img, row, col - 1); // left
        dfs(img, row, col + 1); // right
    
        return img;
    }

    return dfs(image, sr, sc);
}