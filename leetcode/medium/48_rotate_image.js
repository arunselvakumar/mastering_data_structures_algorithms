/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
const rotate = function(matrix) {
  const matrixLength = matrix.length;

  // Step 1: Transpose the Matrix
  for (let i = 0; i < matrixLength; i++) {
    for (let j = i; j < matrixLength; j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  // Step 2: Shift the Matrix using Two Pointers
  for (let i = 0; i < matrixLength; i++) {
    for (let j = 0; j < Math.floor(matrixLength / 2); j++) {
      const temp = matrix[i][j];
      matrix[i][j] = matrix[i][matrixLength - 1 - j];
      matrix[i][matrixLength - 1 - j] = temp;
    }
  }
};

const inputArray = [[1,2,3],[4,5,6],[7,8,9]];
rotate(inputArray);

console.log(inputArray);
