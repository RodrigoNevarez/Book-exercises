exports.chessboard = function () {
  board = "";
  size = 10;
  row = 0;

  for (let col = 1; col < size*size; ++col){
    row % 2 == 0 ? 
      col % 2 == 0 ? board += '#' : board += ' '
    : 
      col % 2 == 0 ? board += ' ' : board += '#'
    
    if (col % size == 0){
      board += '\n';
      ++row;
    }
  }
  console.log(board)
}