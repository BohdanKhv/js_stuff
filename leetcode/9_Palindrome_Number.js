const isPalindrome = function(x) {
    let counter = 0;
    const str = x.toString();
    
    for(let i = str.length -1; i > 0; i--) {
        if(str.charAt(i) !== str.charAt(counter)){
            return false
        } else {
            counter++;
        }
    }
    
    return true
};