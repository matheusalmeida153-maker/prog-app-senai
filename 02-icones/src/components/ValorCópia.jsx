import { useState} from 'react'
function ValorCópia() {

    const[saida,setSaida] = useState([])

    function calcularCopias(){
        let numeroEscolhido = Number(prompt("Digite um número de 0 a 10:"))
        let resultado 

        resultado += numeroEscolhido + " X " + "0.33" + " = " + (0.33 * numeroEscolhido) 
        

        setSaida(resultado)
    }
  return (
    <div>
      <h2>Valores das Cópias:</h2>
            <div>Resultado: {saida}</div>
            <button onClick= {calcularCopias}>Mostrar Valores
            <img src="./icones/dino-tabuada.svg"></img>
            </button>
    </div>
  )
}

export default ValorCópia
