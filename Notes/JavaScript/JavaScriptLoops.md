Loops
A loop is a programming tool that repeats a set of instructions until a specified condition, called a stopping condition is reached. As programmers, we rely on 
loops
Preview: Docs Loading link description
 all the time! You may hear the generic term iterate when referring to loops; iterate simply means “to repeat”.

When we need to reuse a task in our code, we often bundle that action in a function. Similarly, when we see that a process has to repeat multiple times in a row, we write a loop. Loops allow us to create efficient code that automates processes to make scalable, manageable programs.

As illustrated in the diagram, loops iterate, or repeat, an action until a specific condition is met. When the condition is met, the loop stops and the computer moves on to the next part of the program.

-------------------------------------------------------------------------

Repeating Tasks Manually
Before we write our own 
loops, let’s take a moment to develop an appreciation for loops. The best way to do that is by showcasing how cumbersome it would be if a repeated task required us to type out the same code every single time.

bsp:

const vacationSpots = ['Thailand', 'Brazil', 'Romania'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);


------------------------------------------------------------------

The For Loop
Instead of writing out the same code over and over, loops allow us to tell the computer to repeat a given block of code on its own. One way to give computers these instructions is with a 
for loop
Preview: Docs Loading link description
.

The typical for loop includes an iterator variable that usually appears in all three expressions. The iterator variable is initialized, checked against the stopping condition, and assigned a new value on each loop iteration. Iterator 
variables
Preview: Docs Loading link description
 can have any name, but it’s best practice to use a descriptive variable name.

A for loop contains three expressions separated by ; inside the parentheses:

an initialization starts the loop and can also be used to declare the iterator variable.
a stopping condition is the condition that the iterator variable is evaluated against — if the condition evaluates to true, the code block will run. If it evaluates to false, the code will stop.
an iteration statement is used to update the iterator variable on each loop.
The for loop syntax looks like this:

for (let counter = 0; counter < 4; counter++) {
  console.log(counter);
}


In this example, the output would be the following:

0
1
2
3


Let’s break down the example:

The initialization is let counter = 0, so the loop will start counting at 0.
The stopping condition is counter < 4, meaning the loop will run as long as the iterator variable, counter, is less than 4.
The iteration statement is counter++. This means after each loop, the value of counter will increase by 1. For the first iteration, counter will equal 0. For the second iteration, it will equal 1, and so on.
The code block within the curly braces, console.log(counter), will continue to execute until the condition evaluates to false. The condition will be false when counter is greater than or equal to 4 — the point that the condition becomes false is sometimes called the stop condition.
This for loop makes it possible to write 0, 1, 2, and 3 programmatically.

bsp:

for (let counter = 5; counter < 11; counter++) {
  console.log(counter);
}

---------------------------------------------------------------------------

Looping in Reverse
What if we want the for loop to log 3, 2, 1, and then 0? With simple modifications to the expressions, we can make our loop run backward!

To run a 
backward for loop
Preview: Docs Loading link description
, we must:

Set the iterator variable to the highest desired value in the initialization expression.
Set the stopping condition for when the iterator variable is less than the lowest desired amount.
The iterator should decrease in intervals after each iteration.
When writing/changing loops, there is a chance we will get a dreaded infinite loop, which essentially stops our programming from running anything else! This occurs when the loop’s stopping condition is never met, causing the loop to continue iterating, blocking the rest of the program from executing.

To exit an infinite loop in an exercise, refresh the page — then fix the code for your loop before running it again.

bsp

for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}

----------------------------------------------------------------

Looping through Arrays
for 
loops
Preview: Docs Loading link description
 are very handy for iterating over data structures. For example, we can use a for loop to perform the same operation on each element on an array. 
Arrays
Preview: Docs Arrays are lists of ordered, stored data that can be of any data type.
 hold lists of data, like customer names or product information. Imagine we owned a store and wanted to increase the price of every product in our catalog. That could be a lot of repeating code, but by using a for loop to iterate through the array we could accomplish this task easily.

To loop through each element in an array, a for loop should use the array’s .length property in its condition.

Check out the example below to see how for loops iterate on arrays:

const animals = ['Grizzly Bear', 'Sloth', 'Sea Lion'];
for (let i = 0; i < animals.length; i++){
  console.log(animals[i]);
}

Copy to Clipboard

This example would give you the following output:

Grizzly Bear
Sloth
Sea Lion

Copy to Clipboard

In the loop above, we’ve named our iterator variable i. This is a variable naming convention you’ll see in a lot of loops. When we use i to iterate through arrays we can think of it as being short-hand for the word index. Notice how our stopping condition checks that i is less than animals.length. Remember that arrays are zero-indexed, the index of the last element of an array is equivalent to the length of that array minus 1. If we tried to access an element at the index of animals.length we will have gone too far!

With for loops, it’s easier for us to work with elements in arrays.

bsp

const vacationSpots = ['Bali', 'Paris', 'Tulum'];

// Write your code below
for (let i = 0; i < vacationSpots.length; i++) {
  console.log('I would love to visit ' + vacationSpots[i]);
};

----------------------------------------------------------------------------------

Nested Loops
When one loop is running inside another loop, we call that a nested loop. One use for a nested for loop is to compare the elements in two 
arrays
Preview: Docs Loading link description
. For each round of the outer for loop, the inner for loop will run completely.

Let’s look at an example of a nested for loop:

const arrayA = [6, 19, 20];
const arrayB = [19, 81, 2];
for (let i = 0; i < arrayA.length; i++) {
  for (let j = 0; j < arrayB.length; j++) {
    if (arrayA[i] === arrayB[j]) {
      console.log('Both arrays have the number: ' + arrayB[j]);
    }
  }
}

Copy to Clipboard

Let’s think about what’s happening in the nested loop in our example. For each element in the outer loop array, arrayA, the inner loop will run in its entirety comparing the current element from the outer array, arrayA[i], to each element in the inner array, arrayB[j]. When it finds a match, it prints a string to the console.

Note: Remember, to exit out of an infinite loop in an exercise, refresh the page - then fix the conditions of the loop before running again.

bsp

const bobsFollowers = ['Alice', 'Charlie', 'Diana', 'Ethan'];

const tinasFollowers = ['Charlie', 'Diana', 'Grace'];

const mutualFollowers = [];

for (let i = 0; i < bobsFollowers.length; i++) {
  for (let j = 0; j < tinasFollowers.length; j++) {
    if (bobsFollowers[i] === tinasFollowers[j]) {
      mutualFollowers.push(bobsFollowers[i]);
    }
  }
}

console.log(mutualFollowers);

-----------------------------------------------------------------------------------------

The While Loop
Now, we’re going to learn about a different type of loop: the 
while loop
Preview: Docs Loading link description
. To start, let’s convert a for loop into a while loop:

// A for loop that prints 1, 2, and 3
for (let counterOne = 1; counterOne < 4; counterOne++){
  console.log(counterOne);
}

// A while loop that prints 1, 2, and 3
let counterTwo = 1;
while (counterTwo < 4) {
  console.log(counterTwo);
  counterTwo++;
}

Copy to Clipboard

Let’s break down what’s happening with our while loop syntax: The counterTwo variable is declared before the loop. Since it’s in the global scope, we can access it inside our while loop.

We start our loop with the keyword while followed by our stopping condition, or test condition. This will be evaluated before each round of the loop. While the condition evaluates to true, the block will continue to run. Once it evaluates to false the loop will stop.
Next, we have our loop’s code block, which prints counterTwo to the console and increments counterTwo.
What would happen if we didn’t increment counterTwo inside our block? If we didn’t include this, counterTwo would always have its initial value, 1. That would mean the testing condition counterTwo < 4 would always evaluate to true and our loop would never stop running! Remember, this is called an infinite loop and it’s something we always want to avoid. Infinite loops can take up all of a computer’s processing power, potentially freezing the machine.

So you may be wondering when to use a while loop! The syntax of a while loop is ideal when we don’t know in advance how many times the loop should run. Think of eating like a while loop: when you start taking bites, you don’t know the exact number you’ll need to become full. Rather, you’ll eat while you’re hungry. In situations when we want a loop to execute an undetermined number of times, while loops are the best choice.

bsp

const cards = ['diamond', 'spade', 'heart', 'club'];

// Write your code below
let currentCard;

while (currentCard !== 'spade') {
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}


----------------------------------------------------------------------------------

Do...While Statements
In some cases, we want a piece of code to run at least once and then loop based on a specific condition after its initial run. This is where the do...while statement comes in.

A 
do...while
Preview: Docs Loading link description
 statement says to do a task once and then keep doing it until a specified condition is no longer met. The syntax for a do...while statement looks like this:

let countString = '';
let i = 0;

do {
  countString = countString + i;
  i++;
} while (i < 5);

console.log(countString);

Copy to Clipboard

In this example, the code block makes changes to the countString variable by appending the string form of the i variable to it. First, the code block after the do keyword is executed once. Then the condition is evaluated. If the condition evaluates to true, the block will execute again. The looping stops when the condition evaluates to false.

Note that the while and do...while loops are different! Unlike the while loop, do...while will run at least once, whether or not the condition evaluates to true.

const firstMessage = 'I will print!';
const secondMessage = 'I will not print!'; 

// A do while with a stopping condition that evaluates to false
do {
 console.log(firstMessage)
} while (true === false);

// A while loop with a stopping condition that evaluates to false
while (true === false){
  console.log(secondMessage)
};

Copy to Clipboard

bsp

let cupsOfSugarNeeded = 7;
let cupsAdded = 0;

do {
  cupsAdded++;
  console.log(`Cups added: ${cupsAdded}`);
} while (cupsAdded < cupsOfSugarNeeded);

-------------------------------------------------------------------------------

The break Keyword
Imagine we’re looking to adopt a dog. We plan to go to the shelter every day for a year and then give up. But what if we meet our dream dog on day 65? We don’t want to keep going to the shelter for the next 300 days just because our original plan was to go for a whole year. In our code, when we want to stop a loop from continuing to execute even though the original stopping condition we wrote for our loop hasn’t been met, we can use the keyword break.

The 
break keyword
Preview: Docs Loading link description
 allows programs to “break” out of the loop from within the loop’s block.

Let’s check out the syntax of a break keyword:

for (let i = 0; i < 99; i++) {
  if (i > 2 ) {
     break;
  }
  console.log('Banana.');
}

console.log('Orange you glad I broke out the loop!');

Copy to Clipboard

This is the output for the above code:

Banana.
Banana.
Banana.
Orange you glad I broke out the loop!

Copy to Clipboard

break 
statements
Preview: Docs Loading link description
 can be especially helpful when we’re looping through large data structures! With breaks, we can add test conditions besides the stopping condition, and exit the loop when they’re met.

 bsp

const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

// Write your code below
for (let i = 0; i < rapperArray.length; i++) {
  console.log(rapperArray[i]);
  if (rapperArray[i] === 'Notorious B.I.G.') {
    break;
  }
}

console.log("And if you don't know, now you know.");

 ---------------------------------------------------------------------------------------------

Review
Great job! In this lesson, we learned how to write cleaner code with 
loops
Preview: Docs Loading link description
. You now know:

Loops perform repetitive actions, so we don’t have to code that process manually every time.
How to write for loops with an iterator variable that increments or decrements
How to use a for loop to iterate through an array
A nested for loop is a loop inside another loop
while loops allow for different types of stopping conditions
Stopping conditions are crucial for avoiding infinite loops.
do...while loops run code at least once — only checking the stopping condition after the first execution
The break keyword allows programs to leave a loop during the execution of its block