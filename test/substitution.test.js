const { expect } = require("chai");
const substitution = require("../src/substitution");

describe("substitution()", () => {
  it("should return false if the alphabet isn't exactly 26 characters long", () => {
    const actual = substitution("hello", "abcdefg");
    expect(actual).to.be.false;
  });

  //   it("should s");
});
