const substitutionModule = (function () {
  /**
   * @function substitution()
   * @param {String} message - to be decoded/encoded
   * @param {String} alphaInput - new alphabet used to encode or decode
   * @param {Boolean} encode - tells whether we will encode or decode
   * @returns {Boolean or String} - either returns false or the
   * encoded/decoded message
   */
  function substitution(message, alphaInput, encode = true) {
    // check arguments for req spec defined false returns
    if (!alphaInput || alphaInput.length !== 26 || !_isUnique(alphaInput)) {
      return false;
    }
    // move encrypting alpha and message to lowercase so we can encode/decode correctly
    alphaInput = alphaInput.toLowerCase();
    message = message.toLowerCase();
    // get data to encode/decode with
    const data = _data(alphaInput);
    return encode ? _encode(message, data) : _decode(message, data);
  }

  /**
   * @function _encode()
   * @param {String} message - to be encoded
   * @param {Object[]} data - to encode with
   * @returns {String} - encoded message
   */
  const _encode = (message, data) => {
    let output = "";
    for (let selected of message) {
      // get the obj that matches selected to push encoded part into output
      const newCharObj = data.find((element) => {
        return element.alphaChar.includes(selected);
      });
      // if it's found, add encoded char to output, else, add selected to output
      newCharObj ? (output += newCharObj.newChar) : (output += selected);
    }
    return output;
  };

  /**
   * @function _decode()
   * @param {String} message - to be decoded
   * @param {Object[]} data - to decode with
   * @returns {String} - decoded message
   */
  const _decode = (message, data) => {
    let output = "";
    for (let selected of message) {
      // get the obj that matches selected to push decoded part into output
      const alphaObj = data.find((element) => {
        return element.newChar.includes(selected);
      });
      // if it's found, add decoded char to output, else, add selected to output
      alphaObj ? (output += alphaObj.alphaChar) : (output += selected);
    }
    return output;
  };

  /**
   * @function _isUnique()
   * @param {String} str - string to check if unique
   * @returns {Boolean} - true if each character in the string is unique
   * false if not unique
   */
  const _isUnique = (str) => {
    const len = str.length;
    /* if the current char is identical to the next char, the string is not unique,
    it will return false */
    for (let i = 0; i < len; i++) {
      const temp = str[i];
      // j = the char after charAt(i)
      for (let j = i + 1; j <= len - 1; j++) {
        if (temp == str[j]) return false;
      }
    }
    return true;
  };

  /**
   * @function _data()
   * @param {String} alphaInput - the encoded alphabet
   * @returns {Object[]} - the data needed to encode/decode with. Includes
   * regular alphabet and encoded alphabet
   */
  const _data = (alphaInput) => {
    const output = [];
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // select each character in both alphabets with i
    for (let i = 0; i < alphaInput.length; i++) {
      // push both chars into the array as an object for accessibility convenience
      output.push({ newChar: alphaInput[i], alphaChar: alphabet.charAt(i) });
    }
    return output;
  };

  return {
    substitution,
  };
})();

module.exports = substitutionModule.substitution;
