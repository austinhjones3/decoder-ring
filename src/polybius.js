const polybiusModule = (function () {
  /**
   * @function polybius()
   * @param {String} input
   * @param {Boolean} encode
   * @returns {Boolean or String} false, an encoded message, or decoded message
   */
  function polybius(input, encode = true) {
    // ignore capital letters
    input = input.toLowerCase();
    // if encode is true, return encoded message, if not, return decoded message
    return encode ? _encode(input, _data()) : _decode(input, _data());
  }

  /**
   * @function _encode()
   * @param {String} input
   * @param {Object[]} data - each object contains the letter and
   * its encoded counterpart
   * @returns {String} - encoded message
   */
  const _encode = (input, data) => {
    let output = "";
    for (let selected of input) {
      // get the object containing the current letter to get the encoded value
      const numObj = data.find((element) => {
        return element.letter.includes(selected);
      });
      // if found, add the letter's encoded number to output. If not, add a space.
      numObj ? (output += numObj.number) : (output += " ");
    }
    return output;
  };

  /**
   * @function _decode()
   * @param {String} input
   * @param {Object[]} data - each object contains the letter and
   * its encoded counterpart
   * @returns {String} - decoded message
   */
  const _decode = (input, data) => {
    // get the input without spaces to make sure the number of digits is even
    const noSpaces = input.replace(" ", "");
    // checks if even
    if (noSpaces.length % 2 !== 0) return false;

    let output = "";
    // temp variable meant to store up to 2 digits and then reset once decoded
    let temp = "";
    for (let selected of input) {
      // pass spaces through without decoding
      if (selected === " ") output += selected;
      // add digit to temp if less than 2
      if (temp.length < 2 && selected !== " ") temp += selected;
      /* when temp.length is 2, decode the digits to their letter and reset temp
      to be empty so we can decode the next 2 digits */
      if (temp.length === 2) {
        const letterObj = data.find((element) => element.number === temp);
        output += letterObj.letter;
        temp = "";
      }
    }
    return output;
  };

  /**
   * @function _data()
   * @returns {Object[]} - defines the data needed to encode/decode
   */
  const _data = () => {
    return [
      { letter: "a", number: "11" },
      { letter: "b", number: "21" },
      { letter: "c", number: "31" },
      { letter: "d", number: "41" },
      { letter: "e", number: "51" },
      { letter: "f", number: "12" },
      { letter: "g", number: "22" },
      { letter: "h", number: "32" },
      { letter: "i/j", number: "42" },
      { letter: "k", number: "52" },
      { letter: "l", number: "13" },
      { letter: "m", number: "23" },
      { letter: "n", number: "33" },
      { letter: "o", number: "43" },
      { letter: "p", number: "53" },
      { letter: "q", number: "14" },
      { letter: "r", number: "24" },
      { letter: "s", number: "34" },
      { letter: "t", number: "44" },
      { letter: "u", number: "54" },
      { letter: "v", number: "15" },
      { letter: "w", number: "25" },
      { letter: "x", number: "35" },
      { letter: "y", number: "45" },
      { letter: "z", number: "55" },
    ];
  };

  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
