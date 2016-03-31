// Shakespeare's Plays
// In this project we will be practicing selecting DOM elements and manipulating them using JavaScript.

// Here are the steps you will need to follow:
// Download the starter code.
// Add a class of special to all of the <li> elements at the second level of the nested list.

var myLIs = document.querySelectorAll('ul#selected-plays > li > ul > li');

for (i = 0; i<myLIs.length; i++){
	myLIs[i].classList.add('special');
	};

// Add a class of year to all of the table cells in the third column of a table.
// Hint: Take a look at how many columns are in each table.
var ThirdCol = document.querySelectorAll('table > tbody > tr > td:nth-child(3)');

for (i = 0; i<ThirdCol.length; i++){
	ThirdCol[i].classList.add('year');
	};
// Make every other table row in both tables have a gray background.
var OddRow = document.querySelectorAll('table > tbody > tr:nth-child(odd)');

for (i = 0; i<OddRow.length; i++){
	OddRow[i].classList.add('odd');
	};

// Select an anchor tag that has a link to a pdf file. Change the color to blue and increase the font size.
var pdfLink = document.querySelectorAll('a[href$=".pdf"]');

for (i = 0; i<pdfLink.length; i++){
	pdfLink[i].classList.add('pdfLink');
	};

// Select an anchor tag that has an href attribute containing the substring "asyoulikeit" and change the font color to orange.
var likeyText = document.querySelectorAll('a[href*="asyoulikeit"]');

for (i = 0; i<likeyText.length; i++){
	likeyText[i].classList.add('likeyText');
	};