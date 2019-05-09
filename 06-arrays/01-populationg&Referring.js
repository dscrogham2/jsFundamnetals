// Arrays

// Arrays are an object. Thay are a container that can hold multiple datatypes.
//Has [] brackets
//Great for lists


let students = ['Sebastian', 'Eric', 'Micheal', 16, 74, false, ['Nic', 'Charles', 'Etah']]

//console.log(typeof students)
//console.log(students instanceof Array);
console.log(students[1]);
//Arrays start at 0
//to get output of array in an array console.log([6][1]);


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];
for (f in food) {
    console.log(food[f]); //use square brackets to find items in array
    console.log(f);
}
//How to add arrray without hard coding

let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza') //appends pizza to end of array ONLY at the END

for (f in food) {
    console.log(food[f]);
    // console.log(f);

}




let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];

food.push('Pizza') //appends pizza to end of array
food.splice(1, 1, 'Bananas') //Splice to delete an item from array without hard coding
food.splice(2, 0, 'Sweet Potato Pie') //know what 3 agruements are for splice 1st the beg. of splice, 2nd # of items to delete?, 3rd '', is what you are adding in it's place. 
food.pop(); //Removes the last item in the array
food.shift(); //Removes the item in array
food.unshift('Muffin', 'Apple') //Adds to beginning of array 

for (f in food) {
    console.log(food[f]);
    // console.log(f);

}