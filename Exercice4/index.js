const init =()=> {
    const btn = document.getElementById("myButton")
    const body = document.querySelector("body")
    const displayText =()=> {
        const text = document.createElement("p")
        text.innerText="Bonjour, vous avez cliqué sur le bouton !"
        body.appendChild(text)
    }
    btn.addEventListener("click",displayText)
}

init()