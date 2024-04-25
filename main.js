const form = document.getElementById('main-form');

form.addEventListener('submit',function(e){

    e.preventDefault();   
    const inputCampoA = document.getElementById('campo-a');
    const inputCampoB = document.getElementById('campo-b');
    const campoA = parseFloat(inputCampoA.value);
    const campoB = parseFloat(inputCampoB.value);
    const mensagemErrado = `Errado, tente novamente.`;
    const mensagemCerto = `Correto, o número ${campoB} é maior que o número ${campoA}`;
    
    if(campoA >= campoB){
        const containerFake = document.querySelector('.mensagem-errado');
        containerFake.innerHTML = mensagemErrado;
        containerFake.style.display = 'block';
        document.querySelector('.mensagem-certo').style.display = 'none';
    }

    else{     
        const containerTrue = document.querySelector('.mensagem-certo');
        containerTrue.innerHTML = mensagemCerto;
        containerTrue.style.display = 'block';
        document.querySelector('.mensagem-errado').style.display = 'none';
    }
});