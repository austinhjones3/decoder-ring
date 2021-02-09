const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if the alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("hello", "abcdefg");
    expect(actual).to.be.false;
  });

  it("should correctly translate the given phrase", () => {
    const expected = "svool dliow";
    const actual = substitution("hello world", "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.equal(expected);
  });

  it("should return false if the given alphabet's characters are not unique", () => {
    const actual = substitution("hello world", "!!!!!!!!!!!!!!!!!!!!!!!!!!");
    expect(actual).to.be.false;
  });

  it("should maintain spaces in the message before and after output", () => {
    const expected = "1   ]";
    const actual = substitution("a   z", "1234567890!@#$%^&*()-=_+[]");
    expect(actual).to.equal(expected);
  });

  it("should ignore capital letters and print only lowercase", () => {
    const expected = "svool dliow";
    const actual = substitution("HELLO WORLD", "zyxwvutsrqponmlkjihgfedcba");
    expect(actual).to.equal(expected);
  });
});
