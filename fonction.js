// Procédure ne renvoie rien
function multiplierPar2(x) { // 5
    console.log(x*2) // 10
}

multiplierPar2(5)

// Fonction renvoie une valeur
function multiplier(x, y) {
    return x*y
}

console.log(multiplier(8, 6))
const valeurRetour = multiplier(5, 6)
console.log(valeurRetour)

const multiplierPar3 = function(x) {
    return x * 3
}

console.log(multiplierPar3(1))

const multiplierPar4 = (x) => {
    return x * 4
}

console.log(multiplierPar4(2))

const multiplierPar5 = x => x * 5

console.log(multiplierPar5(3))

// Fonction avancé de liste

const tab = [1, 2, 3, 4]
const tabFilter = tab.filter(
    (elem) => elem % 2 === 0
)

console.log(tabFilter)

const tabMap = tab.map(
    (elem) => elem + 2
)

console.log(tabMap)

// setTimeout, setInterval
// setInterval(() => {
//     console.log("Bonjour")
// }, 5000)

setTimeout(() => {
    console.log("Au revoir")
}, 5000)