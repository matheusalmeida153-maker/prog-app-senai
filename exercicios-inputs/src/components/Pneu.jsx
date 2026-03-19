
import { useState } from 'react'

function Pneu() {
    const[inputLida, setInputLida] = useState('')
    const[inputDesejada, setInputDesejada] = useState('')
    const[inputResultado, setInputResultado] = useState('')


    function calculaPressao(){
        let inputResultado = inputDesejada - inputLida
        setInputResultado(inputResultado)
    }
    return (
        <div>
          <h2>Cálculo da Pressão do Pneu</h2>
          <p>Pressão Lida</p>
          <input type="number"
            value={inputLida}
            onChange={(e1) => setInputLida(e1.target.value)}
          />
          <p>Pressão Desejada</p>
          <input type="number"
            value={inputDesejada}
            onChange={(e2) => setInputDesejada(e2.target.value)}
          />
          <p>Calcular pressão</p>
          <button onClick={calculaPressao}>Calcular Diferença</button>
          <p>A diferença de pressão é {inputResultado}</p>
        </div>
    )
}

export default Pneu
