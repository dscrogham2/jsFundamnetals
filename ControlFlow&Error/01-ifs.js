// IF



let isOn = true;

if (isOn == true) {
    console.log('The light id on!')
};

if (isOn) {
    console.log('The light is on, yay!')
};

//IF SYNTAX

//if (condition {

//console.log('words')
//}


if (isOn) {
    console.log('The light is on, yay!')
};

let isOff = false;
('The light is off') //Is false output

weather = 71;

if (weather < 70) {
    console.log('Wear a jacket') //
};

//IF ELSE

Weather = 75;

if (weather < 70) {
    console.log('Wear a jacket')
} else {
    console.log('No jacket necessary!') //output no jacket necessary
};

//IF Else Syntax
//if (condition) {
// logic
//console.log(logic)
//} else {
// console.log   
//}


//Challenge
let myName = true;

if (myName == true) {
    console.log('Darrell')
};

let name = 'Darrell'

if (name == 'Darrell') {
    console.log('Hello, my name is Darrell')
} else {
    console.log('Hello, what is your name?')
}



// Challenge


let name = "darrell"

if (name == 'darrell') {
    console.log('Capitalize the first letter of name')
} else {
    console.log('darrell')
}
let name = 'name'
if (name != 'name') {
    console.log(name)
}



let name = 'darrell';

if (name[0] == name[0].toUpperCase()) {
    firstLetter = name[0] + name.slice(1).toLowerCase()
    console.log(firstLetter);
} else {
    otherLetters = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()
    console.log(otherLetter);
}