// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    const charCounter = {};
    let max = 0;
    let maxChar = '';

    for (let char of str) {
        charCounter[char] = charCounter[char] + 1 || 1;
    }

    for (let char in charCounter) {
        if (charCounter[char] > max) {
            max = charCounter[char];
            maxChar = char;
        }
    }

    return maxChar;
}

module.exports = maxChar;
