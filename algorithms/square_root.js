/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  if(x < 2) {
    return x;
  }

  let startingPointer = 1;
  let endingPointer = x;

  while (startingPointer < endingPointer) {
    let mid = startingPointer + Math.floor((endingPointer - startingPointer) / 2);

    if(mid * mid === x) {
      return mid;
    } else if( mid * mid > x) {
      endingPointer = mid;
    } else if(mid * mid < x) {
      startingPointer = mid + 1;
    }
  }

  return startingPointer - 1;
};


console.log(mySqrt(5));
