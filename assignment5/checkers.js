//Name: Checkers
//Author: Connor O'Toole
//Date: 11/3/2018
//Class: HCDE 598
//Email: otool047@uw.edu
//Description:
//This programs uses two nested loops to create
//the starting positions for a checkers game.


////////////////////
//GLOBAL VARIABLES//
////////////////////

//Canvas constants
const canvasWidth = 500;
const canvasHeight = 500;

//Board constants
const boardSize = 50;

//Piece constants
const pieceRadius = 25;
const pieceStrokeColor = 'white';

//Piece starting positions
const blackStart = 200;
const whiteStart = 300;


function setup() {
  createCanvas(canvasWidth, canvasHeight);

  //////////////
  //GAME BOARD//
  //////////////

  //This first loop deals with the 'x' coordinates of the squares.
  for (i = 0; i <= width; i = i + boardSize) {

    //This nested loop handles the 'y' coordinates of the squares.
    for (j = 0; j <= height; j = j + boardSize) {

      //Will draw red squares when x and y are even.
      if (isOdd(i) == false && isOdd(j) == false) {
        drawBoard(i, j, boardSize, 'red');
      }

      //Will draw black squares when x is odd and y is even.
      else if (isOdd(i) == true && isOdd(j) == false) {
        drawBoard(i, j, boardSize, 'black');
      }

      //Will draw red squares when x and y are odd.
      else if (isOdd(i) == true && isOdd(j) == true) {
        drawBoard(i, j, boardSize, 'red');
      }

      //Will draw black squares when x is even and y is odd.
      else if (isOdd(i) == false && isOdd(j) == true) {
        drawBoard(i, j, boardSize, 'black');
      }
    }
  }


  ///////////////
  //GAME PIECES//
  ///////////////

  //This first loop deals with the 'x' coordinates of the pieces.
  for (i = 0; i <= width; i = i + boardSize) {

    //This nested loop handles the 'y' coordinates of the pieces.
    for (j = 0; j <= height; j = j + boardSize) {


      //Will draw pieces when x is odd and y is even.
      if (isOdd(i) == true && isOdd(j) == false && (j <= blackStart || j >= whiteStart)) {
        drawPiece(i + pieceRadius, j + pieceRadius, pieceRadius, pieceStrokeColor);
      }

      //Will draw pieces when x is even and y is odd.
      else if (isOdd(i) == false && isOdd(j) == true && (j <= blackStart || j >= whiteStart)) {
        drawPiece(i + pieceRadius, j + pieceRadius, pieceRadius, pieceStrokeColor);
      }

    }
  }
}


/////////////
//FUNCTIONS//
/////////////

//This function creates a square with parameters
//'x' and 'y' for the coordinates, 's' for the
//square's size, and 'col' for the square's color.

function drawBoard(x, y, s, col) {
  fill(col);
  rect(x, y, s, s);
}


//This function creates the game pieces using
//with parameters 'x' and 'y' for coordinates, 
//'rad' for radius, 'col' for color, and 'sCol'
//for stroke color.

function drawPiece(x, y, rad, sCol) {
  strokeWeight(2);
  stroke(sCol);
  
  //This statement is needed to separate the pieces
  //by color based on their starting position.
  if (y <= blackStart) {
    fill('black');
    ellipse(x, y, rad);
  } else if (y >= whiteStart) {
   fill('brown');
    ellipse(x, y, rad);
  }
}


//This function evaluates whether the parameter 'n'
//is odd or not based on the starting coordinates of 
//the squares that comprise the game board.

function isOdd(n) {
  var remain = n / boardSize % 2
  if (remain == 0) {
    return false
  } else if (remain == 1) {
    return true
  }
}