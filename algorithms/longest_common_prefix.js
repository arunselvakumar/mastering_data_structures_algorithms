/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if(!strs || !strs.length) {
    return '';
  }

  strs.sort((a, b) => a.length - b.length);

  let outputString = '';

  let stringToCompare = strs[0].toString();

  for (let i = 0; i < stringToCompare.length; i++) {
    const charToCompare = stringToCompare[i];

    for (let j = 1; j < strs.length; j++) {
      if(strs[j].toString()[i] !== charToCompare) {
        return outputString;
      }
    }

    outputString = outputString + charToCompare;
  }

  return outputString;
};


console.log(longestCommonPrefix(["dog","racecar","car"]));
