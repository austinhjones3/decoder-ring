// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  function substitution(message, alphaInput, encode = true) {
    if (!alphaInput || alphaInput.length !== 26 || !_isUnique(alphaInput)) {
      return false;
    }
    alphaInput = alphaInput.toLowerCase();
    message = message.toLowerCase();
    const data = _data(alphaInput);
    return encode ? _encode(message, data) : _decode(message, data);
  }

  const _encode = (message, data) => {
    let output = "";
    for (let selected of message) {
      const newCharObj = data.find((element) => {
        return element.alphaChar.includes(selected);
      });
      newCharObj ? (output += newCharObj.newChar) : (output += selected);
    }
    return output;
  };

  const _decode = (message, data) => {
    let output = "";
    for (let selected of message) {
      const alphaObj = data.find((element) => {
        return element.newChar.includes(selected);
      });
      alphaObj ? (output += alphaObj.alphaChar) : (output += selected);
    }
    return output;
  };

  const _isUnique = (str) => {
    const len = str.length;
    for (let i = 0; i < len; i++) {
      const temp = str[i];
      for (let j = i + 1; j <= len - 1; j++) {
        if (temp == str[j]) {
          return false;
        }
      }
    }
    return true;
  };

  const _data = (alphaInput) => {
    const output = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < alphaInput.length; i++) {
      output.push({ newChar: alphaInput[i], alphaChar: alphabet.charAt(i) });
    }
    return output;
  };

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
