const url = "https://pokeapi.co/api/v2/pokemon";

// hacer un adapter
/*
console.log(`ataque de ${characters[0].forms[0].name} es  ${characters[0].stats[2].base_stat}`)
console.log(`defensa de ${characters[1].forms[0].name} es ${characters[1].stats[1].base_stat}`)

stats[0]=hp
stats[1]=attack
stats[2]=defense

*/ 
async function getPokemons (times) {
    for (let i = 0; i < times; i++) {
        let characters = []
        let usedIds = []

        let randomNumber = Math.round(Math.random() * (1022 - 1) + 1)

        if (randomNumber > 1022) {
            i -= 1
            continue;
        }
        if (usedIds.includes(randomNumber)) {
            i -= 1
            continue;
        }

        try {
            let response = await fetch(`${url}/${randomNumber}`);
            let character = await response.json();
        } catch {
            console.error("error fetching 1 pokemon")
            i -= 1
            continue;
        }
        usedIds.push(randomNumber)
        characters.push[character]
    }
    return characters
}