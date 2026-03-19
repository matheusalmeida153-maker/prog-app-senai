import { useState } from 'react'

function PapaiNoel() {
    const[inputEntrada, setInputEntrada] = useState('')
    const[inputResultado, setInputResultado] = useState('')
    let qtdHo = ''
    let i = 1
    function quantidadeDeHo(){
        while(true){
            if(inputEntrada > 100){
                alert("Quantidade inválida! Digite somente entre 1 a 100.")
                break
            }else if(inputEntrada < 1){
                alert("Quantidade inválida! Digite somente entre 1 a 100.")
                break
            }
            i++
            qtdHo += "Ho "
            if(i == inputEntrada){
                qtdHo += "Ho!"
            }
            if(i == inputEntrada){
                break
            }
        }
        setInputResultado(qtdHo)
    }
    return (
        <div>
            <h2>Problema do Papai Noel</h2>
            <p>Digite a quantidade de Ho!</p>
            <input type = "number"
            value = {inputEntrada}
            onChange={(e) => setInputEntrada(e.target.value)}
            />
            <p>Quantidade de Ho!</p>
            <button onClick={quantidadeDeHo}>Mostrar</button>
            <p>{inputResultado}</p>
        </div>
    )
}

export default PapaiNoel
