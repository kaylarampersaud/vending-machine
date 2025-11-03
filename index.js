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

  // TODO: add `else if` statements for the other selections
  if (selection === 1) {
    item = "pretzels";
    price = 1.99;
  } else {
    // We should never reach this code because of our earlier input validation.
    alert("Sorry! Something went wrong.");
  }

  // TODO: Prompt the user for a quantity between 1 and 10. Validate their input!
  // TODO: Show a confirmation message with the total cost.
}
