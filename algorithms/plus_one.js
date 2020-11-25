/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  const numberFromDigits = +digits.join('');
  const resultNumber = numberFromDigits + 1;

  return resultNumber.toString().split('');
};

var plusOneV2 = function (digits) {
  let hasCarryOver = false;
  for (let i = digits.length - 1; i < 0; i++) {
    if(digits[i] === 9) {
      digits[i] = 0;
      hasCarryOver = true;
    }
  }
}

console.log(plusOne([0]));
