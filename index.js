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
    "Vanilla Burnt Almond",]

/* Task 1: Confirm that the array is exactly 31 flavors. Your function should accept:

(1) an array 

Your function should return a boolean TRUE if the length of the array is 31 and FALSE if the length of the array is NOT 31.


To save you from having to count the items above, you can assume that length of originalFlavors is 31. 
You may also want to test your function by creating and passing an array of a different length, to make sure it returns FALSE if length is not 31. 

i.e. is31Flavors(originalFlavors) will return TRUE.*/

function flavors(originalFlavors) {
    if (originalFlavors.length === 31) {
        return true
    } else {
        return false
    }
}
console.log(flavors(originalFlavors));






/* Task 2: Corporate has come to you with an idea for a new flavor: Rainbow Sherbert! 
They think this will be a game changer. You need to modify the array to include this flavor. 

Your function should accept:

(1) an array 
(2) a flavor

Your function should add the flavor to the front of the array and console.log the resulting array.

For example addFlavor("Rainbow Sherbert", originalFlavors) should return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla Burnt Almond"] */ 

function addNew(originalFlavors, newFlavor) {
    originalFlavors.unshift(newFlavor);
}

addNew(originalFlavors, "Rainbow Sherbert!")
console.log(originalFlavors);





/* Task 3: Houston, we have a problem! There are now 32 flavors in the array! Your task is to remove an item from the end of the array. 

Your function should accept:

(1) an array 

Your function should remove a flavor from the end of the array and console.log the resulting array.

For example removeLastFlavor(originalFlavors) would return ["Rainbow Sherbert", "Banana Nut Fudge",..."Vanilla"]*/ 

function remove(orignalFlavors) {
    originalFlavors.pop();
}
remove(originalFlavors)
console.log(originalFlavors);




/* Task 4: Write a function that returns a flavor at a given index in the array.

Your function should accept:

(1) an array 
(2) an index

For example, getFlavorByIndex(originalFlavors, 2) would return "Black Walnut", assuming Rainbow Sherbert has been added successfully. */


function given(originalFlavors, index) {
    let choice = originalFlavors[index];
    return choice;
} 

console.log(given(originalFlavors, 5));





/* Task 5: As corporate wants to add more and more flavors to their lineup, they've realized that they need to remove flavors based on flavor name, 
as opposed to just arbitrarily removing the first or last flavor. Your task is to get an index by flavor name, and remove that flavor from the array. 

Your function should accept: 

(1) an array
(2) a string (flavor)

For example, removeFlavorByName(originalFlavors, "Vanilla") would return an array with the length 30 including all of the flavors except Vanilla. 

Hint: You can use .splice() for this

*/

function removeFlavor(originalFlavors, selection) {
    flavorSelected = originalFlavors;
    for (let i = 0; i < originalFlavors.length; i++) {
        if (originalFlavors[i] === selection);
        flavorSelected.splice(i, 1);

    } return flavorSelected
}

console.log(removeFlavor(originalFlavors, "coffee"));





/* Task 6: With all of these changes going on, we don't want to lose track of the actual, original 31 flavors. 
Write a function called copy that makes a copy of the array. 

Your function should accept: 

2 arguments 1 for your new array and one for your original array

and should return a new array that is identical to the old array. You can name the new array however you'd like. */






/* Task 7: July 7th is "World Chocolate Day" and Baskin Robins wants to create promotional 
materials highlighting all of their chocolate flavors. Write a function that checks every item in the array 
for a given string and returns a new array called filteredArray with just these values. Rather than hardcoding 
"chocolate" into your function, pass a string as a parameter, and invoke with the argument "chocolate". 
This way you could also filter for "Vanilla", "Sherbert", etc. when those holidays roll around.

Your function should accept: 

(1) an Array
(2) a string (i.e. "chocolate")

and return a new array. 

For example, filterByWord(originalFlavors, "Chocolate") should return ["Chocolate", "Chocolate Almond",..."Chocolate Ribbon"].

DO NOT USE ADVANCED ARRAY METHODS (i.e. .filter) to solve this problem.

hint - you can use the .includes method to help you solve this */

function chocolateFlavors(originalFlavors, string) {
    let promotion = []; 
    for (let i = 0; i < originalFlavors.length; i ++) {
        if (originalFlavors[i].includes = (string)) {
            promotion.push(originalFlavors[i]);
        }

    }   return promotion;

}   

console.log(chocolateFlavors(originalFlavors, "Chocolate"));





