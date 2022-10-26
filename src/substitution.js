// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  ogAlphabet = "abcdefghijklmnopqrstuvwxyz"

  function substitution(input, alphabet, encode = true) {
    if (alphabet === undefined || alphabet.length !== 26) {
       return false;
    }
    for (let i = 0; i < alphabet.length; i++) {
      for (let j = i + 1; j < alphabet.length; j++) {
        if (alphabet[i] == alphabet[j]) {
          return false;
        }
      }
    }
    if (encode === true) {
      console.log(alphabet)
      let encodedArray = []
      let indexArray = []
      let splitInput = input.split('')
      console.log(splitInput)
      for (let i = 0; i < input.length; i++) {
        indexArray[i] = ogAlphabet.indexOf(splitInput[i])
      }
      for (let i = 0; i < indexArray.length; i++) {
        encodedArray[i] = alphabet[indexArray[i]];
      }
      for (let i = 0; i < encodedArray.length; i++) {
        if (encodedArray[i] === undefined) {
          encodedArray[i] = " ";
        }
      }
      console.log(indexArray)
      console.log(encodedArray)
      return encodedArray.join('')
    }
    if (encode === false) {
      console.log(alphabet)
      let encodedArray = []
      let indexArray = []
      let splitInput = input.split('')
      console.log(splitInput)
      for (let i = 0; i < input.length; i++) {
        indexArray[i] = alphabet.indexOf(splitInput[i])
      }
      for (let i = 0; i < indexArray.length; i++) {
        encodedArray[i] = ogAlphabet[indexArray[i]];
      }
      for (let i = 0; i < encodedArray.length; i++) {
        if (encodedArray[i] === undefined) {
          encodedArray[i] = " ";
        }
      }
      console.log(indexArray)
      console.log(encodedArray)
      return encodedArray.join('')
    }
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
