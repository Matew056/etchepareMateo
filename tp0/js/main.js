import {getPokemons} from "./fetchPokemons.js";

const button = document.getElementById("button")

const pokemonNumber = 6
const teamNumber = 2


let characters = await getPokemons(pokemonNumber)
