// OLD FILE, DELETE AS SOON AS ALL THE CODE IS ON OTHER FILES

const url = "https://pokeapi.co/api/v2/pokemon";

const button = document.getElementById("button")

let characters = []

function getCharacters () {
    for (let i = 0; i < 6; i++) {
        characters.push(getRandomCharacter())
    }
    generateCharactersUI(characters)
}

function generateCharactersUI () {
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

    // generar botones abajo de todo esto

    generateDiceButtons()

    console.log('UI generated')
}

function generateDiceButtons () {

    let buttonDiv = document.getElementById("dice-buttons");
    buttonDiv.innerHTML = ""

    let diceButton1 = document.createElement("button")
    diceButton1.innerHTML = "boton equipo 1"

    let diceButton2 = document.createElement("button")
    diceButton2.innerHTML = "boton equipo 2"

    buttonDiv.appendChild(diceButton1)
    buttonDiv.appendChild(diceButton2)

}

//  
//button.addEventListener("click", compareAttacks())

/*
stats[0]=hp
stats[1]=attack
stats[2]=defense
*/

function calculateTeamStats (team) {
    let stats = []
    if (team.length < 2) {
        console.error("WARNING: the team has less than 2 characters")
    }
    for (let i = 0; i < team.length; i++) {
        for (let j = 0; j < team.length; j++) {
        stats[i] += team[j]stats[i].base_stat
        }
    }
    return stats;
}

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

getCharacters();
generateUI(characters);
//getCharacter()