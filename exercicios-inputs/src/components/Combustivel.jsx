import React from 'react'

function Combustivel() {
    const [inputCombustivel, setinputCombustivel] = useState('')
    const [inputResultado, setinputResultado] = useState('')

    function somaCombu(){
        let somaAl = 0
        let somaGas = 0
        let somaDi = 0
        
    }
    return (
        <div>
            <h2>Tipos de Combustíveis</h2>
            <p>Digite o número do combustível</p>
            <input type="number"
            value={inputCombustivel}
            onChange={(e) => setinputCombustivel(e.target.event)}
            />
            <p>Quantidade Combustíveis</p>
            <button onClick={somaCombu}>Mostrar</button>
            <p>{inputResultado}</p>
        </div>
    )
}

export default Combustivel
