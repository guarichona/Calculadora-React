import { useState } from 'react'
import './App.css'

// export const Suma = ({ num1, num2 }) => {

//   const operSuma = num1 + num2

//   return (
//     operSuma
//   )
// }



export function Calc() {

  //Dos estados

  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState('')

  const [operacion, setOperacion] = useState('')
  const [resultado, setResultado] = useState('')

  //Prueba para que me acepte más de un digito
  const [digitos, setDigitos] = useState()

  const handleDigitar = (event) => {
    setDigitos(event.target.value)
  };

  //Cuatro Funciones

  const recepcionNum = () => {

  }

  const retorno = () => {
    const n1 = parseInt(num1);
    const n2 = parseInt(num2);
    switch (operacion) {
      case '+':
        console.log('Suma');
        setResultado(() => ` = ${n1 + n2}`)
        console.log(resultado);
        break;

      case '-':
        console.log('Resta');
        setResultado(() => ` = ${n1 - n2}`)
        console.log(resultado);
        break;

      case '*':
        console.log('Multiplicacion');
        setResultado(() => ` = ${n1 * n2}`)
        console.log(resultado);
        break;

      case '/':
        console.log('Division');
        setResultado(() => ` = ${n1 / n2}`)
        console.log(resultado);
        break;

      case '%':
        console.log('Porcentaje');
        setResultado(() => ` = ${n1 * n2 * 0.01} `)

      default:
        return ('😐')

    }
  }

  const handleReset = () => {

    setNum1(() => '');
    setNum2(() => '');
    setOperacion(() => '');
    setResultado(() => '');
  };

  const handleResetCE = () => {


    if (resultado != '') {
      return
    }
    if (num2 != '') {
      setNum2(() => '');
      return
    }
    if (operacion != '') {
      setOperacion(() => '');
      return
    }
    if (num1 != '') {
      setNum1(() => '');
      return
    }

  };

  return (

    <div className="padre_calc">

      {/* <! ____________________Resultado__________________ --> */}

      <div className="resultado">
        <div> {num1} {operacion} {num2} {resultado} </div>
      </div>

      <div className="grid_calc">

        {/* <!-- ____________________Colum 1_____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '*')}>×</div>

        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '1') : setNum2(() => num2 + 1)}>1</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '4') : setNum2(() => num2 + 4)}>4</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '7') : setNum2(() => num2 + 7)}>7</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '0') : setNum2(() => num2 + 0)}>0</div>



        {/* <!-- ____________________Colum 2_____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '/')}>÷</div>

        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '2') : setNum2(() => num2 + 2)}>2</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '5') : setNum2(() => num2 + 5)}>5</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '8') : setNum2(() => num2 + 8)}>8</div>

        <div className="operacion" onClick={() => setOperacion(() => '%')}>%</div>



        {/* <!-- ____________________Colum 3____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '-')}>-</div>

        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '3') : setNum2(() => num2 + 3)}>3</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '6') : setNum2(() => num2 + 6)}>6</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => (num1 ?? '').toString() + '9') : setNum2(() => num2 + 9)}>9</div>

        <div className="igual" onClick={retorno}> = </div>


        {/* <-- ____________________Colum 4____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '+')}>+</div>

        <div className="operacion_reset" onClick={handleReset}> C </div>
        <div className="operacion_reset" onClick={handleResetCE}>CE</div>

      </div>
    </div>

  )
}


