import {useState} from 'react'

function AprovReprov() {
    const[inputPrimNota, setInputPrimNota] = useState('')
    const[inputSegNota, setInputSegNota] = useState('')
    const[inputResultado, setInputResultado] = useState('')
    function aprovReprov(){
        let media = (Number(inputPrimNota) + Number(inputSegNota))/2

        if(media >= 7){
            setInputResultado('aprovado.')
        }else if(4 <= media && media < 7){
            setInputResultado('de recuperação.')
        }else if(media < 4){
            setInputResultado('reprovado.')
        }
    }
    return (
        <div>
            <h2>Aprovado ou Reprovado</h2>
            <p>Digite a primeira nota:</p>
            <input type="number"
            value={inputPrimNota}
            onChange={(e1) => setInputPrimNota(e1.target.value)}
            />
            <p>Digite a segunda nota:</p>
            <input type="number"
            value={inputSegNota}
            onChange={(e2) => setInputSegNota(e2.target.value)}
            />
            <p>Situação do aluno</p>
            <button onClick={aprovReprov}>Mostrar</button>
            <p>O aluno está {inputResultado}</p>
        </div>
    )
}

export default AprovReprov
