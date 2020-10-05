/*REMEMBER TO RETURN ALL OF THE ANSWERS ON THESE TASKS, IF YOU DON'T, THE AUTOGRADER WILL NOT WORK*/

/*
When doing these tasks, we recommend using console.log to test the output of your code to make sure it works correctly.
This will usually entail console logging the answer directly or console logging the invocation (call) of the function so when it
returns a value, that value will be logged to the console.  An example of this would be:  console.log(theFunction(value1,value2))
*/

/* 👀 This is your data ⬇ */
const originalFlavors = [
    "Banana Nut Fudge",
    "Black Walnut",
    "Burgundy Cherry",
    "Butterscotch Ribbon",
    "Cherry Macaron",
    "Chocolate",
    "Chocolate Almond",
    "Chocolate Chip",
    "Chocolate Fudge",
    "Chocolate Mint",
    "Chocolate Ribbon",
    "Coffee",
    "Coffee Candy",
    "Date Nut",
    "Eggnog",
    "French Vanilla",
    "Green Mint Stick",
    "Lemon Crisp",
    "Lemon Custard",
    "Lemon Sherbet",
    "Maple Nut",
    "Orange Sherbet",
    "Peach",
    "Peppermint Fudge Ribbon",
    "Peppermint Stick",
    "Pineapple Sherbet",
    "Raspberry Sherbet",
    "Rocky Road",
    "Strawberry",
    "Vanilla",
    "Vanilla Burnt Almond"
]

/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: Copy the Array! 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
We have an array called originalFlavors with 31 flavors (see above).  In these tasks, we will be reading and writing data to this array.  
With all of these changes going on, we don't want to lose track of the actual, original 31 flavors.  So we need to copy the original array!

/*
Use the copy function below to do the following:
    1. Receive two arguments: One should contain a new empty array (name this whatever you like), the other should contain the old array stored in originalFlavors
    2. Make a copy of the originalFlavors array and store it in the empty one
    2. Return the new array that holds an exact copy of the old array  

    HINT: You can use ..., a loop, or slice() to copy an array
*/

function copy(/*your code here*/){
    /*your code here*/
}    





/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Now that we've copied the array, we need to confirm that the original is still intact with 31 flavors

Use the is31Flavors function below to do the following:
    1. Receive the originalFlavors array
    2. Check to see if the array has exactly 31 flavors in it
    3. Return true if it is does, return false if it does not

For Example: is31Flavors(originalFlavors) will return true if your code is working properly

HINT - You may want to test your function by creating and passing an array of a different length.  It should return false if length is not 31. 
*/


function is31Flavors(/*your code here*/){
   /*your code here*/
}

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Use the addFlavor function below to do the following:
    1. Receive the originalFlavors array
    2. Receive a new flavor
    3. Add the passed flavor to the front of the array
    4. Return the resulting array

    For example: addFlavor("Rainbow Sherbert", originalFlavors) should return the array ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"]
*/


function addFlavor(/*your code here*/){
   /*your code here*/
}


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Houston, we have a problem! There are now 32 flavors in the originalFlavors array! Your task is to remove an item from the end of the array. 

Use the removeLastFlavor function below to do the following:
    1. Receive the originalFlavors array that now contains 32 flavors from Task 3
    2. Remove the last item from the array
    3. Return the resulting array

    For example: running removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]
*/

function removeLastFlavor(/*your code here*/){
   /*your code here*/
}



/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Write a function that returns a flavor at a given index in the originalFlavors array.

Use the getFlavorByIndex function below to do the following:
    1. Receive the originalFlavors array (with the last item removed and Rainbow Sherbert added) 
    2. Receive an index position
    3. Return the flavor located at the received index position

    For example: running getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully
*/

function getFlavorByIndex(/*your code here*/){
    /*your code here*/
}


/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName(/*your code here*/){
    /*your code here*/
}



/*🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 7: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function filterByWord(/*your code here*/){
    /*your code here*/
}


/* 💪💪💪💪💪🧁🍦🍨 STRETCH 🍨🍦🍫💪💪💪💪💪*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

Your function should accept: 

(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(/*code here*/){

    /*code here*/

}


/* 💪💪💪💪💪💪💪💪💪💪 STRETCH 2: 💪💪💪💪💪💪💪💪💪
Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
const newFlavors = ["Date night",
    "U.S.S Butterscotch (Stranger Things special)",
    "Honey Almond",
    "Mint Chocolate Chip",
    "Chocolate",
    "Oreo® Cookies'n Cream",
    "Chocolate Chip",
    "Pralines 'n Cream",
    "Very Berry Strawberry",
    "Chocolate Chip Cookie Dough",
    "Old Fashioned Butter Pecan",
    "Jamoca®",
    "Jamoca® Almond Fudge",
    "Reese's® Peanut Butter Cup",
    "Rocky Road",
    "Peanut Butter ’n Chocolate",
    "Gold Medal Ribbon®",
    "World Class® Chocolate",
    "Cherries Jubilee",
    "Chocolate Fudge",
    "Daiquiri Ice",
    "Rainbow Sherbet",
    "Rainbow Swirl"] 
const seasonalFlavors = ["America's Birthday Cake",
    "Baseball Nut®",
    "Blueberry Cheesecake",
    "Bourbon Street Pecan Pie",
    "Brownie Bar Mashup",
    "Cherry Cordial with Kisses",
    "Chocolate Mousse Royale",
    "French Vanilla",
    "Eggnog",
    "German Chocolate Cake",
    "Icing on the Cake",
    "Love Potion #31",
    "New York Cheesecake",
    "Nutty Coconut",
    "Peppermint",
    "Strawberry Cheesecake",
    "Rock ’n Pop Swirl",
    "Reese’s Peanut Butter Cup",
    "Trick Oreo Treat",
    "Winter White Chocolate",
    "made with Snickers®",
    "made with M&M's®",
    "Heath®",
    "Mango Tango",]
const regionalFlavors = ["Pink Bubblegum",
    "Caramel Macchiato",
    "York Peppermint Pattie",
    "Cotton Candy",
    "Orange Sherbet",
    "Grape Ice",
    "Watermelon Ice",
    "Miami Vice Sorbet",
    "Splish Splash®",
    "Wild 'n Reckless Sherbet",
    "Lemon Custard",
    "Oregon Blackberry",
    "Bananas ‘n Strawberries",
    "Mississippi Mud",
    "Rum Raisin",
    "Creole Cream Cheese",
    "Chocolate Almond",
    "Fudge Brownie",
    "Banana Nut",
    "Black Walnut",
    "Cotton Candy Crackle",
    "Quarterback Crunch",
    "Chocolate Chocolate Chip Cheesecake",
    "Caramel 'n' Cookies"]

function getRandomFlavors(/*code here*/){

    /*code here*/

}

/* 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑🛑🛑🛑🛑🛑 */
function foo(){
    return 'bar';
}

export default{
    foo,
    is31Flavors,
    addFlavor,
    removeLastFlavor,
    getFlavorByIndex,
    removeFlavorByName,
    copy,
    filterByWord,
    getAverageWordLength,
    getRandomFlavors
}

