/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
  let originalString = "1";

  for (let i = 0; i < n - 1; i++) {
    let tempString = '';
    let j = 0;

    while (j<originalString.length) {

      let count = 1;
      let index = j;

      while (index < originalString.length) {
        if(originalString[index] === originalString[index + 1] && (index + 1) < originalString.length) {
          count = count + 1;
          index = index + 1;
        } else {
          tempString = tempString + count + '' + originalString[index];
          index = index + 1;
          count = 1;
        }
      }

      j = index + 1;
    }

    originalString = tempString;
  }

  return originalString;
};

console.log(countAndSay(6));
