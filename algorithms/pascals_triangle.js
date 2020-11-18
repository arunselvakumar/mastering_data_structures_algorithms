/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
  if (!numRows) {
    return [];
  }

  const pascalsTriangle = [];
  const firstRow = [1];

  if (numRows >= 1) {
    pascalsTriangle.push(firstRow);
  }

  for (let i = 1; i <= numRows - 1; i++) {
    let newRow = [1];

    const previousRow = pascalsTriangle[i - 1];
    for (let j = 1; j <= i - 1; j++) {
      newRow = [...newRow, previousRow[j - 1] + previousRow[j]];
    }

    newRow = [...newRow, 1];

    pascalsTriangle.push(newRow);
  }

  return pascalsTriangle;
};

console.log(generate(5));
