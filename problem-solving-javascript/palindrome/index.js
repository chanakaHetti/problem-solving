// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    // SOlution one
    // const reverse = str.split('').reverse().join('');
    // return reverse === str;

    // Solution two
    // let reverse = '';
    // for (let char of str) {
    //     reverse = char + reverse;
    // }
    // return str === reverse;

    // Solution three
    // const reverse = str.split('').reduce((prev, current) => current + prev, '');
    // console.log(reverse);
    // return str === reverse;

    // Solution four - but this is not good idea, because it will compare unnessaraly whole array.
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1];
    });
}

module.exports = palindrome;
