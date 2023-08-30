//to output IMC weight status
export const checkIMC = (check) => {
    let feedback;

    if (check < 18.5) {
        feedback = "Abaixo do peso"
    } else if (check > 18.5 && check < 24.9) {
        feedback = "Peso normal"
    } else if (check > 25 && check < 29.9) {
        feedback = "Sobrepeso"
    } else {
        feedback = "Obesidade"
    }

    return feedback;
}

//to check if temp has operator
export const checkOperator = (check) => {
    let response
    if (check.includes("+")
        || check.includes("-")
        || check.includes("/")
        || check.includes("*")
        || check.includes("IMC")
        || check.includes("%")
    ) {
        response = true;
    } else {
        response = false;
    }

    return response;
}