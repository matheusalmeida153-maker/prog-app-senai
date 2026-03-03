import { useState } from 'react'

function Tabuada() {

    const[saida,setSaida] = useState([])

    function calcularTabuada(){
        let numeroEscolhido = Number(prompt("Digite um número de 0 a 10:"))
        let resultado 
        let tabuada = []

        for(let i = 1; i <= 10; i++){
            resultado = i + " X " + numeroEscolhido + " = " + (i * numeroEscolhido) 
            tabuada.push(resultado)
        }



        setSaida(tabuada)
    }
    return (
        <div>
            <h2>Tabuada</h2>
            <div>Resultado: {saida.map((linha, index) => (
                <p key={index}>{linha}</p>
            ))}</div>
            <button onClick= {calcularTabuada}>Calcular Tabuada
            <img src="./icones/dino-tabuada.svg"></img>
            </button>
        </div>
    )
}

export default Tabuada
