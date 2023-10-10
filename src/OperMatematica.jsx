export const calculo = (num1, num2, operacion) => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);

    switch (operacion) {
        case '+':
            console.log('Suma');
            return ` = ${n1 + n2}`;

        case '-':
            console.log('Resta');
            return ` = ${n1 - n2}`;

        case '*':
            console.log('Multiplicacion');
            return ` = ${n1 * n2}`;

        case '/':
            console.log('Division');
            return ` = ${n1 / n2}`;

        case '%':
            console.log('Porcentaje');
            return ` = ${n1 * n2 * 0.01} `;

        default:
            return ('😐')

    }
}