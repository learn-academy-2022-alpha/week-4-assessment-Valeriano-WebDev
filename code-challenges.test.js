// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.
/** Psuedo Code
 * Start by defining a function naming it removeAndShuffle
 * Set the parameter that the function takes in as an array
 * Begin with accomplishing the first condition of removing the first item. For this we can use the method .shift or .splice
 * There are various methods to accomplish the next portion of shuffling or generating a random order for the remaining elements of the array
 * To do this, we know that we will want to incorporate Math.random to do so.
 * We will also utilize a method to iterate through each element of the array as well.
 * We can use the higher order function .sort to sift through and compare each element in tandem with Math.random in order to return a random order.
 * Instead of adding the standard compare function we see with .sort we use Math.random as our compare function to base our results on.
 *
 *
 * In regards, to testing with Jest , we will make use of the provided link to provide the proper expect statement for a passing test
 * After many attempts to find the correct matcher, the passing matcher is the usage of expect.arrayContaining(array)
 * Since we are removing an item from any test arrays and randomizing the order , the .arrayContaining matcher works because our
 expected output is a subset of the original array.
 **/

// a) Create a test with an expect statement using the variable provided. HINT: Check out this resource: https://jestjs.io/docs/expect#expectarraycontainingarray
describe("removeAndShuffle", () => {
    it("takes in an array, removes the first item from the array and shuffles the remaining content.", () => {

        const colors1 = ["purple", "blue", "green", "yellow", "pink"]
//      Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
        const colors2 = ["chartreuse", "indigo", "periwinkle", "ochre", "aquamarine", "saffron"]
//      Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
        expect(removeAndShuffle(colors1)).toEqual(expect.arrayContaining(["yellow", "blue", "pink", "green"]))
        expect(removeAndShuffle(colors2)).toEqual(expect.arrayContaining(["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]))

    })
})

// ReferenceError: removeAndShuffle is not defined

// b) Create the function that makes the test pass.

const removeAndShuffle = (arr) => {
    return arr.slice(0).sort(() => Math.random() - 0.5
    )}

/** Received all green passing tests **/

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.
/** Psuedo Code
 * Define a function giving it a name of minAndMax
 * We can use arr as a placeholder for the parameter to be passed in.
 * All we need is a return statement utilizing the functions Math.min and Math.max on the array to return the smallest and largest number.
 * Min first and then max to meet the order requirement . Both functions will be encapsulated by array [] .
 *
 *UPDATE:
 * It is important to note that we will use the spread syntax... to represent any number of values that are contained in any given array.
 *  This allows us to receive the desired values. While testing the function with the spread syntax the values that were returned in the array were null.
 */

/** REFERENCE **  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax/ */
// a) Create a test with expect statements for each of the variables provided.

describe("minAndMax", () => {
    it("takes an array of numbers and returns an array of the minimum and maximum numbers in that order.", () => {
        const nums1 = [3, 56, 90, -8, 0, 23, 6]
        // Expected output: [-8, 90]
        const nums2 = [109, 5, 9, 67, 8, 24]
        // Expected output: [5, 109]
        expect(minAndMax(nums1)).toEqual([-8, 90])
        expect(minAndMax(nums2)).toEqual([5, 109])
    })
})

//ReferenceError: minAndMax is not defined

// b) Create the function that makes the test pass.

const minAndMax = (arr) => {
    return [Math.min(...arr), Math.max(...arr)]
}

/** Received all green passing tests **/

// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.
/** Pseudo code
 * Define the function giving it a name of combineWithNoDuplicates
 * We will use arr1 and arr2 as placeholders to represent the two arrays to be passed in.
 * Since we will be comparing all values in the arrays to ensure there are no duplicates, we
  can make use of higher order functions to iterate and determine duplicates.
 * We can also make use of the Set object to accomplish the same task with less code.
 * We can declare a new Set with both arr placeholders as values to be passed in. spread syntax... will be used
 * to represent any number of values contained in any given array.
 * In a Set object , each value must be unique / no duplicates.
 *
 *Reference : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 */
// a) Create a test with an expect statement using the variables provided.

describe("combineWithNoDuplicates", () => {
    it("takes in two arrays as arguments and returns one array with no duplicate values", () => {
        const testArray1 = [3, 7, 10, 5, 4, 3, 3]
        const testArray2 = [7, 8, 2, 3, 1, 5, 4]
//      Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
        expect(combineWithNoDuplicates(testArray1, testArray2)).toEqual([3, 7, 10, 5, 4, 8, 2, 1])
    })
})

//ReferenceError: combineWithNoDuplicates is not defined

// b) Create the function that makes the test pass.

const combineWithNoDuplicates = (arr1, arr2) => [...new Set([...arr1, ...arr2])]


/** Received all green passing tests **/