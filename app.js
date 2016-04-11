var myArray = [36, 3, 90, 2, 15, 1, 6, 5];
function mySort(digits) {
    for (var i = 1; i < digits.length; ++i) {
        var temp = digits[i];
        var j = i - 1;
        for (; j >= 0 && digits[j] > temp; --j) {
            digits[j + 1] = digits[j];
        }
        digits[j + 1] = temp;
    }

};
mySort(myArray);
console.log(myArray);