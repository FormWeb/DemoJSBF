const message = prompt("Entrez un message")

if (!message.includes("e")) {
    console.log("Le message ne contient pas de 'e'")
}
else if (message.includes("r")) {
    console.log("Le message contient un 'r'")
}
else {
    console.log("Le message contient un e")
}

switch(message) {
    case "Bonjour":
        console.log("Bonjour à vous")
        break
    case "Au revoir":
        console.log("Au revoir à vous")
        break
    default:
        console.log("Défaut")
        break
}

let nb1 = 5

switch(true) {
    case nb1 > 8:
        console.log("nb1 est plus grand que 8")
        break
    default:
        console.log("Defaut")
}