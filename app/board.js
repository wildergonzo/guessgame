var Board = function () {
    var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];
    var rows = 0, cols = 0;    
    var matrix = [];
    var clonedMatrix = [];
    
    var create2DArray = function (r, c) {
        var x = [];
        for (var i = 0; i < r; i++) {
            x[i] = new Array(c);
        }
        return x;
    };
    
    var createClonedMatrix = function (rows, cols) {
        clonedMatrix = create2DArray(rows, cols);
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                clonedMatrix[i][j] = 'x';
            }
        }
    };
    
    var fillMatrix = function (matrix, size) {
        var x = 0, y = 0, pair = 0;
        for (var i=0; i<size ; i++) {
            pair = 0;
            while (pair<2){    
                x = 0;
                y = Math.floor((Math.random() * (size*2)) + 1);
                while (y > matrix[0].length) {
                    y -= matrix[0].length;
                    x += 1;
                }
                if (typeof matrix[x][y-1] === "undefined") {
                    matrix[x][y-1] = letters[i];
                    pair +=1;
                }
            }
        }
        return matrix;
    };
 
    this.createBoard = function (size) {
        switch (size){
            case 1:
              rows=1;
              cols=0;
              break;
            case 2:
              rows=2;
              cols=2;
              break;
            case 3:
              rows=2;
              cols=3;
              break;
            case 4:
              rows=2;
              cols=4;
              break;
            case 5:
              rows=2;
              cols=5;
              break;
            case 6:
              rows=3;
              cols=4;
              break;
            case 7:
              rows=2;
              cols=7;
              break;
            case 8:
              rows=4;
              cols=4;
              break;
            case 9:
              rows=3;
              cols=6;
              break;
            case 10:
              rows=4;
              cols=5;
              break;
        }
        matrix = fillMatrix(create2DArray(rows, cols), size);
        createClonedMatrix(rows, cols);
    }; 
    
    this.setClonedMatrix = function (m1x, m1y, m2x, m2y, val) {
        clonedMatrix[m1x][m1y] = val;
        clonedMatrix[m2x][m2y] = val;
    };
    
    this.getValue = function (posX, posY) {
        return matrix[posX][posY];
    };
    
    this.getMatrix = function () {
        return matrix;
    };
    
    this.getClonedMatrix = function () {
        return clonedMatrix;
    };
    
    this.clonedMatrixIsFull = function () {
        for (var i = 0; i < rows; i++) {
            for (var j = 0; j < cols; j++) {
                if (clonedMatrix[i][j] === 'x'){
                    return false;
                }                
            }
        }
        return true;
    };
};
module.exports = Board;