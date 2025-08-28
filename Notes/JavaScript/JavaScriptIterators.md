Iterators
Introduction to Iterators
Imagine we have a grocery list and want to know what each item on the list is — we might scan through each row and read every item. This common task is similar to what we have to do when we want to iterate over, or loop through, an array. One tool at our disposal is the for loop. However, we also have access to built-in array 
methods
Preview: Docs Loading link description
 that provide specialized iteration functionality.

The built-in JavaScript array methods that help us iterate are called iteration methods, at times referred to as 
iterators
Preview: Docs Loading link description
. Iterators are methods called on 
arrays
Preview: Docs Loading link description
 to manipulate elements and return values.

In this lesson, we will learn the syntax for these iterator methods, their return values, and how to use the documentation to understand them. We’ll also explore how to choose the right iterator method for a given task.

------------------------------------------------------------------------------------------------

Iterators
The .forEach() Method
The first iteration method that we’re going to learn is 
.forEach(). Aptly named, .forEach() will execute the same code for each element of an array.

![alt text](image-5.png)

Diagram outlining the parts of an array iterator, including the array identifier, the section that is the iterator, and the callback function
The preceding code example will log a nicely formatted list of the groceries to the console. Let’s explore the syntax of invoking .forEach().

groceries.forEach() calls the forEach method on the groceries array.
.forEach() takes a callback function as an argument. Remember, a callback function is a function passed as an argument to another function.
.forEach() 
loops
Preview: Docs Loading link description
 through the array and executes the callback function for each element. During each execution, the current element is passed as the argument for the callback function.
The return value for .forEach() will always be undefined.
Another way to pass a callback for .forEach() is to use arrow function syntax.

groceries.forEach(groceryItem => console.log(groceryItem));

Copy to Clipboard

We can also define a function beforehand to be used as the callback function.

function printGrocery(element){
  console.log(element);
}

groceries.forEach(printGrocery);

Copy to Clipboard

The preceding example uses a function declaration, but we can also use a function expression or arrow function.

All three code snippets do the same thing. In each array iteration method, we can use any of the three examples to supply a callback function as an argument to the iterator. It’s good to be aware of the different ways to pass in callback 
functions
Preview: Docs Loading link description
 as arguments in 
iterators
Preview: Docs Loading link description
 because developers have different stylistic preferences. Nonetheless, due to the strong adoption of ES6, we will be using arrow function syntax in the later exercises.

 bsp

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];


fruits.forEach(fruit => {
  console.log(`I want to eat a ${fruit}`);
});

/*
Ausgabe:
I want to eat a mango
I want to eat a papaya
I want to eat a pineapple
I want to eat a apple
*/

 ------------------------------------------------------------------------------------

 Iterators
The .map() Method
The second iterator we’re going to cover is .map(). When 
.map()
Preview: Docs Loading link description
 is called on an array, it takes an argument of a callback function and returns a new array! Take a look at an example of calling .map():

const numbers = [1, 2, 3, 4, 5]; 

const bigNumbers = numbers.map(number => {
  return number * 10;
});

Copy to Clipboard

.map() works in a similar manner to 
.forEach()
Preview: Docs Loading link description
— the major difference is that .map() returns a new array.

In the example above:

numbers is an array of numbers.
bigNumbers will store the return value of calling .map() on numbers.
numbers.map will iterate through each element in the numbers array and pass the element into the callback function.
return number * 10 is the code we wish to execute upon each element in the array. This will save each value from the numbers array, multiplied by 10, to a new array.
If we take a look at numbers and bigNumbers:

console.log(numbers); // Output: [1, 2, 3, 4, 5]
console.log(bigNumbers); // Output: [10, 20, 30, 40, 50]

Copy to Clipboard

Notice that the elements in numbers were not altered and bigNumbers is a new array.

bps

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

// Create the secretMessage array below
const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => number / 100);

console.log(smallNumbers);

/*
Ausgabe:
HelloWorld
[ 1, 2, 3, 4, 5 ]

------------------------------------------------------------------------------

Iterators
The .filter() Method
Another useful iterator method is 
.filter()
Preview: Docs Loading link description
. Like 
.map()
Preview: Docs Loading link description
, .filter() returns a new array. However, .filter() returns an array of elements after filtering out certain elements from the original array. The callback function for the .filter() method should return true or false depending on the element that is passed to it. The elements that cause the callback function to return true are added to the new array. Take a look at the following example:

const words = ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 

const shortWords = words.filter(word => {
  return word.length < 6;
});

Copy to Clipboard

words is an array that contains string elements.
const shortWords = declares a new variable that will store the returned array from invoking .filter().
The callback function is an arrow function that takes a single parameter, word. Each element in the words array will be passed to this function as an argument.
word.length < 6; is the condition in the callback function. Any word from the words array that has fewer than 6 characters will be added to the shortWords array.
Let’s also check the values of words and shortWords:

console.log(words); // Output: ['chair', 'music', 'pillow', 'brick', 'pen', 'door']; 
console.log(shortWords); // Output: ['chair', 'music', 'brick', 'pen', 'door']

Copy to Clipboard

Observe how words was not mutated, i.e. changed, and shortWords is a new array.

bsp

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(num => num < 250);
console.log(smallNumbers);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];


// Call .filter() on favoriteWords below
const longFavoriteWords = favoriteWords.filter(words => words.length > 7);
console.log(longFavoriteWords);

/*
Ausgabe:
[ 200, 3.14, 7, 13 ]
[ 'nostalgia', 'hyperbole', 'esoteric']
*/

-------------------------------------------------------------------------------