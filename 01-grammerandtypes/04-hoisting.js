//Hoisting


console.log(scissors);
scissora = 'blue'; //gives you an error

console.log(scissors);
var scissors

//JS reads code twice. First left-hand side of variables and functions.  The second time, it reads the right hand side and assigns values and expressions.