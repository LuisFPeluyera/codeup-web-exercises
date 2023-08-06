"use strict"


//TODO               BASIC CALCULATOR FUNCTION


const calculator = () => {

    let firstNum = parseInt(prompt("Enter first number"));

    let operator = prompt("Enter operator");

    let secondNum = parseInt(prompt("Enter second number"));

    let result;



    if (operator === "+") {

        console.log(firstNum + secondNum);
        result = firstNum + secondNum;

    } else if (operator === "-") {

        console.log(firstNum - secondNum);
        result = firstNum - secondNum;

    } else if (operator === "*") {

        console.log(firstNum * secondNum);
        result =  firstNum * secondNum;

    } else if (operator === "/") {

        console.log(firstNum / secondNum);
        result = firstNum / secondNum;
    }

    alert(result);
}


//calculator();


