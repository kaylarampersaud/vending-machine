# Vending Machine

## Instructions

1. Clone this repository down to your local machine and open it with VS Code.
2. Live serve `index.html`.
3. Choose one person in the group to share their screen.
4. Everyone else should follow along and type the answers on their own computers.
5. As a team, read each question out loud and reach a consensus on the answer
   before moving to the next question.

## Combine comparisons

```js
const x = 10;

if (5 < x < 12) {
  console.log("x is between 5 and 12.");
}

if (12 > x > 5) {
  console.log("x is between 12 and 5.");
}
```

1. What do you expect the snippet above to print?
2. Copy and paste the code into the console to run it. What actually prints?
3. Comparisons are evaluated from left to right, _one at a time_. In other words,
   you can think of `5 < x < 12` as actually `(5 < x) < 12`.\
   Explain why `5 < x < 12` and `12 > x > 5` evaluate differently.
4. Write a boolean expression that correctly checks if `x` is between 5 and 12.\
   _Hint:_ you'll need to combine two comparisons!

> [!TIP]
>
> Notice how the code gets harder to read the deeper we nest our conditionals?
> We'll learn a better way to organize our code soon!

## Read the provided code

Refer to the code in `index.js` to answer the following questions.

5. What is the difference between `prompt` and `alert`?

> [!WARNING]
>
> We are _temporarily_ using `prompt` and `alert` to interact with users.
> This is not recommended in practice, but we will use them until we learn
> how to build better user interfaces.

One common use case of conditionals is to **input validation**. Whenever we take
input from a user, we have to **guard** the rest of our code from bad or unexpected
values. One example is asking the user to input a number within a certain range.

6. What syntax is used to denote a **multi-line string**?
7. Which variable is used to store the user's selection?
8. `prompt` will always store the user input as a string.
   How is the user's selection converted from a string to a number?
9. When does [`Number.isNaN(value)`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN)
   evaluate to `true`?
10. How do we check if the user's selection is within the desired range?

## Complete the vending machine

Conditionals can be **nested**, which means that we can write a conditional
inside the code block of another conditional.

In addition to input validation, another common use case of conditionals
is to assign different values to variables.

11. Add `else if` statements for the other selections to update `item` and `price`
    according to the user's selection.
12. Prompt the user for a quantity between 1 and 10. Validate their input!
13. If the user input passes all guard cases, show a message that includes
    their username, the quantity and name of their selection, and the total cost.

