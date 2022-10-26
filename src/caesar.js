// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // declare alphabet for index movement
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  //declare originalIndex
  let originalIndex = []

  function caesar(input, shift, encode = true) {
    // check if shift is 0, less than -25, or greater than 25
    if (shift === 0 || shift < -25 || shift > 25 || shift === undefined) {
      return false;
    }
    // convert string to array of characters
    let splitText = input.split("");
    // loop through each character in splitText array
    for (let i = 0; i < splitText.length; i++) {
      // check if character in loop is a space
      if (splitText[i] === " ") {
        originalIndex[i] = " ";
      }
      // check if character in loop is a period
      else if (splitText[i] === ".") {
        originalIndex[i] = ".";
      }
      else {
      // for each character, get the index of the character on the alphabet
      originalIndex[i] = alphabet.indexOf(splitText[i].toLowerCase());
      }
    }
    // declare New index
    let newIndex = []
    // if encode is true move each index UP(+) by the shift ammount
    if (encode === true) {
      // loop through original index array
      for (let i = 0; i < originalIndex.length; i++) {
        // check if character in loop is a space 
        if (originalIndex[i] === " ") {
          newIndex[i] = " ";
        }
        // check if character in loop is a period
        else if (originalIndex[i] === ".") {
          newIndex[i] = ".";
        }
        // if not space or period, increase index by shift ammount
        else {
          newIndex[i] = originalIndex[i] += shift;
        }
      }
    }
    // if encode is false move each index DOWN(-) by the shift ammount
    else if (encode === false) {
      for (let i = 0; i < originalIndex.length; i++) {
        // check if character in loop is a space
        if (originalIndex[i] === " ") {
          newIndex[i] = " ";
        }
        // check if character in loop is a period
        else if (originalIndex[i] === ".") {
          newIndex[i] = ".";
        }
        // if not space or period, decrease index by shift ammount
        else {
          newIndex[i] = originalIndex[i] -= shift;
        }
      }
    }
    // loop through new index array
    for (let i = 0; i < newIndex.length; i++) {
      // if new index is less than 0 (outside alphabet), increase by 26
      if (newIndex[i] < 0) {
        newIndex[i] += 26;
      }
      // if new index is more than 25 (outside alphabet), decrease by 26
      else if (newIndex[i] > 25) {
        newIndex[i] -= 26;
      }
    }
    //declare new array
    let newArray = [];
    // convert newIndex indexes to letters from alphabet
    for (let i = 0; i < newIndex.length; i++) {
      // check if character in loop is a space
      if (newIndex[i] === " ") {
        newArray[i] = " ";
      }
      // check if character in loop is a period
      else if (newIndex[i] === ".") {
        newArray[i] = ".";
      }
      // if not space or period, convert index into respective character in alphabet
      else {
        newArray[i] = alphabet[newIndex[i]];
      }
    }
    // declare final array
    let finalArray = [];
    // loop through original split text to compare length
    for (let i = 0; i < splitText.length; i++) {
      // check if character in loop is a space
      if (newArray[i] === " ") {
        finalArray[i] = " ";
      }
      // check if character in loop is a period
      else if (newArray[i] === ".") {
        finalArray[i] = ".";
      }
      // if not space or period, leave as character
      else {
        finalArray[i] = newArray[i];
      }
    }
    // join the final array of characters
    let result = finalArray.join('')
    // return joined result
    return result;
  };


  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
