const calcular = document.getElementById('calcular');

function imc () {
    
    const nome = document.getElementById('nome');
    const altura = document.getElementById('altura');
    const peso = document.getElementById('peso');
    const resultado = document.getElementById('resultado');

    if (nome !== '' && altura !== '' && peso !== '') {
        
    }else {
        resultado.textContent = 'Preencha todos os campos';
    }

}

calcular.addEventListener('click', imc);

