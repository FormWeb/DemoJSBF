// Récupération

// Récupérer un seul élément

// Par id
const h1HTML = document.getElementById("first")
console.log(h1HTML.innerText)

// Par selecteur CSS
const h2HTML = document.querySelector("h2")
console.log(h2HTML)

// Récupérer des tableaux d'éléments

// Par la classe
const h3HTML = document.getElementsByClassName("beautiful-h3")
console.log(h3HTML)
console.log(h3HTML[0].innerText)

// Par sélecteur CSS
const h3HTMLByQuery = document.querySelectorAll(".beautiful-h3")

// Par nom de balise
const h3HTLMByTag = document.getElementsByTagName("h3")
console.log(h3HTLMByTag)


// Manipulation


// Changer le text
h1HTML.innerText = "Je suis un nouveau h1"

// Changer l'HTML
h2HTML.innerHTML = "<em>Je suis un nouveau h2</em>"

// Manipuler les attributs
h1HTML.setAttribute("class", "red")
console.log(h1HTML.getAttribute("class"))

// On peut modifier le style d'un élément mais il est préferable d'utiliser les class pour ça
// h1HTML.style.background = "magenta"

// Manipuler les classe
h2HTML.classList.add("green")
console.log(h2HTML.classList.contains("green"))
h2HTML.classList.remove("green")
h2HTML.classList.toggle("green")

// Manipulation parents/enfants

const listHTML = document.querySelector("ul")

const firstLi = listHTML.firstElementChild
console.log(firstLi)
firstLi.classList.add("red")

console.log(listHTML.lastElementChild)

// Attention de ne pas récupérer un noeud
console.log(listHTML.firstChild)

// Récupérer tous les enfants d'un élément sous forme de collection
console.log(listHTML.children)

// Récupéré un élément parent
console.log(firstLi.parentElement)


// Création

const newElem = document.createElement("li")
newElem.innerText = "Nouvelle"
newElem.classList.add("red")

listHTML.appendChild(newElem)