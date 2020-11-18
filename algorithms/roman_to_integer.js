/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const romanToIntDict = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }

  let i = s.length - 1;
  let currentNumber = 0;

  while (i > 0) {
    let multiplier = 1;

    if(s[i] === 'I') {
      let currentBucket = 1;
      let k = true;

      while (k) {
        if(s[i-1] === 'I') {
          currentBucket = currentBucket + 1;
          i--;
        } else {
          k = false;
        }
      }

      currentNumber = currentNumber + currentBucket;
    }

    if(s[i] === 'X') {

    }

    if(s[i] in romanToIntDict) {
      currentNumber = currentNumber + romanToIntDict[s[i]];
    }
    i--;
  }
};
