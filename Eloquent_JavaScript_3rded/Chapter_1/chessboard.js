exports.chessboard = function () {
  board = "";
  size = 10;
  row = 0;

  for (let square = 1; square < size*size; ++square){
    row % 2 == 0 ? 
      square % 2 == 0 ? board += '#' : board += ' '
    : 
      square % 2 == 0 ? board += ' ' : board += '#'
    
    if (square % size == 0){
      board += '\n';
      ++row;
    }
  }
  console.log(board)
}
