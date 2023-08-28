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