// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  function polybius(input, encode = true) {
    input = input.toLowerCase();
    return encode ? _encode(input, _square()) : _decode(input, _square());
  }

  const _encode = (input, squareObjs) => {
    let output = "";
    for (let selected of input) {
      const numObj = squareObjs.find((element) => {
        return element.letter.includes(selected);
      });
      numObj ? (output += numObj.number) : (output += " ");
    }
    return output;
  };

  const _decode = (input, squareObjs) => {
    const noSpaces = input.replace(" ", "");
    if (!(noSpaces.length % 2 === 0)) return false;
    let output = "";
    let temp = "";
    for (let selected of input) {
      if (selected === " ") output += selected;
      if (temp.length <= 1 && selected !== " ") temp += selected;
      if (temp.length === 2) {
        const letterObj = squareObjs.find((element) => element.number === temp);
        output += letterObj.letter;
        temp = "";
      }
    }
    return output;
  };

  const _square = () => {
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
