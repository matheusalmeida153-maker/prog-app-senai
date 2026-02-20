import './Notas.css'

function Notas() {

    function classificarNota(){
        let nota = Number(prompt("Digite uma nota:"))

        if(nota < 0 || nota > 100){
            alert("Você tem retardo? Digite novemente.")
        }else if(nota < 21){
            alert("Sua nota é A.")
        }else if(21 < nota && nota < 41){
            alert("Sua nota é B.")
        }else if(41 < nota && nota < 61){
            alert("Sua nota é C.")
        }else if(61 < nota && nota < 81){
            alert("Sua nota é D.")
        }else{
            alert("Sua nota é E.")
        }
    }

  return (
    <div className = {"container-notas"}>
      <h2>Classificar Notas</h2>
      <button onClick = {classificarNota}>Verificar Nota</button>
    </div>
  )
}

export default Notas
