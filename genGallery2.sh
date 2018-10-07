# sketchesArray = all sketches in dir assignmentX/sketches
#shopt -s nullglob
#sketches=( `ls "$dir" `)
#printf '%s\n' "${sketches[@]}"
# Ask for assignment folder name (eg. 'a4-scaled-drawing')
#echo "Input the assignment folder name (eg. 'a4-scaled-drawing')"
#read assignment
#echo "*** Processing $assignment ***"
# for each sketch in the dir 
assignment="assignment1"
for sketch in 'ls $assignment/*.js'; 
do
 # remove the assignment/sketches and .js
 name="$(basename "$sketch" .js)"
 echo "Processing $name"

 # Create a html page sketch.html
 cat > $assignment/$name.html <<- EOF
        <html>
            <head>
                <title>$name</title>
                <script src="../p5-libraries/p5.js"></script>
                <script src="$name.js"></script>
            </head>
            <body>
                <h1>$name</h1>
            </body>
        </html>
    EOF
done

# Code for cycling through sketches to remove .js and generate HTML files taken from 
# https://github.com/kolovsam/intro-to-programming-p5.js/blob/master/gallery-script