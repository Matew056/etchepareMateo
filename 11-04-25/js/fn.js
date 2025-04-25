const url = "https://pokeapi.co/api/v2/pokemon";

const button = document.getElementById("button")

async function getCharacter() {
    for(let i = 1; i < 2; i++) {
        const response = await fetch(`${url}/${i}`);
        character = await response.json();
        console.log(`${url}/${i}`)
        console.log(character);
    }
}

// stats
/*
conseguir attack stats de 2 personajes y ver quien gana
 */ 
// RETO CONSEGUIRLO EN 2 LLAMADAS A LA API
async function getRandomCharacters () {
    let characters = []
    for (let i = 0; i < 2; i++) {
        // random number
        let randomNumber = Math.round(Math.random() * (1302 - 1) + 1)
        if (randomNumber > 1022) {randomNumber = 1023}
        console.log(randomNumber);
        ///
        const response = await fetch(`${url}/${randomNumber}`);
        let character = await response.json();
        console.log(character.stats);
        characters.push(character);
    }
    generateUI(characters)

}

/*
stats[0]=hp
stats[1]=attack
stats[2]=defense
*/

function generateUI (characters) {
    let img1 = document.createElement('img');
    img1.src = characters[0].sprites.front_default
    img1.alt = characters[0].forms.name

    let img2 = document.createElement('img');
    img2.src = characters[1].sprites.front_default
    img2.alt = characters[1].forms.name

    let mainDiv = document.getElementById("characters")

    let p = document.createElement('p')
    let text = document.createTextNode('VS')
    p.appendChild(text)

    mainDiv.appendChild(img1)
    mainDiv.appendChild(p)
    mainDiv.appendChild(img2)

    console.log('UI generated')
}

//
button.addEventListener("click", () => {

})

function compareAttacks (characters) {
    if (characters[0].stats[2]<characters[1].stats[1]) {
        console.log(`ataque de ${characters[0].forms.name} es mayor que la defensa de ${characters[1].forms.name}`)
        
    } else if (characters[0].stats[2]>characters[1].stats[1]) {
        console.log(`ataque de ${characters[1].forms.name} es mayor a la defensa de ${characters[0].forms.name}`)
    } else {
        console.log(`el ataque es igual a la defensa`)
    }

}


getRandomCharacters();
//getCharacter()