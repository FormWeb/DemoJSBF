const inputHTML = document.querySelector("input")
const buttonHTML = document.querySelector("button")

buttonHTML.addEventListener("click", () => {
    console.log("Click !")
    // Récupère la valeur qui est dans l'input
    console.log(inputHTML.value)
})

inputHTML.addEventListener("input", (e) => {
    console.log(e.target.value)
})

inputHTML.addEventListener("keyup", (e) => {
    // console.log(e.key)
    if (e.key === "Enter") {
        console.log("Confirm !")
    }
})