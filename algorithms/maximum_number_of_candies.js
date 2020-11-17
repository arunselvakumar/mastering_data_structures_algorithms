/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let array = [];
  let maximumCandy = 0;

  for (let index = 0; index < candies.length; index++) {
    const element = candies[index];
    if (element > maximumCandy) {
      maximumCandy = element;
    }
  }

  for (let index = 0; index < candies.length; index++) {
    const element = candies[index]; 
    array.push(element + extraCandies >= maximumCandy)
  }

  return array;
};