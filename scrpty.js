const verResulatdo = document.getElementById('verresultado')
verResulatdo.addEventListener('click' , res)

function res(){
    const nome = document.getElementById('nome').value
    const notaUm = document.getElementById('notaum').value
    const notaDois = document.getElementById('notadois').value
    const resfinal = document.getElementById('resultado')
    const nUm = parseInt(notaUm)
    const nDois = parseInt(notaDois)
    const somaNota = nUm + nDois
    const media = somaNota / 2
    
    

    if (nome !== '' && notaUm !== '' && notaDois !== '' ){

        

        if(media >= 6){
            resfinal.textContent = ' Parabéns '+ nome + ' Sua Nota Media Final foi ' + media + ' Voce Não Esta De Recuperação.'
        }else if(media <= 6){
            resfinal.textContent = nome + ' Infelizmente , Você Não Atingiu a Nossa Media. Sua Media Foi ' + media + ' Você Esta De Recuperacão.' 
        }

    }else{
        window.alert('Algum campo não foi prenchido')
    }
}