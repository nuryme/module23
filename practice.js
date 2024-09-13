//----------  problem 1
/*
const heights2 = [167, 190, 120, 165, 137];
function min(heights) {
    let minHeight = heights[0];
    for(const height of heights) {
        if(height < minHeight) {
            minHeight = height;
        }
    }
    return minHeight;
}
console.log(min(heights2));     */

//----------  problem 2
/*
const heights2 = ['rahim', 'robin', 'rafi', 'ron', 'rashed'];
function findShortestName(names) {
    let shortestName = names[0];
    for(const name of names) {
        if(name.length < shortestName.length) {
            shortestName = name;
        }
    }
    return shortestName;
}
console.log(findShortestName(heights2));    */

//----------  problem 3
/*
const laptop = 35000;
const tablet = 15000;
const mobile = 20000;
function totalBudget(a, b, c) {
    let total = 0;
    total += a + b + c;
    return 'total budget: ' + total + 'tk';
}
console.log(totalBudget(laptop, tablet, mobile));   */

//----------  problem 4
/*
const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(prices) {
    let sum = 0;
    for(const item of prices) {
        sum += item.price;
    }
    return 'average price: '+ (sum / prices.length).toFixed(2) + ' tk';
}
console.log(findAveragePhonePrice(phones));     */

//--------------  Problem 5
const employees = [
    { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
    { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
    { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
    { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
];
function currentSalary(salary) {
    let sum = 0;
    for(const item of salary){
        const employee = item.experience*item.increment;
        const employeeSalary = employee + item.starting
        sum += employeeSalary;
    }
    return 'current salary: '+ sum + ' tk';
}
const current = currentSalary(employees);
console.log(current);