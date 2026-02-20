
import './DiaDaSemana.css'

function DiaDaSemana() {
    function verificarDia(){
        let dia = Number(prompt("Digite um dia da semana (1 a 7):"))
        
        switch(dia){
          case 1: alert("Domingo")
          break
          
          case 2: alert("Segunda-feira")
          break
          
          case 3: alert("Terça-feira")
          break
          
          case 4: alert("Quarta-feira")
          break
          
          case 5: alert("Quinta-feira")
          break
          
          case 6: alert("Sexta-feira")
          break
          
          case 7: alert("Sábado-feira")
          break
          
          default: alert("Número de dia incorreto! Digite outro.")
          break
        }
        // if(dia > 7 || dia < 1){
        //     alert("Número de dia incorreto! Digite outro.")
        // }
        // if(dia == 1){
        //     alert("Domingo")
        // }else if(dia == 2){
        //     alert("Segunda-feira")
        // }else if(dia == 3){
        //     alert("Terça-feira")
        // }else if(dia == 4){
        //     alert("Quarta-feira")
        // }else if(dia == 5){
        //     alert("Quinta-feira")
        // }else if(dia == 6){
        //     alert("Sexta-feira")
        // }else if(dia == 7){
        //     alert("Sábado-feira")
        // }else{
        //     alert("Número de dia incorreto! Digite outro.")
        // }

    }

  return (
    <div className = {"container-dia"}>
      <h2>Dia da semana</h2>
      <button onClick={verificarDia}>Verificar dia</button>
    </div>
  )
}

export default DiaDaSemana

