const caesar = require("../src/caesar");
const { expect } = require("chai");

describe("caesar()", () => {
  it("should return false if shift is equal to 0", () => {
    const actual = caesar("hello", 0, true);
    expect(actual).to.be.false;
  });

  it("should return false if shift is less than -25", () => {
    const actual = caesar("hello", -50, true);
    expect(actual).to.be.false;
  });

  it("should return false if shift is greater than 25", () => {
    const actual = caesar("hello", 50, true);
    expect(actual).to.be.false;
  });

  it("should return false if shift does not exist", () => {
    const actual = caesar("hello", undefined, true);
    expect(actual).to.be.false;
  });

  it("should treat capital letters as lowercase, and return only lowercase", () => {
    const expected = "khoor zruog";
    const actual = caesar("HELLO WORLD", 3, true);
    expect(actual).to.equal(expected);
  });

  it("should wrap around to the front or back of the alphabet", () => {
    const expected = "c";
    const actual = caesar("z", 3, true);
    expect(actual).to.equal(expected);
  });

  it("should ignore non-alphabetic characters", () => {
    const expected = "!@#     $%^&*()<>  ,.{}[];:'/?|=+-_~";
    const actual = caesar("!@#     $%^&*()<>  ,.{}[];:'/?|=+-_~", 7, true);
    expect(actual).to.equal(expected);
  });

  it("should return false if there is no input", () => {
    const actual = caesar(undefined, 5, true);
    expect(actual).to.be.false;
  });

  it("should decode input if encode is false", () => {
    const expected = "hello world";
    const actual = caesar("ifmmp xpsme", -25, false);
    expect(actual).to.equal(expected);
  });
});
