/*****************************
* CODING CHALLENGE 1
*/

/*
Riaz and Ghalib are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height^2 = mass / (height * height). (mass in kg and height in meter).

1. Store Riaz's and Ghalib's mass and height in variables
2. Calculate both their BMIs
3. Create a boolean variable containing information about whether Riaz has a higher BMI than Ghalib.
4. Print a string to the console containing the variable from step 3. (Something like "Is Riaz's BMI higher than Ghalib's? true"). 

GOOD LUCK 😀
*/

//Step 1
const riazMass = 250;
const riazHeight = 74;
// console.log(riazMass);
// console.log(riazHeight);

const ghalibMass = 280;
const ghalibHeight = 72;

//Step 2
const riazBMI = riazMass / (riazHeight * riazHeight);
const ghalibBMI = ghalibMass / (ghalibHeight * ghalibHeight);
console.log(riazBMI);
console.log(ghalibBMI);

const ghalibHigherBMI = ghalibBMI < riazBMI;

console.log('Is Riaz\'s BMI higher than Ghalib\'s? ' + ghalibHigherBMI);