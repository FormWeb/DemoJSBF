// While

let i = 0
while (i < 10) {
    console.log(i)
    // même chose que i = i + 1
    i++
}
console.log(i)

let quit = false
while (!quit) {
    const choice = prompt("Voulez-vous quitter ? (o/n)")
    if (choice === "o") {
        quit = true
    }
}

// For

// For i 
let cont = true
for (let j = 0; j < 5 && cont; j++) {
    console.log("Itération " + j)
    const choice = prompt("Voulez-vous quitter ? (o/n)")
    if (choice === "o") {
        cont = false
    }
}

// Je n'ai pas accès au compteur à l'extérieur de la boucle
// console.log(j)

