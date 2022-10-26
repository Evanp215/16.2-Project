// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Substitution tests", () => {
    it("should have alphabet parameter as a string", () => {
        const input = "test"
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const encode = true;

        expect(alphabet).to.be.a('string');
    });
    it("should have alphabet be exactly 26 characters long", () => {
        const input = "test";
        const alphabet = "abcdefghijklmnopqrstuvwxyz";
        const encode = true;
        
        expect(alphabet).to.have.lengthOf(26);
    });
    it("should have all characters in the alphabet be unique", () => {
        const input = "test";
        const alphabet = "aacdefghijklmnopqrstuvwxyz";
        const encode = true;
        
        const actual = substitution(input, alphabet, encode);

        expect(actual).to.be.false;
    });
})