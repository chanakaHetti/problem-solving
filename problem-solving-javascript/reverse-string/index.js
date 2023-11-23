/* 
 --- Directions
 Given a string, return a new string with the reversed
 order of characters

 --- Examples
 reverse('apple') === 'leppa'
 reverse('hello') === 'olleh'
 reverse('Greetings!') === '!sgniteerG'
*/

// Solution one
// function reverse(str) {
//     return [...str].reverse().join('');
// }

// Solution two
// function reverse(str) {
//     let reversed = '';
//     for (const char of str) {
//         reversed = char + reversed;
//     }
//     return reversed;
// }

// Soltion three
function reverse(str) {
    return str
        .split('')
        .reduce((reversed, character) => character + reversed, '');
}

module.exports = reverse;
