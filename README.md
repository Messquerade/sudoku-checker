behaviors:
 
 1. has to check that all the rows contain numbers 1-9 with no repeats
 2. has to check that all the columns conatin numbers 1-9 with no repeats
 3. each cell has to accept a number as a value


 Board: could be an object with properties that are rows and columns objects
 Rows: would conatin 3 row objects
 Columns: would contain 3 column objects
 Each row has 9 space objects
 Each column has 9 space objects

 id = (1,2)

Board: could be an object with properties space objects



the board of cell is created by 2d array arr[][]

arr1 = [1,2,3]
arr2 = [a,b,c]

arr1[arr2] = 

1a 1b 1c
2a 2b 2c
3a 3b 3c

arr1 = columns
arr2 = rows

arr1[0][0] 
OR
the board of cell is created by nested for loop [i][j] 

let row = [];
for(let i=0; i<9; i++) {
    row[i] = new Array(9);
}

var matrix = [];
for(var i=0; i<9; i++) {
    matrix[i] = [];
    for(var j=0; j<9; j++) {
        matrix[i][j] = number;
    }
}