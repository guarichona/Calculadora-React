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

  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')

  const [operacion, setOperacion] = useState('')
  const [resultado, setResultado] = useState('')

  const digitos = '🍎'


  //Cuatro Funciones

  const recepcionNum = () => {

  }

  const retorno = () => {

    switch (operacion) {
      case '+':
        console.log('Suma');
        setResultado(() => ` = ${num1 + num2}`)
        console.log(resultado);
        break;

      case '-':
        console.log('Resta');
        setResultado(() => ` = ${num1 - num2}`)
        console.log(resultado);
        break;

      case '*':
        console.log('Multiplicacion');
        setResultado(() => ` = ${num1 * num2}`)
        console.log(resultado);
        break;

      case '/':
        console.log('Division');
        setResultado(() => ` = ${num1 / num2}`)
        console.log(resultado);
        break;

      case '%':
        console.log('Porcentaje');
        setResultado(() => ` = ${num1 * num2 * 0.01} `)

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

      <div className="resultado">{num1} {operacion} {num2} {resultado} </div>


      <div className="grid_calc">

        {/* <!-- ____________________Colum 1_____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '*')}>×</div>

        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 1) : setNum2(() => 1)}>1</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 4) : setNum2(() => 4)}>4</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 7) : setNum2(() => 7)}>7</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 0) : setNum2(() => 0)}>0</div>



        {/* <!-- ____________________Colum 2_____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '/')}>÷</div>

        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 2) : setNum2(() => 2)}>2</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 5) : setNum2(() => 5)}>5</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 8) : setNum2(() => 8)}>8</div>

        <div className="operacion" onClick={() => setOperacion(() => '%')}>%</div>



        {/* <!-- ____________________Colum 3____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '-')}>-</div>

        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 3) : setNum2(() => 3)}>3</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 6) : setNum2(() => 6)}>6</div>
        <div className="numeros" onClick={() => operacion == '' ? setNum1(() => 9) : setNum2(() => 9)}>9</div>

        <div className="igual" onClick={retorno}> = </div>


        {/* <!-- ____________________Colum 4____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '+')}>+</div>

        <div className="operacion_reset" onClick={handleReset}> C </div>
        <div className="operacion_reset" onClick={handleResetCE}>CE</div>

      </div>
    </div>
  )
}


