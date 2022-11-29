console.log("Hello World")
let inputUtilisateur = prompt("Entrez votre âge")
console.log(inputUtilisateur)

// Variable

// Déclaration
let a = 5
a = 6

const b = 6
// b = 7

// Type

// Nombre
let nb1 = 45
let nb2 = 8.6

// Opérateur arithmétique
// + - / * % **
const nb3 = nb1 * nb2 ** 5
console.log(nb3)

// NaN
const inputUser = "cduisd"
const inputUserParse = parseInt(inputUser)
console.log(inputUserParse)
console.log(NaN === NaN)
console.log(isNaN(NaN))

// Chaine de caractère
const message = "Bonjour tout le monde"
const message1 = `Mon nombre est ${nb3}`
console.log(message1)

// Récupérer un charactère de la chaine
console.log(message[1])

// Vérifier si une chaine de caractère en contient une autre
console.log(message.includes("on"))

// Booleen
// Opérateur booléen > < >= <= === !==
console.log("1" === 1)
const myBoolean = nb1 > nb2

// Opérateur logique || && 
const majeur = true
console.log(message.includes("on") || message.includes("z"))




