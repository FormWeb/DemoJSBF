const salameche = {
    name: "Salameche", 
    type: "Feu", 
    level: 12
}

const bulbizarre = {
    name: "Bulbizarre", 
    type: "Plante/Poison", 
    level: 14
}

console.log(salameche.type)

const dresseur = {
    name: "Sacha",
    pokemons: [salameche, bulbizarre, {name: "Carapuce", type:"Eau", level: 16}]
}

console.log(dresseur)