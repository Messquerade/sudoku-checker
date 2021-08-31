import Sudoku from '../src/sudoku.js';

describe ('Sudoku', () => {
  
  test ('should create an object with rows, columns and matrix properties', () => {
    let sudoku = new Sudoku();
    expect(sudoku.rows).toBeTruthy();
    expect(sudoku.columns).toBeTruthy();
    expect(sudoku.matrix).toBeTruthy();
  })
  
  
});
// expect(matrix[0].length).toEqual(9);