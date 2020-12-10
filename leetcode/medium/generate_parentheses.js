/**
 * @param {string[]} outputArray
 * @param {string} currentString
 * @param {number} open
 * @param {number} close
 * @param {number} n
 */
const backTrack = (outputArray, currentString, open, close, n) => {
  if(currentString.length === n * 2) {
    outputArray.push(currentString);
    return;
  }

  if(open < n) {
    backTrack(outputArray, currentString + '(', open + 1, close, n);
  }

  if(close < open) {
    backTrack(outputArray, currentString + ')', open, close + 1, n);
  }
}

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  let outputArray = [];

  backTrack(outputArray, '', 0, 0, n);

  return outputArray;
};


console.log(generateParenthesis(4));
