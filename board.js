var Board = function () {    
    var createMatrix = function (rows,cols) {
        var x = [];
        for (var i = 0; i < rows; i++) {
            x[i] = new Array(cols);
        }
        return x;
    }
    var printMatrix = function (matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i]);
        }
    }

    this.generateBoard = function (size) {
        var rows = 0, cols = 0;
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
        var matrix = createMatrix(rows, cols);
        for(var i=0; i<rows; i++){
            for (var j=0; j<cols; j++){
              matrix[i][j] = 'X';
            }
        }
        printMatrix(matrix);
    };
};
module.exports = Board;