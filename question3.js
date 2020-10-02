/*
Write a function that takes in a string and converts it into kebab case
(ex. ('Dogs are cute') ---> Dogs-Are-Cute) notice how every word 
becomes capitalized, and connected by a hyphen.
if the string passed in is an empty string, return 'This is an empty string!'

for this question, make a comment for every piece of the code, explaining
what it does and why.
*/

const kebabCase = function (str) {
    let arr = [];

    if (str === "") {
        return 'This is an empty string!';
        // ↑ when str is empty string
    } else {
        str = str.toLowerCase();
        // ↑ convert the calling value to lowercase 
        arr = str.split(" ");
        // ↑ convert string to array
        for (i=0; i<arr.length; i++) {
           arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
           // ↑ convert the first character to uppercase 
        }
        str = arr.join("-");
        // ↑ join each part of array with "-"
       return str;
    }
}

console.log((kebabCase('Coding Is Fun') === 'Coding-Is-Fun') ? "Test 1: Passing" : "Test 1: Failing");

console.log((kebabCase('this STrIng has Weird casing') === 'This-String-Has-Weird-Casing') ? "Test 2: Passing" : "Test 2: Failing");

console.log((kebabCase('') === 'This is an empty string!') ? "Test 3: Passing" : "Test 3: Failing");

