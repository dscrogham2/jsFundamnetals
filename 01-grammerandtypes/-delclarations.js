// Variables

//Varibales are containers for storing data vaules (words, sentences, numbers, objects, etc,);

var a = 1;
var b = 2;
console.log(a + b);



/*
1. a varibale  must begin with a letter, underscore, or a dollars sign.
2. numbers may follow the above charactera, but cannit come first.
3. Javascript is case sensitive-'hello' and 'Hello' are different variables
4. variables must be indentified with unique names. 

*/

/* whatever is on the right is decl.(var a) = (10) is init.*/


var x;
console.log('Declaration 1:', x)

x = 10;
console.log('Intializattion 2:', x)


var y = 'Hello';
console.log('Both: ', x.y)


// Var, let, and Const;

//Var = 'old keyword';
//Let = 'new' keyword';
//const = also ' new' keyword; declares unchangeable varaiables


var today = 'great!';
const elevenfifty = 'wonderful';
console.log(today, elevenfifty);


today = 'lovely';
console.log(today, elevenfifty);


elevenfifty = 'Super';
console.log(today, elevenfifty);