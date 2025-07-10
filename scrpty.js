const verResultado = document.getElementById('verResultado');
verResultado.addEventListener('click' , res);

function res(){
    const nome = document.getElementById('nome').value;
    const notaUm = document.getElementById('notaum').value;
    const notaDois = document.getElementById('notadois').value;
    const resfinal = document.getElementById('resultado');
    const nUm = parseFloat(notaUm);
    const nDois = parseFloat(notaDois);
    const somaNota = (nUm + nDois) / 2;
    

    if (nome !== '' && notaUm !== '' && notaDois !== '' ){
        if(somaNota >= 6){
            resfinal.textContent = ' Parabéns '+ nome + ' Sua Nota Media Final foi ' + somaNota.toFixed(1) + ' Voce Não Esta De Recuperação.';
        }else if(somaNota <= 6){
            resfinal.textContent = nome + ' Infelizmente , Você Não Atingiu a Nossa Media. Sua Media Foi ' + somaNota.toFixed(1) + ' Você Esta De Recuperacão.';
        }
        }else{
            window.alert('Algum campo não foi preenchido');
    }
}