/*

----------
QUESTION 1
----------

We want to move the <script> tag that loads this file to the <head> of the HTML document.
Would you expect your code to work the same way?
- If yes, explain why and how the change will not affect your code.
- If not, explain what changes you would make to keep it working.

YOUR ANSWER:
------------
No. You need to execute that function call only after the DOM is ready.
To fix it, use the DOMContentLoaded event that fires when the HTML document has been completely parsed.


----------
QUESTION 2
----------

What is one of the most important things you need to do when handling the click on the "Show result" button?
How did you do it, and how can you tell it works?


YOUR ANSWER:
------------
Prevent a page reload, Use preventDefault() method on the submit event of the form.



--------------------------------------------------
WRITE YOUR CODE BELOW AND OUTSIDE OF THIS COMMENT.
--------------------------------------------------

*/
function calculatorPlay() {
  document.addEventListener("DOMContentLoaded", function () {
    const firstNum = document.getElementById("firstNumber");
    const secondNum = document.getElementById("secondNumber");
    const resultText = document.getElementById("results");
    const operationDisplay = document.getElementById("display");
    const operators = document.getElementsByName("operation");
    const submitBtn = document.getElementById("btn_submit");

    let calculateCount = 0;

    operators.forEach((operator) => {
      function calculator(operator) {
        if (operator.id == "plus") {
          submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const result = parseInt(firstNum.value) + parseInt(secondNum.value);
            calculateCount++;
            resultText.textContent = `add: ${result}`;
          });
        } else if (operator.id == "minus") {
          submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const result = parseInt(firstNum.value) - parseInt(secondNum.value);
            calculateCount++;
            resultText.textContent = `minus: ${result}`;
          });
        } else if (operator.id == "times") {
          submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const result = parseInt(firstNum.value) * parseInt(secondNum.value);
            calculateCount++;
            resultText.textContent = `times: ${result}`;
          });
        } else if (operator.id == "dividedBy") {
          submitBtn.addEventListener("click", (event) => {
            event.preventDefault();
            const result = parseInt(firstNum.value) * parseInt(secondNum.value);
            calculateCount++;
            resultText.textContent = `dividedBy: ${result}`;
          });
        }
      }
      calculator(operator);
      operationDisplay.textContent = `You used the calculator ${calculateCount} times. 0 operations were invalid or did not return a numeric value.`;
    });
  });
}

calculatorPlay();
