/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let input = Math.abs(x);
  let output = 0;

  while (input > 0) {
    const reminder = input % 10;
    output = (output * 10) + reminder;
    input = Math.floor(input / 10);
  }

  if(output > (Math.pow(2, 31) - 1)) {
    return 0;
  }

  return x < 0 ? 0 - output : output;
};

console.log(reverse(1534236469));
