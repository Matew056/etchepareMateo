const url = 'https://rickandmortyapi.com/api/character'

const characterBox = document.getElementById('characterBox')
const userInput = document.getElementById('userInput')



function main () {
    console.log("main function")
    
    fetchCharacters();
};

async function fetchCharacters (){
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
    }
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
