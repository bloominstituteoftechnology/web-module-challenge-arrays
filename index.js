var originalFlavors = ["Banana Nut Fudge",
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
    "Vanilla Burnt Almond"]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.

To save you from having to count the items above, you can assume that length of originalFlavors is 31. You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

function is31Flavors(arr){ // LOGIC function = find out how long array 'is31Flavors' is
    if(arr.length === 31){ // if array 'is31Flavors' is 31 indexes long
        return true; // then perform the function 'return true'
    }else{  // otherwise if it is not
        return false; // perform the function 'return false'
    }

}
console.log(is31Flavors(originalFlavors)); // console - perform the above funtion and pass in the array named orignalFlavors

/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */ 

function addFlavor(arr, flav){ // LOGIC function (add a flavor) to (an arr) with the name (flav)
    arr.unshift(flav); // add new (flav) to the beginning (.unshift) of arr
    console.log(arr) // then console log the new list, with (flav) at the beginning
}
addFlavor(originalFlavors, 'Rainbow Sherbert'); // perform function add, with arguments given


/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

// we need a FUNCTION that will REMOVE (.pop, or .shift) a flavor from the list (ARRAY). In this instance it is removed from the END, so we will use .POP. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/ 

function removeLastFlavor(arr){ // LOGIC this function's goal is to remove the last flavor at the end of (arr)
    arr.pop(); //take last item and then
    return arr  // ... return it to me without that item
}
console.log(removeLastFlavor(originalFlavors)); // perform the above function on the array named originalFlavors 

/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */

function getFlavorByIndex(arr,index){ // LOGIC this function's goal is to search an array for an item in a specific position in the index
    return arr[index]; // and then return that index item 
}
console.log(getFlavorByIndex(originalFlavors,6)); // tells JS to search originalFlavors and return whatever flavor is the 6th index : Chocolate 

/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavorByName(arr, flavor){ // LOGIC this function's goal is to search array originalFlavors and for any index that matches the paramter, remove that item from the list
       for(let i = 0; i < arr.length; i++){ // loop through the lenth of arry (originalFlavors) to the end
        if(arr[i] === flavor){ // if any of those items contain the flavor paramter
            arr.splice(i, 1) // then remove them
            return arr; // once done, return the updated array
        }    
       } 
}
console.log(removeFlavorByName(originalFlavors, "Vanilla")); // perform the function on the array originalFlavors searching for items containing 'vanilla' and remove them. 


/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */

/// function (copy) the originalFlavors list, and return to me a copy of that list

// LOGIC the goal of this function is to take the array originalFlavors and make a copy of it

function copy(arr){
    const newArr = arr.slice();
    return newArr;
} 
console.log(copy(originalFlavors));

// why would we rather put the console.log inside the function here? 

    

/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional materials highlighting all of their chocolate flavors. Write a function that checks every item in the array for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding "chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

// Logic, search array named originalFlavors for the indexes that include the string (chocolate), and return to me a new list with those items. 

function filterByWord(arr, string){ // LOGIC the goal of this function is to search originalFlavors, and for every item that contains a string, remove them and push them to a new array 
        let newArr = []; // newArr is ____ it's empty here? 
        for(let i = 0; i < arr.length; i++){ // started loop through the array, searching the length of the index from 0-end
            if(arr[i].includes(string)){ // if array item include the string
                newArr.push(arr[i]); //push the array items containing the string to newArr 
            }
        }

    return newArr; // then return newArr content to me 
}
console.log(filterByWord(originalFlavors, 'Chocolate'));



/* 🧁🍦🍨 STRETCH 🍨🍦🍫*/ 

/* STRETCH 1: Write a function that returns the average number of words in an array. You should be able to use this function for any array, but can test with originalFlavors.

//the average number of words in an array is found by adding up the number of words in each array and diving by the number of arrays. 


Your function should accept: 
//joins and splits
(1) an array

and should return the average number of words per item in the array. 

For example, getAverageWordLength(originalFlavors) should return a number between 0 and 3. */

function getAverageWordLength(/*code here*/){

    /*code here*/

}


/* STRETCH 2: Baskin Robins now offers new flavors, seasonal flavors, and even regional flavors. Write a function that will randomly select a total of 31 flavors from originalFlavors, currentFlavors, seasonalFlavors, and regionalFlavors.

Your function should accept 4 different arrays,

and should return a new array called randomFlavors with a length 31.

forExample, getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors) might return ["Strawberry Cheesecake", "Eggnog,"..."Chocolate"].*/

// Data ⬇️
var newFlavors = ["Date night",
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
var seasonalFlavors = ["America's Birthday Cake",
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
var regionalFlavors = ["Pink Bubblegum",
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

function getRandomFlavors(arr1, arr2, arr3, arr4){
        const allTheFlavors = [...arr1, ...arr2, ...arr3, ...arr4]; // create an array, allTheFlavors, that is arr1-4 combined using spread 
        const totalFlavors = allTheFlavors.length; 
        const randomFlavors = []; 
        for (let i = 0; i < 31; i++){
            let randomNum = Math.floor(Math.random() * totalFlavors);
            randomFlavors.push(allTheFlavors[randomNum]);
        }
        return randomFlavors;      
}
console.log(getRandomFlavors(originalFlavors, newFlavors, seasonalFlavors, regionalFlavors));