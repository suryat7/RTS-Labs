// #``1  Print the number of integers in an array that are above the given input and the number that are below, 
// e.g. for the array [1, 5, 2, 1, 10] with input 6, print “above: 1, below: 4”.
let arr = [1, 5, 2, 1, 10];
let n = 6;
var aboveBelow = function (n, arr){

    let ab = 0;
    let bel = 0;

    arr.forEach(ele => {
        if(ele > n) {
            ab++;
        }else {
            bel++;
        }
    });
console.log('above', ab, 'below', bel);
// space complexity : O(1); 
// Time Complexity: O(n);
}

aboveBelow(n, arr);
