//------------------    Problem 1
/*
*per ticket = 120tk
*everyday 1 clark = 500
*8 staff , per staff = 50tk
*/
/*
const perTicket = 120;
const clark = 500;
const staff = 50;
function calculateMoney(ticket) {
    if(ticket < 0 || typeof ticket !== 'number') {
        return "Invalid input. Number of tickets should be positive and a number.";
    }
    const forTicket = ticket*perTicket;
    const forStaff = staff*8;
    const moneyGone = clark + forStaff;
    const total = forTicket - moneyGone;
    return total;
}
console.log(calculateMoney(93));
console.log(calculateMoney('93'));      */

//------------------    Problem 2
/*
function checkName(name) {
    if(typeof name!=='string') {
        return 'Invalid Name'
    }
    if(name[name.length - 1] === 'a' || name.slice(-1) === 'y' || name[name.length - 1] === 'i' || name[name.length - 1] === 'e' || name[name.length - 1] === 'o' || name[name.length -1] === 'u' || name[name.length -1] === 'w') {
        return 'Good Name'
    }
    return 'Bad Name'
}
console.log(checkName('Nur'));
console.log(checkName('Nury'));
console.log(checkName('NURY'));
console.log(checkName(12));     */
//------ Otherwise
/*
function checkName(name) {
    // let lastLettter = name[name.length - 1];
    if(typeof name !== 'string') {
        return 'Invalid Name'
    }
    let lastLettter = name.slice(-1).toLowerCase();
    let letterArray = ['a', 'y', 'i', 'o', 'w', 'e', 'u', ]
    for(const letter of letterArray) {
        if(lastLettter === letter) {
            return 'Good Name';
        }
    }
    return 'Bad Name';
}
console.log(checkName('Nur'));
console.log(checkName('Nury'));
console.log(checkName('NURY'));
console.log(checkName(12));     */
//---------- Otherwise
/*
function checkName(name) {
    if(typeof name !== 'string') {
        return 'Invalid Name'
    }
    let lastLettter = name.slice(-1).toLowerCase();
    let letterArray = ['a', 'y', 'i', 'o', 'w', 'e', 'u', ]
    let result = letterArray.includes(lastLettter);
    return result ? 'Good Name' : 'Bad Name';
}
console.log(checkName('Nur'));
console.log(checkName('Nury'));
console.log(checkName('NURY'));
console.log(checkName(12));     */

//------------------    Problem 3
/*
function deleteInvalids(array) {
    if(!Array.isArray(array)) {         //Or Array.isArray(array) === false
        return 'Invalid input! Please provide an array.'
    }
    let newArray = [];
    for(const item of array) {
        if(typeof item === 'number' && isNaN(item) === false) {
            newArray.push(item);
        }
    }
    return newArray
}
console.log(deleteInvalids([1, 2, 'a', 'b', 3, 4, 'c', 5, [1, 3]]));
console.log(deleteInvalids(['1', {num: 2}, NaN]));
console.log(deleteInvalids({num: [1, 2, 3]}));      */

//--------------------     Problem 4
/*
function password(details) {
    if (details.name === undefined || details.birthYear === undefined || details.siteName === undefined || details.birthYear.toString().length !== 4) {
        return 'Invalid Input!';
    }
    const capitalize = details.siteName[0].toUpperCase() + details.siteName.slice(1);
    const password = `${capitalize}#${details.name}@${details.birthYear}`;
    return password;

}
console.log(password({ name: 'kolimullah', birthYear: 1999, siteName: 'google' }))
console.log(password({ name: 'kolimullah', birthYear: 199, siteName: 'google' }))
console.log(password({ name: 'kolimullah', birthYear: 1999 }));     */

//----------------   Problem 5
function monthlySavings(array, number) {
    if (!Array.isArray(array) || typeof number !== 'number') {
        return 'Invalid!'
    }
    let sum = 0;
    for (const i of array) {
        if (i >= 3000) {
            const tax = i * 0.2;
            const remainingMoney = i - tax;
            sum += remainingMoney;
        }
        else {
            sum += i;
        }
    }
    const savings = sum - number;
    if (savings >= 0) {
        return 'Total saving: ' +  savings + ' tk';
    }
    else {
        return 'Earn More!';
    }
}
console.log(monthlySavings([1000, 2000, 2500], 5000));
console.log(monthlySavings([1000, 2000, 2500], '5000'));