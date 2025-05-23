
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