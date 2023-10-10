import { useState } from 'react'
import './App.css'
import { calculo } from './OperMatematica'

export function Calc() {

  //Dos estados

  const [num1, setNum1] = useState()
  const [num2, setNum2] = useState('')

  const [operacion, setOperacion] = useState('')
  const [resultado, setResultado] = useState('')


  //Prueba para que me acepte más de un digito
  const [digitos, setDigitos] = useState()

  const handleDigitar = (numero) => {
    if (operacion == '') { // Si no hay operacion, se agrega al primer numero
      let numAuxiliar = num1
      if (numAuxiliar == undefined) { // si no esta definido, lo hago string para que no me de errores de concatenacion
        numAuxiliar = ''
      }
      numAuxiliar = numAuxiliar.toString() + numero // uso ToString para que se concatene y no se sumen los numeros dentro de la variable numAuxiliar
      // la suma seria '1' + 1 = '11', sino seria 1 + 1 = 2
      setNum1(numAuxiliar) // seteo el valor de num1 con el valor de numAuxiliar
    } else { // si hay operacion, se agrega al segundo numero
      if (resultado != '') { // si hay un resultado, se resetea la calculadora
        setNum1(numero)
        setNum2('')
        setOperacion('')
        setResultado('')

      }
      else { setNum2(num2 + numero) } // seteo el valor de num2 con el valor de num2 + el numero que se presiono
    }
  };

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
        <div> {num1} {operacion} {num2} {resultado}</div>
      </div>

      <div className="grid_calc">

        {/* <!-- ____________________Colum 1_____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '*')}>×</div>

        <div className="numeros" onClick={() => handleDigitar(1)}>1</div>
        <div className="numeros" onClick={() => handleDigitar(4)}>4</div>
        <div className="numeros" onClick={() => handleDigitar(7)}>7</div>
        <div className="numeros" onClick={() => handleDigitar(0)}>0</div>



        {/* <!-- ____________________Colum 2_____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '/')}>÷</div>

        <div className="numeros" onClick={() => handleDigitar(2)}>2</div>
        <div className="numeros" onClick={() => handleDigitar(5)}>5</div>
        <div className="numeros" onClick={() => handleDigitar(8)}>8</div>

        <div className="operacion" onClick={() => setOperacion(() => '%')}>%</div>



        {/* <!-- ____________________Colum 3____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '-')}>-</div>

        <div className="numeros" onClick={() => handleDigitar(3)}>3</div>
        <div className="numeros" onClick={() => handleDigitar(6)}>6</div>
        <div className="numeros" onClick={() => handleDigitar(9)}>9</div>

        <div className="igual" onClick={() => setResultado(calculo(num1, num2, operacion))}> = </div>


        {/* <-- ____________________Colum 4____________________ --> */}

        <div className="operacion" onClick={() => setOperacion(() => '+')}>+</div>

        <div className="operacion_reset" onClick={handleReset}> C </div>
        <div className="operacion_reset" onClick={handleResetCE}>CE</div>

      </div>
    </div>

  )
}


