const Screen = require("./screen");
const Cursor = require("./cursor");

class Bejeweled {

  constructor() {

    this.playerTurn = "O";

    // Initialize this
    this.grid = this.generateRandomGrid(8, 8);

    this.cursor = new Cursor(8, 8);

    Screen.initialize(8, 8);
    Screen.setGridlines(false);

    this.cursor.setBackgroundColor();
    Screen.render();
  }


  generateRandomGrid(rows, cols) {
    const grid = [];
    const gemTypes = ['R', 'G', 'B', 'Y', 'M', 'C'];
    for (let row = 0; row < rows; row++) {
      grid[row] = [];
      for (let col = 0; col < cols; col++) {
        grid[row][col] = gemTypes[Math.floor(Math.random() * gemTypes.length)];
      }
    }
    return grid;
  }

  swap(row1, col1, row2, col2) {
    let tmp = this.grid[row1][col1];
    this.grid[row1][col1] = this.grid[row2][col2];
    this.grid[row2][col2] = tmp;
  }


  isValidSwap(row1, col1, row2, col2) {
    if (row1 === row2 && Math.abs(col1 - col2) !== 1) {
      return false;
    }
    else if (col1 === col2 && Math.abs(row1 - row2) !== 1) {
      return false;
    }
    else if (col1 !== col2 && row1 !== row2) {
      return false;
    }
    return true;
  }

  static checkForMatches(grid) {

    // Fill this in
    let hasMatch = false;

    // Check for horizontal matches
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[row].length - 2; col++) {
        const gem = grid[row][col];
        if (gem === grid[row][col + 1] && gem === grid[row][col + 2]) {
          hasMatch = true;
          // Mark matched gems for removal (logic can be implemented later)
        }
      }
    }

    // Check for vertical matches
    for (let row = 0; row < grid.length-2; row++) {
      for (let col = 0; col < grid.length; col++) {
        const gem = grid[row][col];
        if (gem === grid[row +1][col] && gem === grid[row+2][col]) {
          hasMatch = true;
        }
      }
    }

    return hasMatch;

  }

}

module.exports = Bejeweled;
