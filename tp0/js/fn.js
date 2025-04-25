const url = 'https://rickandmortyapi.com/api/character'

const characterBox = document.getElementById('characterBox')
const userInput = document.getElementById('userInput')

let characters = [];

function main () {
    console.log("main function")
    fetchCharacters();
};

async function fetchCharacters (){
    clearUi();
    console.clear();
    console.log(userInput)
    for(i = 1; i <= userInput.value; i++) {
        let tempCharacter
        try {
            console.log("fetching character " + i);
            response = await fetch(`${url}/${i}`);
            tempCharacter = await response.json();
            console.log(tempCharacter);
        } catch (error) {
            console.error("error: " + error);
            console.log("Error: " + i);
            continue;
        }
        addElement(tempCharacter.name, tempCharacter.image)
        characters.push(tempCharacter)
    }
    countStatistics();
}

function addElement(name, image) {
    //TODO:
    //agregar auto borrado de cartas al apretar de nuevo el boton
    let characterCard = document.createElement('div')
    characterCard.id = 'characterCard'

    let characterName = document.createElement('h2')
    let characterImage = document.createElement('img')
    characterName.innerText = name
    characterImage.src = image

    characterCard.appendChild(characterName)
    characterCard.appendChild(characterImage)
    characterBox.appendChild(characterCard)
}

function clearUi () {
    characterBox.innerHTML = "";
}

function countStatistics () {
    //DONE cantidad de pjs vivos
    //DONE cuantas especies diferentes hay
    // cual es la especie mas comun
    // el pj que mas veces aparece
    // mostrar su nombre imagen y numero de episodios
    // crear lista de pj masculinos y pj femeninos
    // contar pj masculinos y pj femeninos
    console.log("initializing countStatistics")
    let alive = 0 
    for (let i = 0; i < characters.length; i++) {
        if (characters[i].status == "Alive") {
            alive++;
        }
    }
    console.log(`alive characters: ${alive}`)

    let distinctSpecies = [];
    //semi hardcodeo el primer elemento
    distinctSpecies.push({species:characters[0].species,count:1})
    console.log(JSON.stringify(distinctSpecies))
    // se inicia en 1 a proposito
    for (let i = 1; i < characters.length; i++) {
        let found = false;
        for (let j = 0; j < distinctSpecies.length; j++) {
            if (JSON.stringify(distinctSpecies[j].species) == JSON.stringify(characters[i].species)) {
                console.log(`match found at iteration ${i}, name ${characters[i].species}`)
                distinctSpecies[j].count += 1;
                console.log(distinctSpecies[j].count)
                found = true;
                break;
            } else {
                /*
                console.log(`creating new species at iteration ${i}, name ${characters[i].species}`)
                distinctSpecies.push({species: characters[i].species,count:1})
                break;
                */
                found = false;
            }
            
        }
        if (!found) {
            console.log(`creating new species at iteration ${i}, name ${characters[i].species}`)
            distinctSpecies.push({species: characters[i].species,count:1})
        }
    }
    console.log(JSON.stringify(distinctSpecies))
}

//TODO:
// recibir una ubicacion y mostrar personajes de esa ubicacion