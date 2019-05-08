//Parameters


function hi('parameters1', 'parameters2') {
    console.log('parameters1', 'parameters2')
    console.log('Hi')


}

function pet(animal) {
    console.log(`I have a ${animal} for a pet.`);
}

pet('cat');
pet('dog'; pet('turtle'); pet('chinchilla'); pet('rock');

        // ${`anumal`} = string exctraption


        /*Challenge:
        Write function  thst tskes twp parameters:
        one parameter is for name
        the other parameter is for a last name
        Have them hem come together in a variable inside the funxtion.
        console.log 'Hello, my namr is 'Darrell Scrogham'
        Call your funcrion
        */


        function myName(fName lName) {
            let fullName = fName + '' + lName;
            console.log(`Hello, my name is ${fullName}.`);
        }

        myName('Darrell', 'Scrogham');