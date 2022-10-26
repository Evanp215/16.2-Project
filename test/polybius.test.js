// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius tests", () => {
    it("should be a string", () => {
        const input = "test";
        const encode = true;

        const actual = polybius(input, encode);
        expect(actual).to.be.a('string')
    });

    it("should return false if the number of characters in string is odd", () => {
        const input = "12345";
        const encode = false;

        const actual = polybius(input, encode);
        expect(actual).to.be.false
    });

    it("should maintain spaces throughout", () => {
        const input = "test me";
        const encode = true;

        const actual = polybius(input, encode);
        const expected = "44513444 2351";
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
        const input = "TeSt";
        const encode = true;

        const actual = polybius(input, encode);
        const expected = "44513444";
        expect(actual).to.eql(expected);
    });

    it("should handle I and J appropriately when encoding", () => {
        const input = "fuji";
        const encode = true;

        const actual = polybius(input, encode);
        const expected = "12544242";
        expect(actual).to.eql(expected);
    });

    it("should handle I and J appropriately when decoding", () => {
        const input = "12544242";
        const encode = false;

        const actual = polybius(input, encode);
        const expected = "fu(i/j)(i/j)";
        expect(actual).to.eql(expected);
    });
})