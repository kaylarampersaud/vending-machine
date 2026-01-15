// const x = 10;

// if (5 < x < 12) {
//   console.log("x is between 5 and 12.");
// }

// if (12 > x > 5) {
//   console.log("x is between 12 and 5.");
// }

// 1. What do you expect the snippet above to print?
// x is between 5 and 12.

// 2.Copy and paste the code into the console to run it. What actually prints?
//x is between 5 and 12.

// 3.Comparisons are evaluated from left to right, one at a time. In other words, you can think of 5 < x < 12 as actually (5 < x) < 12.

// 4.Explain why 5 < x < 12 and 12 > x > 5 evaluate differently.
// 5 < x < 12
// (5 < 10) (10 < 12)
// 12 > x > 5
// (12 > 10) = 1   (1 > 5) one not greater than 5 false
// in js true = 1   false = 0

// 5. Write a boolean expression that correctly checks if x is between 5 and 12.
// Hint: you'll need to combine two comparisons!
// const x = 7
// (12 > x > 5)
// (12 > x)

const username = prompt("What's your name?");
alert(`Hello, ${username}!`);

const selectionInput = prompt(`Please select one of the following options.
[1] Pretzels ($1.99)
[2] Chips ($0.99)
[3] Popcorn ($1.49)
`);

const selection = Number(selectionInput);

if (Number.isNaN(selection)) {
  alert("You must enter a number.");
} else if (selection < 1 || selection > 3) {
  alert("Your number must be 1, 2, or 3.");
} else {
  let item;
  let price;
}

// TODO: add `else if` statements for the other selections
if (selection === 1) {
  item = "pretzels";
  price = 1.99;
  alert(`You got pretzels`);
} else if (selection === 2) {
  item = "chips";
  price = 0.99;
  alert(`You got chips!`);
} else if (selection === 3) {
  item = "popcorn";
  price = 1.49;
  alert(`You got popcorn!`);
}

if (selectionInput === 1 || 2 || 3) {
  alert(
    `Your username is ${username},
       You purchased ${selection} item, ${item} for ${price}.`
  );
}

// We should never reach this code because of our earlier input validation.
if (selection > 3) {
  alert("Sorry! Something went wrong.");
}

// TODO: Prompt the user for a quantity between 1 and 10. Validate their input!
// TODO: Show a confirmation message with the total cost.
