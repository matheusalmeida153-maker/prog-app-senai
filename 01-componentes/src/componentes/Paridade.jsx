import './Paridade.css'

function Paridade() {

    function verificarNúmero(){
        let numeroEscolhido = Number(prompt("Digite um número:"))
        if(numeroEscolhido % 2 == 0){
            alert(`O número ${numeroEscolhido} é par.👌👌👌👌👌👌👌👌👌👌`)
        }else{
            alert(`O número ${numeroEscolhido} é impar.🤣🤣🤣🤣🤣🤣🤣🤣🤣`)
        }
    }

  return (
    <div className = {"container-numero"}>
      <h2>Par ou ímpar?</h2>
      <button onClick = {verificarNúmero}>Verificar Número</button>
    </div>
  )

}

export default Paridade
