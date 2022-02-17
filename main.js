//The following are code snippets with errors and code that shows how the
// snippets were fixed to work
//Rushay Hays 2/16/2022
//NSS

//C is for Cookie
//Original Code

// const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
// let y = 1

// for (let x = 1; y < cookies.length; x++) {
//     const currentCookie = cookies[y]
//     console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
// }

//This is fixed by removing the unnecessary "y" variable and just using "x"
const cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]

for (let x = 1; x < cookies.length; x++) {
    const currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

//--------------------------------------------------------------------------------------------------------//

//Conjunction Function
//Original Code

// const conjunction = function (firstWord, secondWord) {
//     const conjoinedWord = `${firstWord} ${secondWord}`
// }

// conjunction("Master", "Card")
// console.log(conjoinedWord)

//In this code "conjoined word" is defined in the function and cannot be accessed outside of it
//Also the function does not return anything
function conjunction (firstWord, secondWord) {
    const conjoinedWord = `${firstWord} ${secondWord}`
    return conjoinedWord;
}

const conjWord = conjunction("Master", "Card")
console.log(conjWord)

//---------------------------------------------------------------------------------------------------------//

//Mod Squad

// {
//     const modSquad = {
//         "members": ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"]
//         "series": {
//             "start": "1968",
//             "end": "1973"
//         }
//     }

//     const HTMLRepresentation = `<h1>The Mod Squad</h1>`

//     modSquad.members.forEach(member => {
//         const HTMLRepresentation += `<div>${member}</div>`
//     })
// }

// console.log(HTMLRepresentation)
//To fix this HTMLrepresentation needed to be a "let" variable instead of a "const" variable
//and in the "for each" loop the variable declaration in front of HTMLrepresentation had to
//be removed. Also the excessive quotes had to be taken out of the object.


    const modSquad = {
        members: ["Pete Cochran", "Linc Hayes", "Julie Barnes", "Capt. Adam Greer", "Chief Barney Metcalf"],
        series: {
            start: "1968",
            end: "1973"
        }
    }

let HTMLRepresentation = `<h1>The Mod Squad</h1>`;

    modSquad.members.forEach(member => {
        HTMLRepresentation += `<div>${member}</div>`;
    
    })



console.log(HTMLRepresentation);

//---------------------------------------------------------------------------------------//

//Simon Says

// const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

// for (const location of locations) {

//     if (location[0] > 2) {
//         const invalidLocation = true
//     }

//     if (invalidLocation) {
//         console.log("This location is invalid")
//     }
// }

//changes the method of iteration, nested the second"if" statement within
// the first so that the second statement can access "invalidLocation"

const locations = [[1,1], [1,2], [1,3], [2,1], [2,2], [2,3]]

locations.forEach(location => {

    if (location[0] > 2) {
        const invalidLocation = true
        if (invalidLocation) {
            console.log("This location is invalid")
        }
    } else console.log("valid location")

})

//---------------------------------------------------------------------------------------//

//Lambda llama
//Put the word return in front of the internal function to return it. Also have
//the internal function needs something to return

function llamaNamer() {
    const possibleNames = ["Larry", "Leon", "Leona", "Les", "Laura", "Lemony", "Lars", "Lekisha"]
    const randomizer = Math.floor(Math.random() * 7)

   return function namer() {
        const suffix = " the Llama"
        const name = possibleNames[randomizer]
        return name + suffix
    }


}

const nameMaker = llamaNamer()
console.log(nameMaker())

