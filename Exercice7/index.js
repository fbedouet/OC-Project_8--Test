const convertToBinary =()=> {
    let decimal = document.getElementById("decimalInput").value 
    if(!decimal){return}

    let cpt=0
    let binary=""
    while(!decimal/2===0){
        binary= (decimal%2).toString().concat(binary)
        decimal=Math.trunc(decimal/2)
    }
    const displayResult = document.createElement("p")
    displayResult.innerText=binary
    document.querySelector("body").appendChild(displayResult)
}