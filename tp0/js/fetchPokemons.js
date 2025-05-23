const url = "https://pokeapi.co/api/v2/pokemon";

class Pokemon {
    name;
    hp; //health points
    defense;
    attack;
    imageFront;
    imageBack
}

// hacer un adapter

export async function getPokemons (times) {
    let characters = []
    for (let i = 0; i < times; i++) {
        
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
            usedIds.push(randomNumber)
            characters.push(character)
        } catch {
            console.error("error fetching 1 pokemon")
            i -= 1
            continue;
        }
        
    }
    return adapter(characters)
}

/*
console.log(`ataque de ${characters[0].forms[0].name} es  ${characters[0].stats[2].base_stat}`)
console.log(`defensa de ${characters[1].forms[0].name} es ${characters[1].stats[1].base_stat}`)

stats[0]=hp
stats[1]=attack
stats[2]=defense
*/ 

function adapter(rawCharacters) {
    let characters = [];
    for (let i = 0; i < rawCharacters.length; i++) {
        let character = new Pokemon
        character.name = rawCharacters[i].forms[0].name
        character.hp = rawCharacters[i].stats[0].base_stat
        character.attack = rawCharacters[i].stats[1].base_stat
        character.defense = rawCharacters[i].stats[2].base_stat
        character.imageFront = rawCharacters[i].sprites.front_default
        character.imageBack = rawCharacters[i].sprites.back_default
        console.log(character)
        characters.push(character)
    }
    return characters
}	
