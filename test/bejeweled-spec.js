const { expect } = require('chai');
const { Cursor } = require('../class/cursor.js');

const Bejeweled = require("../class/bejeweled.js");

describe ('Bejeweled', function () {

  let board;

  beforeEach(function() {
    board = new Bejeweled();
  });
  // Add tests for setting up a basic board
  describe('constructor function', () => {
    it('should create a new 8 x 8 board', () => {
      expect(board.grid).to.have.length(8);
      expect(board.grid).to.have.length(8);
    });
  });

  // Add tests for a valid swap that matches 3
  describe('swap function', () => {
    it('should swap adjacent elements horizontally', () => {
      board.grid = [
        ['R', 'G', 'B', 'Y'],
        ['G', 'G', 'Y', 'G'],
        ['B', 'R', 'B', 'Y'],
        ['Y', 'G', 'Y', 'R'],
      ];
      board.swap(0, 0, 0, 1); // Swap 'R' with 'G'
      const expectedGrid = [
        ['G', 'R', 'B', 'Y'],
        ['G', 'G', 'Y', 'G'],
        ['B', 'R', 'B', 'Y'],
        ['Y', 'G', 'Y', 'R'],
      ];
      expect(board.grid).to.deep.equal(expectedGrid);
    });

    it('should swap elements vertically', () => {
      board.grid = [
        ['R', 'G', 'B', 'Y'],
        ['G', 'G', 'G', 'Y'],
        ['B', 'R', 'B', 'Y'],
        ['Y', 'G', 'Y', 'R'],
      ];
      board.swap(1, 1, 2, 1); // Swap middle 'G' with 'R' below
      const expectedGrid = [
        ['R', 'G', 'B', 'Y'],
        ['G', 'R', 'G', 'Y'],
        ['B', 'G', 'B', 'Y'],
        ['Y', 'G', 'Y', 'R'],
      ];


      expect(board.grid).to.deep.equal(expectedGrid);
    });
  });


  // Add tests to check if there are no possible valid moves
  describe('isValid function', () => {
    it('should return false if a swap is invalid', () => {
      board.grid = [
        ['R', 'G', 'B', 'Y'],
        ['G', 'R', 'B', 'Y'],
        ['B', 'G', 'R', 'Y'],
        ['Y', 'B', 'G', 'R'],
      ];
      expect(board.isValidSwap(0, 0, 0, 2)).to.equal(false);
      expect(board.isValidSwap(0, 0, 1, 2)).to.equal(false);
      expect(board.isValidSwap(1, 0, 0, 2)).to.equal(false);
    });
  });

  describe('checkForMatches function', () => {
    it('should return true if there is a horizontal three match', () => {
      board.grid = [
        ['G', 'R', 'B', 'Y'],
        ['G', 'G', 'G', 'R'],
        ['B', 'R', 'B', 'Y'],
        ['Y', 'G', 'Y', 'R'],
      ];

      let match = Bejeweled.checkForMatches(board.grid);
      expect(match).to.eq(true);
    });

    it('should return true if there is a vertical three match', () => {
      board.grid = [
        ['G', 'R', 'B', 'Y'],
        ['G', 'G', 'R', 'Y'],
        ['B', 'R', 'B', 'Y'],
        ['Y', 'G', 'Y', 'R'],
      ];

      let match = Bejeweled.checkForMatches(board.grid);
      expect(match).to.eq(true);
    });
  });

});
