// Génère un nombre de 0 à 2 (compris)
const nbrMax = 2
const nbrRandom = Math.floor(Math.random() * (nbrMax + 1)) //
console.log(nbrRandom)

// Génère un nombre de 10 à 15
const nbrRandomRange = Math.random() * 6 + 10
const nbrRandomRange2Decimal = parseInt(nbrRandomRange * 100) / 100
console.log(nbrRandomRange2Decimal)