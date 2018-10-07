#!/bin/bash

echo "Enter an assignment name"

read assignment

for sketch in /$assignment/*.js; do
	#generate name for sketch without js
	name="$(basename "$sketch" .js)"

	#create html file

	#write to html file
	
done

cat > /$assignment/$name.html << _EOF_
	<!DOCTYPE HTML>
	<html>
		<head>
			<title>$name</title>
			<script src="http://cdnjs.cloudflare.com/ajax/libs/p5.js/0.5.6/p5.js"></script>
			<script src="/$name.js"></script>
		</head>

		<body>
		</body>
	</html>
_EOF_


# Code for cycling through sketches to remove .js and generate HTML files taken from 
# https://github.com/kolovsam/intro-to-programming-p5.js/blob/master/gallery-script