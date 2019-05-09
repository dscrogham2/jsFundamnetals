//FOR OF LOOPS

// The for ... of statement creates aloop iterable over iterable objects, meaning it can numberically look over these items


let student = {
    name: 'Peter',
    awesome: true,
    degree: 'JavaScript',
    weeek: 1
};
for (item of student) {
    console.log(item);
}

//Student is not iterable

let catArray = ['tabby', 'british shorthair', 'burmese', 'maine coon', 'rag doll'];
for (cat of catArray) {
    console.log(cat)
}