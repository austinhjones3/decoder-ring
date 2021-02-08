// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // make sure arguments are good. return false if not
    if (!input) return false;
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    // if encode is false, turn shift to it's negative value to decode
    if (!encode) shift = -shift;
    // move all input chars to lowercase as per req specs
    input = input.toLowerCase();

    // character accumulator
    let result = "";
    for (let i = 0; i < input.length; i++) {
      // get ascii value of current char
      const current = input.charCodeAt(i);
      // only shift chars that are letters
      if (current >= 97 && current <= 122) {
        // newChar is an ascii code shifted
        let newChar = ((current - 97 + shift) % 26) + 97;
        // lock newChar's value between 97 and 122
        if (newChar < 97) newChar += 26;
        if (newChar > 122) newChar -= 26;
        // push the character for the ascii code to the result string
        result += String.fromCharCode(newChar);
      } else {
        result += String.fromCharCode(current);
      }
    }
    return result;
  }
  // console.log(caesar("Hello World", -25, true)); //> khoor zruog
  // console.log(caesar("ifmmp xpsme", -25, false));

  return {
    caesar,
  };
})();

module.exports = caesarModule.caesar;
