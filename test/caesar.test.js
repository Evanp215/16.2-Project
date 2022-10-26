// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar tests", () => {
    it("should return false if the shift value is not present", () => {
        const input = "test";
        const shift = undefined;
        const encode = true;
        const actual = caesar(input, shift, encode);

        expect(actual).to.be.false;
    });

    it("should return false if the shift value is less than -25", () => {
        const input = "test";
        const shift = -26;
        const encode = true;
        const actual = caesar(input, shift, encode);

        expect(actual).to.be.false;
    });

    it("should return false if the shift value is 0", () => {
        const input = "test";
        const shift = 0;
        const encode = true;
        const actual = caesar(input, shift, encode);

        expect(actual).to.be.false;
    });

    it("should return false if the shift value is greater than 25", () => {
        const input = "test";
        const shift = 26;
        const encode = true;
        const actual = caesar(input, shift, encode);

        expect(actual).to.be.false;
    });

    it("should maintain spaces throughout", () => {
        const input = "test me";
        const shift = 2;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = "vguv og"

        expect(actual).to.eql(expected);
    });

    it("should adjust back around for letters exceeding the alphabet", () => {
        const input = "zebra";
        const shift = 3;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = "cheud"

        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
        const input = "TeSt";
        const shift = 2;
        const encode = true;
        const actual = caesar(input, shift, encode);
        const expected = "vguv"

        expect(actual).to.eql(expected);
    })
})