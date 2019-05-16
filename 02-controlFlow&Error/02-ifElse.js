// Elde IF

// if (condition) {
// logic a    
// } else if (different condition) {
// logic b    
// } else {
//   logic c 
// }



/*
Challenge
Set a variable age and give it an age of ypur choice
set an else if statement that convey the following:
If the age is 17 or < console.log 'Sorry, too ypung to do anything. '
If age is at least 18 console.log ' Yay! You can vote!'
If age ia at least 21 console.log 'Yay! You can drink!'
If age is at least 25, console.log 'Yay! You can rent a car!'


*/

/*let isOn = true;

if (isOn == true) {
    console.log('The light id on!')
};

if (isOn) {
    console.log('The light is on, yay!')
};
*/


//my first thoughts
age = 30;

if (age <= 17) {
    console.log('Sorry, you\'re too young to do anything.')
};
if (age == 18) {
    console.log(' Yay! You can vote!')
};
if (age == 21) {
    console.log('Yay! You can drink!')
};
if (age >= 25) {
    console.log('Yay! You can rent a car!')

};

let age + 20;


let age = 30;

if (age >= 25) {
    console.log('Yay! You can rent a car!')
} else if (age >= 21) {
    console.log('Yay! You can drink!')
} else if (age >= 18) {
    console.log(' Yay! You can vote!')
} else {
    console.log('Sorry, you\'re too young to do anything.')
}