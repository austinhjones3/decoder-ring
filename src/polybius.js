// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  const square = [
    { letter: "A", number: "11" },
    { letter: "B", number: "21" },
    { letter: "C", number: "31" },
    { letter: "D", number: "41" },
    { letter: "E", number: "51" },
    { letter: "F", number: "12" },
    { letter: "G", number: "22" },
    { letter: "H", number: "32" },
    { letter: "I/J", number: "42" },
    { letter: "K", number: "52" },
    { letter: "L", number: "13" },
    { letter: "M", number: "23" },
    { letter: "N", number: "33" },
    { letter: "O", number: "43" },
    { letter: "P", number: "53" },
    { letter: "Q", number: "14" },
    { letter: "R", number: "24" },
    { letter: "S", number: "34" },
    { letter: "T", number: "44" },
    { letter: "U", number: "54" },
    { letter: "V", number: "15" },
    { letter: "W", number: "25" },
    { letter: "X", number: "35" },
    { letter: "Y", number: "45" },
    { letter: "Z", number: "55" },
  ];

  function polybius(input, encode = true) {
    input = input.toUpperCase();
    return encode ? _encode(input, square) : _decode(input, square);
  }

  const _encode = (input, squareObjs) => {
    let result = "";
    for (let selected of input) {
      const numObj = squareObjs.find((element) => {
        return element.letter.includes(selected);
      });
      numObj ? (result += numObj.number) : (result += " ");
    }
    return result;
  };

  // Oh hi = 4332 3242
  const _decode = (input, squareObjs) => {
    const noSpaces = input.replace(" ", "");
    if (!(noSpaces.length % 2 === 0)) return false;
    let result = "";
    let temp = "";
    for (let selected of input) {
      if (selected === " ") result += selected;
      if (temp.length <= 1 && selected !== " ") temp += selected;
      if (temp.length === 2) {
        const letterObj = squareObjs.find((element) => element.number == temp);
        result += letterObj.letter;
        temp = "";
      }
    }
    return result.toLowerCase();
  };

  console.log(_decode("4332 3242", square));
  // polybius("hello world", true);
  return {
    polybius,
  };
})();

module.exports = polybiusModule.polybius;
