//Ternaries

//Ternaries are a shorthand version of an if else statement

let x = 6

if (x > 0) {
    console.log('yes');

} else {
    console.log('no')
};

//ternary 

(x > 0) ? console.log('yes'): console.log('no');

//conditional statement 
if (x == 0) {
    console.log('Hello')
} else if (z < 0) {

} else {
    console.log('goodbye')
}

//ternary  operator
let x = 6


(x == 0) ? console.log('Hello'): (x < 0) ? console.log('Hi') : console.log('Goodbye')


/* Callenge:
Write a ternary that does the same thing as the age challenge

Age challenge (if else);

var age = 30;

of  (age >= 25) {
    console.log("Yay! You cab rent a car!");
    }else if (age >=21) {
        console.log("Yay! Ypu can drink!");
            }else if (age >=18) {
                console.log("Yay! You can vote!");
                            }else {
                                console.log("Sorry, you're too ypung to do anything fun.");
                            }

                            */

let x = 30;


(x > 25) ? console.log('Yay! You cab rent a car!'): (x >= 21) ? console.log('Yay! Ypu can drink!') : (x >= 18) ? console.log('Yay! You can vote!') : console.log('Sorry, you\'
        re too young to do anything fun.
        ');



        let yep = -8;

        (yep < 0 && yep > -10) ? console.log('worked') : (yep > 0) ? console.log('worked!') : console.log('didn\')