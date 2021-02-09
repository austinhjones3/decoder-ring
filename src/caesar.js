// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  /**
   * @function caesar()
   * @param {String} input
   * @param {Number} shift
   * @param {Boolean} encode
   * @returns {}
   */
  function caesar(input, shift, encode = true) {
    // make sure arguments are good. return false if not
    if (!input || shift === 0 || shift < -25 || shift > 25 || !shift) {
      return false;
    }
    // if encode is false, turn shift to it's negative value to decode
    if (!encode) shift = -shift;
    // move all input chars to lowercase to decode or encode correctly
    input = input.toLowerCase();

    let output = "";
    for (let i = 0; i < input.length; i++) {
      // get ascii value of current char to be shifted
      const current = input.charCodeAt(i);
      // only shift chars that are letters
      if (current >= 97 && current <= 122) {
        // newChar is an ascii code shifted
        let newChar = ((current - 97 + shift) % 26) + 97;
        // lock newChar's value between 97 and 122 to wreap around the alphabet
        if (newChar < 97) newChar += 26;
        if (newChar > 122) newChar -= 26;
        // push the character for the ascii code to the output string
        output += String.fromCharCode(newChar);
      } else {
        // if it is not a letter, don't decode it and simply pass into output
        output += String.fromCharCode(current);
      }
    }
    return output;
  }

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
