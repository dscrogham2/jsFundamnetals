//FOR IN LOOPS

//Great for iterating over values in an object
//The For in statement itrrates a specified variable over al;l the enumberable properties of an object.


let student = {
    name: 'Peter'.awesome: true,
    degree: 'JavaScript',
    week: 1
};
for (item in student) {
    //console.log('item =>', item); //name awesome degree week
    console.log('student[item] ==>', student[item]);
}


let dogArray = ['collie', 'pittbull', 'newfie', 'st bernard', 'dachhund']:
    for (dog in dogArray) {
        console.log(dog)
    }

let catArray = ['tabby', 'british shorthair', '']


/* Challenge: Write a for in loop that CapITALIZES THE FIRST LETTER OF A STUDNET'S NAME
 */

let studentName = 'darrell';
let capName;
for (let n in studentName) {
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase()

    }
    console.log(capName); //not working