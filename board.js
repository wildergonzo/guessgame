var Board = function () {
    var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
    var rows = 0, cols = 0;
    
    var createMatrix = function (rows,cols) {
        var x = [];
        for (var i = 0; i < rows; i++) {
            x[i] = new Array(cols);
        }
        return x;
    };
    
    var printMatrix = function (matrix) {
        for (var i = 0; i < matrix.length; i++) {
            console.log(matrix[i]);
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
    
    this.generateBoard = function (size) {        
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
        printMatrix(fillMatrix(matrix, size));
    };
};
module.exports = Board;