/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = JSON.parse(JSON.stringify(matrix));
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      let mines = 0;
      [-1, 0, 1].forEach((y) => {
        [-1, 0, 1].forEach((x) => {
          if (x === 0 && y === 0) {
            return;
          }
          if (
            i + x >= 0 && i + x <= matrix.length - 1
              && j + y >= 0 && j + y <= matrix[i].length - 1
          ) {
            if (matrix[i + x][j + y]) {
              mines++;
            }
          }
        });
      });
      result[i][j] = mines;
    }
  }

  return result;
}

module.exports = minesweeper;
