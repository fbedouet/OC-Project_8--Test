isResult = false

const isOperateur =(elt)=>{
    return elt==="+" || elt==="/" || elt==="*" || elt==="-"
}

const calculate =(int_1, int_2, operator)=> {
    isInteger = Number.isInteger(int_1) && Number.isInteger(int_2)
    isByZero = operator==="/" && int_2===0

    if(!isInteger){
        return "Number is not integer"
    }

    switch (operator) {
        case "+":
            return int_1 + int_2
            break

        case "-":
            return int_1 - int_2
            break

        case "*":
            return int_1 * int_2
            break

        case "/":
            if(int_2==0){
                return "Division by zero is not allowed"
            }
            return int_1 / int_2
            break

        default:
            return "Invalid operator"
            break
    }
}

const calculateResult =()=> {
    const display = document.getElementById("display")
    const elt=display.value
    const calcul=[]
    let numberIndex=0
    for( let index=0; index<elt.length; index++){
        if(isOperateur(elt[index])){
            calcul.push( elt.slice(numberIndex,index) )
            calcul.push( elt[index] )
            numberIndex=index+1
        }
    }
    if(numberIndex===elt.length || calcul.length===0){return} //no diplay if:" " or "3" or "3+ "
    calcul.push( elt.slice(numberIndex,elt.length) )

    result = calculate( Number(calcul[0]), Number(calcul[2]), calcul[1] )
    if(calcul.length-3 !== 0){
        for(let cpt=3; cpt<calcul.length; cpt=cpt+2){
            result=calculate(result, Number(calcul[cpt+1]), calcul[cpt])
        }
    }
    display.value = result
    isResult=true
 }

const appendToDisplay =(elt)=> {
    const display = document.getElementById("display")
    if(isResult){
        display.value = ""
        isResult=false
    }
    if(isOperateur(elt) && !display.value){ return }
    display.value=display.value.concat(elt)
}

const clearDisplay =()=> {
    const display = document.getElementById("display")
    display.value=""
}

