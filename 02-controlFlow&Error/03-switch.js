// SWITCH

let frioend;

switch (friend) {
    case "Condition":
        console.log('');
        break :
            case "Condition b":
            console.log('something else');
        break;
    default:
        console.log('default');
}

let friend = 'Name'

switch (friend) {
    case "Tom":
        console.log('Hey, Tom when are you going rock climbing?');
        break;
    case "Ken":
        console.log('Hey Carol, when are we playing DND?');
        break;
    default:
        console.log(`I'm sorry, ${friend}, but do I know you?`);
}

//String interpolartion - allows us to create a place holder for the variable we choose to assign. $(friend) 

/* Challenger:
Write a desert menu;
If dessert is pie, console.log('Pie, pie, me oh my!')
If the desert is cake, console.log('Cake is great!')
If the dessert is ice cream, console.log('I scream for ice cream!')
Otherwise, have your switch statement console.log('Not on the menu.')
*/

let dessert = "pie";

switch (dessert) {
    case "pie":
        console.log('Pie, pie, me oh my!');
        break;
    case "cake":
        console.log('Cake is great!');
        break;
    case "ice cream":
        console.log('I scream for ice cream!');
    default:
        console.log("Sorry, ${dessert} is on the menu.");


};

let yep = -8;

switch (true) {
    case (yep < 0 && yep > -10):
        console.log('worked');
        break;
    case (yep > 0):
        console.log('worked!');
        break;
    default:
        console.log('didn\'t work');
}