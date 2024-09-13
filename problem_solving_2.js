//------------------  problem 1
/*
const dim = 23;
const mim = 38;
const kim = 40;
if(dim>mim && dim<kim) {
    console.log("Dim is the monster")
}
else if(mim>kim && mim>dim) {
    console.log("Mim is the monster");
}
else {
    console.log("Kim is the monster");
}
//otherway
function getMonster(num1, num2, num3) {
    if(num1 > num2 && num1 > num3) {
        return "num1 is the monster";
    }
    else if(num2 > num1 && num2 > num3) {
        return "num2 is the monster";
    }
    else {
        return "num3 is the monster";
    }
}
console.log(getMonster(dim, mim, kim));
//comparison for unlimited numbers
const max = Math.max(dim, kim, mim);
console.log("the greater is :", max)    */

//------------------  problem 2
/*
const height = [23, 44, 55, 100, 87, 90];
function getMax(numbers) {
    let max = numbers[0];
    for(const number of numbers) {
        if(number>max) {
            max = number;
        }
    }
    return max;
}
const max = getMax(height);
console.log("max value is : " + max);   */

//------------------  problem 3
/*
const height = [23, 44, 55, 100, 87, 90];
function getMin(height) {
    let min = height[0];
    for(const num of height) {
        if(num < min) {
            num = min;
        }
    }
    return min;
}
const min = getMin(height);
console.log("the minimum height: " + min);      */

//------------------  problem 4
/*
function woodQuantity(chairQuantity, tableQuantity, bedQuantity) {
    const woodPerChair = 20;
    const woodPerTable = 30;
    const woodPerBed = 40;
    const totalWood = (chairQuantity * woodPerChair) + (tableQuantity * woodPerTable) + (bedQuantity * woodPerBed);
    return totalWood;
}
const wood = woodQuantity(0, 0, 1);
console.log(wood);      */

//------------------  problem 5
/*
const prices = [
    {name: "apple", price: 1.5},
    {name: "banana", price: 0.75},
    {name: "orange", price: 1.25},
    {name: "grape", price: 1.75}
]
function cheapestPrice(fruits) {
    let cheap = fruits[0];
    for(const fruit of fruits) {
        if(fruit.price < cheap.price) {
            cheap = fruit;
        }
    }
    return cheap;
}
const cheap = cheapestPrice(prices);
console.log("cheap price: ", cheap);
//maximum price
function maximum(fruits) {
    let min = fruits[0];
    for(const fruit of fruits) {
        if(fruit.price > min.price) {
            min = fruit;
        }
    }
    return min;
}
const max = maximum(prices);
console.log("maximum price: ", max)     */

//------------------  problem 6
/*
const prices = [
    {name: "apple", price: 1.5},
    {name: "banana", price: 0.75},
    {name: "orange", price: 1.25},
    {name: "grape", price: 1.75}
]
function getTotal(prices) {
    let total = 0;
    for(const price of prices) {
        total += price.price;
    }
    return total;
}
const total = getTotal(prices);
console.log("Total Cost is: ", total, "$");     */

//------------------  problem 7
/*
const prices = [
    {name: "apple", price: 1.5, quantity: 8},
    {name: "banana", price: 0.75, quantity: 2},
    {name: "apple", price: 1.5, quantity: 12},
    {name: "orange", price: 1.25, quantity: 4},
    {name: "grape", price: 1.7, quantity: 5}
]
function getTotal(prices) {
    let total = 0;
    for(const item of prices) {
        total += item.price * item.quantity;
    }
    return total;
}
const total = getTotal(prices);
console.log("Total with quantity: " + total + " $");       */

//------------------  problem 8
/*
function discountedPrice(quantity) {
    if(quantity <= 100) {
        const total = "no discount" + quantity*100
        return total + " $";
    }
    else if(quantity <= 200) {
        const total = "10% discount" + quantity*90;
        return total + " $";
    }
    else {
        const total = "30% discount" + quantity*70;
        return total + " $";
    }
}
console.log(discountedPrice(150)); 
//advanced
/*
*first 100 --> 100
*101 to 200 --> 90
*above200 --> 70
*/
/*
function layeredDiscount(amount) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if(amount <= 100) {
        return "no discount " + amount * first100Price + " $";
    }
    else if(amount <= 200) {
        const first100 = 100*first100Price;
        const remainingAmount = amount - 100;
        const second100 = remainingAmount*second100Price;
        return "10% discount " + first100 + second100 + " $";
    }
    else {
        const first100 = 100*first100Price;
        const second100 = 100*second100Price;
        const remainingAmount = amount - 200;
        const above200 = remainingAmount*above200Price;
        return "30% discount " + first100 + second100 + above200 + " $";
    }
}
console.log(layeredDiscount(100));      */

//------------------  problem 9
/*
function add(num1, num2) {
    return num1 + num2;
}
function subtract(num1, num2) {
    return num1 - num2;
}
function multiply(num1, num2) {
    return num1 * num2;
}
function divide(num1, num2) {
    return num1 / num2;
}
function calculate(a, b, operation) {
    if(operation === 'add') {
        const result = add(a, b);
        return result;
    }
    else if(operation === 'subtract') {
        const result = subtract(a, b);
        return result;
    }
    else if(operation === 'multiply') {
        const result = multiply(a, b);
        return result;
    }
    else if(operation === 'divide') {
        const result = divide(a, b);
        return result;
    }
    else {
        return "Invalid operation! Only 'add', 'subtract, 'multiply' and 'divide' are supported";
    }
}
const result = calculate(5, 7, 'subtract');
console.log(result);
console.log(calculate(5, 7, 'divide'))
console.log(calculate(5, 7, 'add'))
console.log(calculate(5, 7, 'multiply'))    */

//------------------  problem 10
function multiply(a, b) {
    if(typeof a !== 'number' && typeof b !== 'number') {
        return "Invalid input! Please provide a number";
    }
    return a * b;
}
const number = multiply(2);
console.log(number)