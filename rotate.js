// #2  Rotate the characters in a string by a given input and have the overflow 
// appear at the beginning, e.g. “MyString” rotated by 2 is “ngMyStri”.

var str = "MyString";
let n = 2;

var rotateString = function(n, str){

    if(str.length == 0) return "";

    n = n % str.length;

    let sub = str.substring(str.length - n , str.length); // substring with n characters from given string

    return sub + str.substring(0, str.length - n);
}

// Time complexity: O(n);
// Space complexity: O(1);

rotateString(n, str);
