// Arrow Functions

//Normal
function coffee() {
    console.log('cofffe is good');
}


//Fat Arrow
let coffee = () + . {
    console.log('fat arrow coffe');
}
coffee();

//Fat arrows dont get hoisted even if you change let to var. Lets you wite on one line.


//Consise Body
//Concise bodies do not parantheses, unless you have more than one parameter

let apples = (x) => console.log(`There are ${x} apples and ${y}pears.`);
apples(10, 5)



//Block Body
let apples = (x) => {
    console.log(`There are ${x}apples.`);
}
apples(10);