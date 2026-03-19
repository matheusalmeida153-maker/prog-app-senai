import { useState } from 'react'

function Bondinho() {
    const[inputAlunos, setInputAlunos] = useState('')
    const[inputMonitores, setInputMonitores] = useState('')
    const[inputResultado, setInputResultado] = useState('')

    function qtdPerm(){
        if(inputAlunos < 0 || inputAlunos > 50){
            alert("Quantidade de alunos inválida!")
        }if(inputMonitores < 0 || inputMonitores > 50){
            alert("Quantidade de monitores inválida!")
        }
        
        let soma = Number(inputAlunos) + Number(inputMonitores)

        if(soma <= 50){
            setInputResultado('Quantidade Aprovada!')
        }else{
            setInputResultado('Quantidade acima do permitido!')
        }


    }
    return (
        <div>
            <h2>Bondinho</h2>
            <p>Quantidade Alunos</p>
            <input type="number"
            value={inputAlunos}
            onChange={(e1) => setInputAlunos(e1.target.value)}
            />
            <p>Quantidade Monitores</p>
            <input type="number"
            value={inputMonitores}
            onChange={(e2) => setInputMonitores(e2.target.value)}
            />
            
            <p></p>
            <button onClick={qtdPerm}>Mostrar</button>
            <p>{inputResultado}</p>
        </div>
    )
}

export default Bondinho
