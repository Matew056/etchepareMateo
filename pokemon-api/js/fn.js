const url = "https://pokeapi.co/api/v2/pokemon";

const button = document.getElementById("button")

let characters = []
// stats
/*
conseguir attack stats de 2 personajes y ver quien gana
 */ 
// RETO CONSEGUIRLO EN 2 LLAMADAS A LA API
function getRandomCharacters () {
    for (let i = 0; i < 6; i++) {
        getRandomCharacter()
    }
    generateUI(characters)
}
async function getRandomCharacter () {
    if (characters.length === 6) {
        return 0;
    }
    let randomNumber = Math.round(Math.random() * (1022 - 1) + 1)
    if (randomNumber > 1022) {
        getRandomCharacter()
        console.log("recursion usada ")
        return 1;
    }
    console.log(randomNumber);
    //
    const response = await fetch(`${url}/${randomNumber}`);
    let character = await response.json();
    console.log(character.stats);
    characters.push(character);

    generateUI(characters)
}

function generateUI () {
    let img = []
    for(let i = 0; i < 6; i++) {
        img[i] = document.createElement('img');
        img[i].src = characters[i].sprites.front_default
        img[i].alt = characters[i].forms.name
    }

    let mainDiv = document.getElementById("characters")

    let p = document.createElement('p')
    let text = document.createTextNode('VS')
    p.appendChild(text)

    for(let i = 0; i < 3; i++) {
        mainDiv.appendChild(img[i])
    }
    mainDiv.appendChild(p)
    for(let i = 3; i < 6; i++) {
        mainDiv.appendChild(img[i])
    }

    console.log('UI generated')
}

//  
//button.addEventListener("click", compareAttacks())

/*
stats[0]=hp
stats[1]=attack
stats[2]=defense
*/

function compareAttacks () {
    console.log(`ataque de ${characters[0].forms[0].name} es  ${characters[0].stats[2].base_stat}`)
    console.log(`defensa de ${characters[1].forms[0].name} es ${characters[1].stats[1].base_stat}`)
    if (characters[0].stats[2].base_stat<characters[1].stats[1].base_stat) {
        console.log(`la defensa de ${characters[0].forms[0].name} es menor al ataque de ${characters[1].forms[0].name}`)
    } else if (characters[0].stats[2].base_stat>characters[1].stats[1].base_stat) {
        console.log(`la defensa de ${characters[0].forms[0].name} es mayor al ataque de de ${characters[1].forms[0].name}`)
    } else {
        console.log(`el ataque es igual a la defensa`)
    }
}


getRandomCharacters();
//getCharacter()