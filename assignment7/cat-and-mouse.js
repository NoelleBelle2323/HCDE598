/*File: sketch.js (sketch name: cat and mouse game)
 *Author: Mitchell Fajardo
 *Date: Nov 12, 2018
 *Class: HCDE 598C - Intro to Programming
 *Email: mrf707@uw.edu
 *Assignment: Final Project
 *
 *Description:
 *The player (as a "mouse," controlled by the literal mouse)
 *tried to collect cheese on the canvas (via clicking it)
 *while avoiding the cat(s) bouncing around the canvas.
 *As players collect cheese, more cats will eventually appear,
 *making the game increasingly difficult.
 */

/*set constants for canvas size.
 *using 400 x 400 while programming, but 700x700 seems to be
 *good for the actual game (to be opened in its own window)
 */
const canvasWidth = 700;
const canvasHeight = 700;

//set constants for sizes of objects & cat max speed
const mouseSize = 30;
const mouseTailLength = 10;
const cheeseSize = 30;
const catSize = 50;
const catMaxSpeed = 8;

/*instantiate/declare:
 *   1) a Mouse object for the player "mouse"
 *   2) a Cheese object for the target "cheese"
 *   3) a Score object to track score & lives
 *	    & display these things
 *   4) an array to hold accumulating Cat objects
 */
var mouse = new Mouse(mouseSize, mouseTailLength);
var cheese = new Cheese(cheeseSize);
var score = new Score();
var cats = [];

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  frameRate(60);
  
  cheese.randomXY(); //set random initial cheese position
  
  cats[0] = new Cat(catSize, catMaxSpeed); //add first cat
  cats[0].randomXY(); //set its position
  cats[0].randomMoveXY(); //set its speed
}

function draw() {
  
  //if the player has lives remaining, game plays as normal
  if (score.lives > 0) {
  	background(220);

    cheese.draw() //draw the cheese
    mouse.draw(); //draw the mouse

    score.display(); //display the current score

    //for each Cat in the cats array
    for (i = 0; i < cats.length; i++) {

      cats[i].draw(); //draw the cat
      cats[i].updateXY(); //move its x/y values
      cats[i].checkBounce(); //check if it collides with a wall
                             //if it does, "bounce off"
      cats[i].checkCollision(); //check if collision w/ mouse

      //if colliding with the mouse
      if (cats[i].collision == true) {
        
        print('COLLISION - mouse eaten'); //for debugging
        //if the collision happens while the mouse is alive
        if (mouse.alive == true) {
          score.lives--; //decrease the lives by one
        }
        mouse.alive = false; //change the mouse to not alive
      }  
    }

    //if the mouse has died...
    if (mouse.alive == false) {
      
      score.respawnTimer--; //countdown (180 frames, ~ 3 sec)
      
      //once the respawnTimer falls to 0...
      if (score.respawnTimer <= 0) {
        mouse.alive = true; //revive the mouse
        score.respawnTimer = 180; //reset timer (for next time)
      }
    }

    //console printing for debugging
    print("respawnTimer: " + score.respawnTimer +
          "  alive: " + mouse.alive +
          "  collision: " + cats[0].collision
         );
  }
  
  //else (i.e. if the player is out of lives)
  else {
    
    //display a game over and score message in (approx.) center 
    
    background(0); //black background
    fill('white'); //white text
    
    //set text size; calc center
    msgSize = 46;
    textSize(msgSize);
    var horiCenter = canvasWidth / 2; //horizontal center
    var vertCenter = canvasHeight / 2; //vertical center
    
    //display game over in center screen (w/ offsets)
    var horiAdjustment1 = -1 * (msgSize * 3);
    var vertAdjustment1 = -1 * (msgSize / 2);
    text ("GAME OVER",
          horiCenter + horiAdjustment1,
          vertCenter + vertAdjustment1);
    
    //in a smaller font size, display score (w/ offsets)
    textSize(msgSize / 2);
    var horiAdjustment2 = horiAdjustment1 / 2;
    var vertAdjustment2 = vertAdjustment1 + (msgSize * 0.75);
    text("Your score: " + score.cheeseCount,
          horiCenter + horiAdjustment2,
          vertCenter + vertAdjustment2);
  }

} //end draw()



/****************************
**OBJECTS & FUNCTIONS BELOW**
****************************/

/*Mouse constructor to be used for the player's "mouse"
 *takes mouseSize (as diameter of circle) and
 *tailLength (as number of previous frames/positions)
 *and has properties/methods to draw the tail/body
 */
function Mouse(mouseSize, tailLength) {
  
  //properties to indicate if the mouse is alive
  this.alive = true;
  
  //For the mouse's body...
      
    //mouse's size (as diameter of circle)
    this.size = mouseSize;
  
    /*drawBody() method below
     *draws the body as a gray ellipse at the mouse position
     */
    this.drawBody = function() {
      if (mouse.alive == true) { //if the mouse is alive
        fill(150); //color it gray
      } else { //else (i.e. if it is dead/respawning)
        noFill(); //make it empty
      }
      ellipse(mouseX, mouseY, this.size, this.size);
    };
  
  //For the mouse's tail...
  
    //arrays to hold previous x/y coord's
    this.tailX = [];
    this.tailY = [];

  	/*drawTail() method below fills the arrays above
     *with the mouse's previous x/y positions
     *and draws small pink circles at these positions
     *to represent the mouse's tail
     */
    this.drawTail = function() {
      
      //for all tail x/y values besides the final one
      for (i = 0; i < tailLength; i++) {
          //move each value "backwards" in the array
          this.tailX[i] = this.tailX[i + 1];
          this.tailY[i] = this.tailY[i + 1];
      }

      //for the final tail value,
      //replace the x/y values with current x/y
      this.tailX[tailLength] = mouseX;
      this.tailY[tailLength] = mouseY;

      //for all tail x/y positions (except the last one,
      //which is identical to the mouse's current position)
      for (i = 0; i < tailLength; i++) {
        //draw pink circles to represent the tail 
        fill('pink');
        ellipse(this.tailX[i], this.tailY[i], 10, 10);
      }
    };
    
  //Combining the body and tail into one method...
  this.draw = function() {
      this.drawTail();
      this.drawBody();
  };
    	
} //end Mouse object constructor

/*Cheese object constructor
 *takes cheeseSize (as side lengths of square) and
 *and has properties/methods to draw a block of cheese
 */
function Cheese(cheeseSize) {
  
  //declare properties to hold the x/y position
  //(setting to 0 initially but it will be randomly set)
  this.x = 0;
  this.y = 0;
  
  //use the size parameter as the value for a size property
  this.size = cheeseSize;
  
  //randomXY() method below updates the x/y positions to
  //a random coordinate on the canvas when called
  this.randomXY = function() {
    this.x = round(random(0 + cheese.size,
                 canvasWidth - cheese.size));
    this.y = round(random(0 + cheese.size,
                   canvasHeight - cheese.size));
  }
    
  //draw() method draws the cheese as a yellow square
  this.draw = function() {
    fill('yellow');
    rect(this.x, this.y, this.size, this.size);
  };
}

/*Cat object constructor
 *to be used to instantiate accumulating cats
 */
function Cat(catSize, maximumSpeed) {
  
  //properties to hold the cat's size and max movement speed
  this.size = catSize; //size (as diameter of circle)
  this.maxSpeed = maximumSpeed; //max possible movement speed
  
  //For the cat's position...
  
    //properties to hold x/y values for the cat's position
    this.x = 0;
    this.y = 0;
  
    //method to randomly set them (to be used on spawn)
    this.randomXY = function() {
      this.x = round(random(0 + cheese.size,
                   canvasWidth - cheese.size));
      this.y = round(random(0 + cheese.size,
                     canvasHeight - cheese.size));
    }
  
  //For the cat's movement & bouncing...
    
    //properties to hold x/y movement values
    this.moveX = 0;
    this.moveY = 0;
  
    //again, method to randomly set them (to be used on spawn)
    this.randomMoveXY = function() {
      
      this.moveX = round(random(-1 * this.maxSpeed,
                   this.maxSpeed));
      this.moveY = round(random(-1 * this.maxSpeed,
                   this.maxSpeed));
      
      //if 0,0 is rolled (i.e. if the cat would be static)...
      if ((this.moveX == 0) && (this.moveY == 0)) {
        //call this function to re-roll for different values
        this.randomMoveXY();
      }
    }
    
    /*updateXY() method below updates the current x/y
     *based on the cat's x/y movement values
     */
    this.updateXY = function() {
      this.x = this.x + this.moveX;
      this.y = this.y + this.moveY;
    }
    
    /*checkBounce() method below checks if the cat would collide
     *with a wall. If it would collide, it inverses the
     *appropriate movement value
     */
    this.checkBounce = function() {
      //if the cat would collide with a left/right wall
      if ((this.x <= (this.size / 2)) ||
          (this.x >= (canvasWidth - (this.size / 2)))) {
              //flip the moveX value
              this.moveX = this.moveX * -1;
      }
      //if the cat would collide with a top/bottom wall
      if ((this.y <= (this.size / 2)) ||
          (this.y >= (canvasHeight - (this.size / 2)))) {
              //flip the moveX value
              this.moveY = this.moveY * -1;
      }
    }
    
  //For checking collision with the mouse...
    
    //a property to store a reference to whether or not a
    //collision is happening
    this.collision = false;
  
    /*checkCollision() method checks if the cat is colliding
     *with the mouse, based on the distance between their
     *centers
     */
    this.checkCollision = function() {

      //calculations based on Pythagorean theorem
      var a = this.x - mouseX;
      var b = this.y - mouseY;
      var aSquared = sq(a);
      var bSquared = sq(b);

      //a collision will occur if the centers are within the
      //combined lengths of their radii
      var radius1 = this.size / 2;
      var radius2 = mouseSize / 2;
      var maxC = radius1 + radius2;
      var maxCSquared = sq(maxC);

      //Thus, if touching (and the mouse is alive)
      if ((aSquared + bSquared <= maxCSquared) &&
          (mouse.alive == true)) {
        this.collision = true; //a collision has happened
      }
      else {
        this.collision = false; //necessary to reset collision
      }
		}
  
  //For drawing the cat...
    //draw() method below draws a (minimalist) cat
    this.draw = function() {
      
      //cat's ears
      fill(color(200, 100, 50)); //brownish color
      triangle(this.x + (this.size * 3 / 8), //right ear
               this.y - (this.size * 1 / 8),
               this.x + (this.size * 1 / 8),
               this.y - (this.size * 3 / 8),
               this.x + (this.size * 3 / 4),
               this.y - (this.size * 3 / 4));
      triangle(this.x - (this.size * 3 / 8), //left ear
               this.y - (this.size * 1 / 8),
               this.x - (this.size * 1 / 8),
               this.y - (this.size * 3 / 8),
               this.x - (this.size * 3 / 4),
               this.y - (this.size * 3 / 4));
      
      //cat's face
      fill('orange');
      ellipse(this.x, this.y, this.size, this.size);
      
      //whiskers
      noFill();
      arc(this.x - (this.size * 1.2 / 2), //top left
          this.y,
          this.size *  1 / 2,
          this.size * 1 / 10,
          PI, 0);
      arc(this.x - (this.size * 1.2 / 2), //bottom left
          this.y + (this.size * 15 / 100),
          this.size * 4 / 10,
          this.size * 8 / 100,
          PI, 0);
      arc(this.x + (this.size * 1.2 / 2), //top right
          this.y,
          this.size * 1 / 2,
          this.size * 1 / 10,
          PI, 0);
      arc(this.x + (this.size * 1.2 / 2), //bottom right
          this.y + (this.size * 15 / 100),
          this.size * 4 / 10,
          this.size * 8 / 100,
          PI, 0);
    }
} //end Cat constructor

/*constructor for a Score object to keep track of
 *total cheese collected
 *mouse lives remaining
 */
function Score() {
  this.cheeseCount = 0; //to count cheese collected
  this.lives = 5; //to keep track of lives remaining
  this.display = function() {
    
    //display the score (amount of cheese collected)
    textSize(32);
    fill('white');
    var message1 = "Score: " + this.cheeseCount;
    text(message1, 10, 40);
    
    //display the number of lives below the score
    textSize(16);
    var message2 = "Lives: " + this.lives;
    text(message2, 15, 60);
  }
  
  /*if the mouse is respawning, the property below will serve
   *as a countdown variable*/
  this.respawnTimer = 180; //180 frames (~3sec if 60fps)
}

//when the (literal) mouse is clicked...
function mouseClicked() {
  //if the mouse's is alive and within the square of cheese
  if ((mouse.alive == true) &&
    	(mouseX >= cheese.x) &&
      (mouseX <= cheese.x + cheese.size) &&
      (mouseY >= cheese.y) &&
      (mouseY <= cheese.y + cheese.size)) {
    			score.cheeseCount++; //increase score
    			cheese.randomXY(); //move cheese to random spot
    			//line below is to help confirm & debug
    			print("CHEESE!!! (" + score.cheeseCount +")");
    			
    			//after every 3 cheeses collected
    			if (score.cheeseCount % 5 == 0) {
    				//instantiate a new Cat object in the array
    				cats[cats.length] = new Cat(catSize, catMaxSpeed);
    				cats[cats.length - 1].randomXY();
    				cats[cats.length - 1].randomMoveXY();
  				}
  }
  else {
    //line below is to help confirm & debug
    print('not cheese');
  } 
}