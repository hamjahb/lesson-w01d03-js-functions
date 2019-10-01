// lab excercise
const totalBill = function (amount, taxRate) {
    const taxAmount = amount * taxRate;
    const total = amount + taxAmount;
    return total;
}

// 1
const youRock = function (name) {
    return "you rock " + name;
}

// 2
const square = function (num) {
    // return num * num;
    return Math.pow(num, 2);
}

// 3
const cube = function (num) {
    // return num * num * num;
    return Math.pow(num, 3);
}

// 4
const toTheFourth =function(num){
    // return num * num * num * num;
    return Math.pow(num, 4);
}

// extra practice
const calculate = function (num1, num2, operation) {
    if (operation == "add") {
        return num1 + num2;
    } else if (operation == "subtract") {
        return num1 - num2;
    } else if (operation == "multiply") {
        return num1 * num2;        
    } else if (operation == "divide") {
        return num1 / num2;
        } else {
            return "calculator can only add, subtract,divide, or multiply"
        }         
    }

// FizzBuzz
const fizzBuzz = function (num) {
    if (num%3==0 && num%5 == 0) {
        return "FizzBuzz";
    } else if (num%3==0) {
        return "Fizz";
    }else {
        return num;
    }
}

// Raindrop function
const rainDrop = function(num) {
    if (num%3 == 0) {
        return "Pling";
    } else if (num%5 == 0) {
        return "Plang";
    }else if (num%7 == 0) {
        return "Plong";
    } else {
        return num;        
    }
}
