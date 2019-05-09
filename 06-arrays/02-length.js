//Length and others


let long = [1, 2, 3, 4, 5, 6, 7, 8, 9, 1]
console.log(long.length)


let color = ['blue', 'green', 'yellow', ]
console.log(colors.lenght) //#
console.log(colors.toString())


console.log(typeof colors) //object
console.log(typeof colors.toString()) //sting
//to check if array? console.log()


/*

Challenge:
1st check if you are working with an array
then flip the values within the arrray (what was in index 4 is now 0, 3 to 1, etc.)
Using a method only, print the values of the newly arranged array 
 */



let arr = [1, 2, 3, 4, 5]
if (arr instanceof Array == true) //to check if array; Caan't use 'type of' because it will return obeject
    arr.reverse(arr)
//console.log(arr.toString())
arr.forEach(item => {
    console.log(item)
}) //use this if not turning into string