const polybius = require("../src/polybius");
const { expect } = require("chai");

describe("polybius()", () => {
  it("should ignore capital letters and return only lower case", () => {
    const expected = "4332 3242";
    const actual = polybius("OH hI", true);
    expect(actual).to.equal(expected);
  });

  it("should translate both 'i' and 'j' to 42", () => {
    const expected = "4242";
    const actual = polybius("ij", true);
    expect(actual).to.equal(expected);
  });

  it("should translate 42 to 'i/j'", () => {
    const expected = "i/j";
    const actual = polybius("42", false);
    expect(actual).to.equal(expected);
  });

  it("should maintain spaces from the input in the output", () => {
    const expected = "   42   ";
    const actual = polybius("   j   ", true);
    expect(actual).to.equal(expected);
  });
});
