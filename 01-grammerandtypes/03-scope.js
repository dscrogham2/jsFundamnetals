//Scope
//JavaScriot has function scope
//Score determines the accessibilty of these variables
//Variables define inside a function are NOT accessible from outside the function


//Local and Golbal Scope


let x = 12

function scope() {
    let x = 33
    console.log(x);
}
scope();
console.log(x);


let x = 12

function coffee() {
    x = 33
    console.log(x);

}
coffee()
console.log(x);


// Var vs let

var x = 12

function scope() {
    var x = 33
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);




function scope() {
    let x = 33 //changed var to let var is bleeds and let sticks
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()
console.log(x);

//Const


var x = 12

function scope() {
    const x = 33
    if (true) {
        var x = 45;
        console.log(x);
    }
    console.log(x);
}

scope()