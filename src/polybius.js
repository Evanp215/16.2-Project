// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  encoder = {
  "a" : 11,
  "b" : 21,
  "c" : 31,
  "d" : 41,
  "e" : 51,
  "f" : 12,
  "g" : 22,
  "h" : 32,
  "i" : 42,
  "j" : 42,
  "(i/j)" : 42,
  "k" : 52,
  "l" : 13,
  "m" : 23,
  "n" : 33,
  "o" : 43,
  "p" : 53,
  "q" : 14,
  "r" : 24,
  "s" : 34,
  "t" : 44,
  "u" : 54,
  "v" : 15,
  "w" : 25,
  "x" : 35,
  "y" : 45,
  "z" : 55,}

  decoder = {
    11 : "a",
    21 : "b",
    31 : "c",
    41 : "d",
    51 : "e",
    12 : "f",
    22 : "g",
    32 : "h",
    42 : "(i/j)",
    52 : "k",
    13 : "l",
    23 : "m",
    33 : "n",
    43 : "o",
    53 : "p",
    14 : "q",
    24 : "r",
    34 : "s",
    44 : "t",
    54 : "u",
    15 : "v",
    25 : "w",
    35 : "x",
    45 : "y",
    55 : "z",

  }

  function polybius(input, encode = true) {
    console.log(input.split(''))
    // declare lowerCase
    let lowerCase = input.toLowerCase();
    // declare noSpaces as lowercase without spaces
    let noSpaces = lowerCase.split(" ").join("");
    console.log(noSpaces)
    // check if encode is false
    if (encode === false) {
      // if so, check if number of input characters is odd
      if (noSpaces.split("").length % 2 == 1) {
        return false
      }
    }
    
    // check if encode is true
    if (encode === true) {
      //declare split input
      let splitInput = lowerCase.split("");
      // declare converted
      let converted = []
      // loop through split input
      for (let i = 0; i < splitInput.length; i++) {
        // check if character in loop is a space
        if (splitInput[i] === " ") {
          // if so, corresponding index in converted is space
          converted[i] = " ";
        }
        else {
          // if not, convert character into matching number on polybius square
          converted[i] = encoder[splitInput[i]];
        }
      }
      // map the converted numbers into strings
      let convertedString = converted.map(num => {
        return String(num);
      });
      // join the resulting converted strings
      let result = convertedString.join('');
      return result;
    }
    if (encode === false) {
      let brokenUp = noSpaces.match(/.{1,2}/g);
      console.log(brokenUp)
      let converted = []
      for (let i = 0; i < brokenUp.length; i++) {
        converted[i] = decoder[brokenUp[i]]
      }
      let spaceIndex;
      let split = input.split('');
      for (let i = 0; i < split.length; i++) {
        if (split[i] === ' ') {
          spaceIndex = i / 2;
          converted.splice(spaceIndex, 0, ' ');
        }
      }
      console.log(spaceIndex)
      console.log(converted)

      let result = converted.join('')
      console.log(result)
      return result
    }
  }
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
