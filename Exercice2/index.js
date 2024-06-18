const calculate =(int_1, int_2, operator)=> {
    isInteger = Number.isInteger(int_1) && Number.isInteger(int_2)
    isOperateur = operator==="+" || operator==="/" || operator==="*" || operator==="-"
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

// Exemples d'utilisation de la fonction
console.log(calculate(5, 3, '+'));   // Affiche 8
console.log(calculate(10, 4, '-'));  // Affiche 6
console.log(calculate(7, 2, '*'));   // Affiche 14
console.log(calculate(12, 3, '/'));  // Affiche 4
console.log(calculate(8, 0, '/'));   // Affiche "Division by zero is not allowed"
console.log(calculate(4, 5, '%'));   // Affiche "Invalid operator"

export default calculate
