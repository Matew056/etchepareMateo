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