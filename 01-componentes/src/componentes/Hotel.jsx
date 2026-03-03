import React from 'react'
import { _discriminatedUnion } from 'zod/v4/core';

function Hotel() {
    const[saida, setSaida] = usaState(0)

    function verificarPagamento(){
        
        let diarias = Number(prompt("Quantos dias Juca ficou?"))
        let valorDiaria
    
        if(diarias <= 5){
            valorDiaria = 100
        }else if(diarias >= 6 <= 10){
            valorDiaria = 90
        }else{
            valorDiaria = 80
        }
    
        let valorBruto = diarias * valorDiaria
    
        let desconto10 = valorBruto * 10/100
        let desconto15 = valorBruto * 15/100
        let valorTotal = valorBruto - desconto10 - desconto15 + 150 

        setSaida(`Valor final: ${valorTotal.toFixed(2)}`)
    }
  return (
    <div>
      
    </div>
  )
}

export default Hotel
