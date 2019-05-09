//Objects .keys() and Objects.values()

//Objext.keys()is a methos that eturns an array of a gie=ven object's pwn names.
//Objrct.values() is a metid that returns an array of a given object;s own enumerable property vaules.


//example

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    }
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

//console.log(Object.keys(spaceJam.toonSquad));//output squad and title
//console.log(Object.keys(spaceJam.toonSquad.duck));//
//console.log(Object.keys(spaceJam.toonSquad).toString());
console.log(Object.values(spaceJam.toonSquad));


//Square Bracket Notation


let garden = {
    vegetable: 'zucchini',
    flower: 'sun flowers',
    fruit: 'apple',
    water: true,
    sun: true,
    size: 10
};

//console.log(gadren.vegetable)

//let x = 'vegetable';
//console.log(garden.x, garden[x]);



//Dot Notation(assumes that it's there) vs. square bracket notation looks before 


//let baking = {};
//   baking['zucchini'] = 'better make some bread!';//creating a key
//console.log(baking[garden['vegetable']])


let key = 'water';
Object.key(garden).forEach(g => { //water and key = vegetables
    // console.log(g)
    if (key == g) {
        console.log(garden[key]);
    }
})