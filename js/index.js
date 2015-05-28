// Here's a list of all the food image paths
// There MUST be the same number of these as special spans
// 		in your HTML, and they MUST be in the same order.

var FOOD_IMAGES = 
[
	"images/food1.jpg",
	"images/food2.jpg",
	"images/food3.jpg",
	"images/food4.jpg",
	"images/food5.jpg",
	"images/food6.jpg",
	"images/food7.jpg",
	"images/food8.jpg"
];

// First, get the image element from the document.
// It's id is "interactiveImage"
// Hint: replace null with your code
var imageElement = null;

// Now, query for a *list* of *all* our special spans
// Their class is "showFood"
// Hint: replace null with your code
var showFoodSpanElements = null;

// Here is some "validation". Don't touch this.
// This will print red text in the console if something's wrong.
if (showFoodSpanElements.length != FOOD_IMAGES.length) {
	console.error('Number of span.showFood does not match FOOD_IMAGES count! Something\'s probably going to go wrong!')
}

// Now, loop through each of the food images, and...
// For each image path in food images, 
// 		1. Get the span element with the same index
// 		2. Give that span a hover action (hint: onmouseenter)
// 			The hover action should change the src
// 			of the image to the image path.
