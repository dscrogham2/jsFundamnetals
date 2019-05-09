//Returns

//unlike console.log just shows; returns let interract





function capitalizeName(name) {
    let capName = '';
    for (let l in name) {
        if (l == 0) {
            capName += name[l].toUpperCase();
        } else {
            capName += name[l].toLowerCase();
        }
    }
    console.log(capName)
    return capName
}

const myName = capitalizeName('darrell')

console.log(myName + 'how are you doing?')


/*
Challlenge:
Make a tip calculator using a function
Have it RETURN the value
Capture that returned value in a VARIABLE
Print the variable
*/

/*function calculator(tip) {
    let tip = i;
    for (let i in tip) {
        if (i = 0 ) {
        tipCalculator += percentTip();
        }
        console.log(tip)
        return tip
    }
    */
//First try

function tipCalc(bill) {
    let tip = (bill * 0.2)
    return tip.toFixed(2)
}
let totalTip = tipCalc(19.88);
console.log(totalTip);


function tipCalc(bill) {
    let tip = (bill * 0.2);
    return tip.toFixed(2);
}
let bill = 19.88
let totalTip = tipCalc(bill);
//console.log(totalTip);
console.log(`If my bill is ${bill}, my tip will be ${totalTip}`)