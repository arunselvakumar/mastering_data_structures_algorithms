/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  let len = s.length;
  let arr = [...s].reverse().map(letter => letter.charCodeAt() - 64);
  let res = 0;

  for (let i = 0; i < len; i++) {
    res += Math.pow(26, i) * arr[i];
  }

  return res;
};

console.log(titleToNumber('A'));
