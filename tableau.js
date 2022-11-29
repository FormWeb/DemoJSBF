const tab = [4, 5, 6, 7]
//           0  1  2  3

// Initialiser tableau vide
// const tabEmpty = []

//const tabMauvaisePratique = ["nfodsnf", 879456, false, ["fdnsj", "fjdkslfjk"]]
//                             0          1       2       3    

// get et set
console.log(tab[1]) // 5
tab[2] = 8 // -> tab = [4, 5, 8, 7]
console.log(tab.length) // 4
// tab[8] = 12
console.log(tab)

// fonction sur les tableaux

// Transforme le tableau en chaine de caractère
const mTabInString = tab.toString()
console.log(mTabInString)

// Construit une chaine de caractère avec les éléments du tableaux et un séparateur
const myTabJoin = tab.join(" / ")
console.log(myTabJoin)

// Ajoute un élément à la fin du tableau
tab.push(15)
console.log(tab)

// Splice
tab.splice(1, 2, 48, 59, 65)
console.log(tab)

// Slice (renvoie un nouveau tableau)
const tabSlice = tab.slice(1, 3)
console.log(tab)
console.log(tabSlice)

// Concatener 2 tableaux (renvoie un nouveau tableau)
const tabConcat = tab.concat([0, 0, 0])
console.log(tabConcat)
console.log(tab)

// Reverse
tab.reverse()
console.log(tab)

// Boucle Tableau

// For of 
const tabFor = [7, 8, 9, 10]
//              0  1  2   3
for (const elem of tabFor) {
    console.log(elem)
}

// Equivalent for i 
for (let i = 0; i < tabFor.length; i++) {
    console.log(tabFor[i])
}

// For of fonctionne sur les chaines de caractère
const bonjour = "Bonjour"
for (const char of bonjour) {
    console.log(char)
}

// For in (décnoseillé la plupart du temps)
for (const i in tabFor) {
    console.log(tabFor[i])
}

const salameche = {
    nom: "Salameche", 
    type : "Feu",
    niveau: 15
}

console.log(salameche.nom) // Salameche
console.log(salameche["nom"]) // Salameche

for (const att in salameche) {
    console.log(att)
    console.log(salameche[att])
}

const tab = [8, 9, 1, 4]
// -> [1, 4, 8, 9]