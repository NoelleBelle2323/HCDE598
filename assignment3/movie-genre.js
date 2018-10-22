// Initialize variables for text strings
var HeadingPg1 = "Movie Recommendation Engine!";
var GuidePg1 = "Press any key to continue";
var questionPg2 = "Which genre of movies would you like to watch?";
var HeadingPg2 = "1.Drama\n 2.Sci-Fi\n 3.Comedy";
var GuidePg2 = "Press 1, 2 OR 3";
var QuestionPg3 = "Select year-range for a movie name?";
var HeadingPg3 = "1. Before 1980 \n 2.1981 - 2000 \n 3.2000 - 2018";
var GuidePg3 = "Press 1, 2 OR 3";

var Advice1 = "One of the best drama movies before 1980 is:";
var Answer1 = "Gone with the Wind - Released in 1939";
var Advice2 = "One of the best drama movies between 1981-2000 is: ";
var Answer2 = "Schindler's List - Released in 1993";
var Advice3 = "One of the best drama movies between 2000-2018 is: ";
var Answer3 = "96 - Released in 2018";
var Advice4 = "One of the best Sci-Fi movies before 1980 is: ";
var Answer4 = "2001: A Space Odyssey - Released in 1968";
var Advice5 = "One of the best Sci-Fi movies between 1981-2000 is: ";
var Answer5 = "-E.T. the Extra-Terrestrial- Released in 1982  ";
var Advice6 = "One of the best Sci-Fi movies between 2000-2018 is: ";
var Answer6 = "Inception - Released in 2010 ";
var Advice7 = "One of the best comedy movies before 1980 is: ";
var Answer7 = "-Airplane! - Released in 1980 ";
var Advice8 = "One of the best comedy movies between 1981-2000 is: ";
var Answer8 = "Groundhog Day - Released in 1993";
var Advice9 = "One of the best comedy movies between 2000-2018 is: ";
var Answer9 = "Superbad - Released in 2007 ";


var movieGenre = "";
var yearRange = "";
var recommendedMovie = "";
var advice = "";

// Background Colors
var bgClr = '#5AB190';

// Font type
var font = 'Helvetica';

//Font color
var fonColor = '#3D5B2D';

// Page number
var pageNum = 1;


function setup() {
    createCanvas(650, 500);

    // Initialize variables for page title location
    HeadingX = width / 2;
    HeadingY = height / 4;
}

function draw() {
    // "Erase" screen after each frame
    background(bgClr);

    fill(fonColor);


    // Draw page
    drawPage(pageNum);
   //text('page'+pageNum, 50, 40);


}

//if key is pressed, got to the next assigned screen
function keyPressed() {
    if (pageNum <= 1) {
        pageNum = pageNum + 1;
        return false;
    }

}

//from movie type to year
function keyTyped() {
    if (pageNum == 2) { // Or"||" Operator, If 1,2,or 3 id pressed go to, Year
        if (key == '1' || key == '2' || key == '3') {
            movieGenre = key;
            pageNum = 3;
        }
        return false;
    }

    //from Year to movie
    if (pageNum == 3) {
        if (key == '1' || key == '2' || key == '3') { // If year 1 is presses go to Gone with the wild
            yearRange = key
            pageNum = 4;
        }
        return false;
    }


}

function drawPage(pageNum) {
    if (pageNum == 1) {
        // Question text?
        textFont(font);
        textSize(22);
        textAlign(CENTER);

        //"Content", Weidth, height
        text(HeadingPg1, HeadingX, HeadingY);

        // Guide text
        textSize(18);
        text(GuidePg1, HeadingX, HeadingY + 60);

    } else if (pageNum == 2) {
        // Select drama, sci-fi or Comedy
        textSize(22);
        textFont(font);
        text(HeadingPg2, HeadingX, HeadingY + 50);
        
        textSize(22);
        textFont(font);
        text(questionPg2, HeadingX, HeadingY );

        // Guide text
        textSize(18);
        text(GuidePg2, HeadingX, HeadingY + 160);

    } else if (pageNum == 3) {
        // Select year 1, 2 or 3
        textSize(22);
        textFont(font);
        text(HeadingPg3, HeadingX, HeadingY + 50);
        
        textSize(22);
        textFont(font);
        text( QuestionPg3, HeadingX, HeadingY);
        
       

        // Guide text
        textSize(18);
        text(GuidePg3, HeadingX, HeadingY + 160);

    } else if (pageNum == 4) {
        // Answer year
        textSize(22);
        textFont(font);
        text(advice, HeadingX, HeadingY);

        // Movie name
        textSize(18);
        text(recommendedMovie, HeadingX, HeadingY + 80);

    }
    selectMovie(movieGenre, yearRange);
}



function selectMovie(movieGenre, yearRange) {
    if (movieGenre == 1 && yearRange == 1) {
        recommendedMovie = Answer1;
        advice = Advice1
    }

    if (movieGenre == 1 && yearRange == 2) {
        recommendedMovie = Answer2;
        advice = Advice2
    }

    if (movieGenre == 1 && yearRange == 3) {
        recommendedMovie = Answer3;
        advice = Advice3
    }


    if (movieGenre == 2 && yearRange == 1) {
        recommendedMovie = Answer4;
        advice = Advice4
    }


    if (movieGenre == 2 && yearRange == 2) {
        recommendedMovie = Answer5;
        advice = Advice5
    }

    if (movieGenre == 2 && yearRange == 3) {
        recommendedMovie = Answer6;
        advice = Advice6
    }

    if (movieGenre == 3 && yearRange == 1) {
        recommendedMovie = Answer7;
        advice = Advice7
    }

    if (movieGenre == 3 && yearRange == 2) {
        recommendedMovie = Answer8;
        advice = Advice8
    }

    if (movieGenre == 3 && yearRange == 3) {
        recommendedMovie = Answer9;
        advice = Advice9
    }



}