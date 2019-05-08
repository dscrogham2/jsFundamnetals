//Calling Fuctions

functions hi() {
    console.log('Hi')
};

//Doesn't work till adding
hi(); //adding paraentice is the start button



/*

CHallenge:
Create a function that when invoked, list out numbers 1-10
 */

function hi() {
    for (i = 0; i <= 10; i++) {
        console.log(i)
    }
}

hi();



/*
Challenge: Given the array, create a function that lists out the vakues individually.
 */

function hi() {
    let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
    for (cat of catArray) {
        console.log(cat)
    }
}

hi();


//