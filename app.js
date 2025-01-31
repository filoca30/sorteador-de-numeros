function sortear() {
    let quantidade = parseInt(document.getElementById('quantidade').value);
    let de =  parseInt(document.getElementById('de').value);
    let ate = parseInt(document.getElementById('ate').value);
   
    let sorteados = [];
    let numero;


    if (document.getElementById('quantidade').value == '') {
        alert('Campo "Quantidade de números" não foi preenchido. Preencha para continuar.');
        return;
    }

        if (document.getElementById('de').value == '') {
        alert('Campo "Do número" não foi preenchido. Preencha para continuar.');
        return;
    }

    if (document.getElementById('ate').value == '') {
        alert('Campo "Até o número" não foi preenchido. Preencha para continuar.');
        return;        
    }
    
    if (quantidade <= 0) {
        alert('Campo "Quantidade de números" deve ser maior que zero. Verifique!');
        return;
    }

    if (de <= 0) {
        alert('Campo "Do número" deve ser maior que zero. Verifique!');
        return;
    }

    if (ate <=0) {
        alert('Campo "Até o número" deve ser maior que zero. Verifique!');
        return;        
    }
    
    if (de >= ate) {
        alert('Campo "Do número" deve ser menor que o campo "Até o número". Verifique!');
        return;    
    }

    if (quantidade > ate) {
        alert('Campo "Quantidade de números" deve ser menor que o campo "Até o número". Verifique!');
        return;
    }

    let intervalo = ate - de + 1;
    
    if (quantidade > intervalo) {
        alert('Campo "Quantidade de números" deve ser menor que o intervalo entre os campos "Do número" e "Até o número". Verifique!');
        return;
    }

    for (let i = 0; i < quantidade; i++) {
        numero = obterNumeroAleatorio(de, ate);

        while (sorteados.includes(numero)) {
            numero = obterNumeroAleatorio(de, ate);
        }

        sorteados.push(numero);
    }

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<label class="texto__paragrafo">Números sorteados: ${sorteados}</label>`;
    alterarStatusBotao();
}

function obterNumeroAleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function alterarStatusBotao() {
    let botao = document.getElementById('btn-reiniciar');
    if (botao.classList.contains('container__botao-desabilitado')) {
        botao.classList.remove('container__botao-desabilitado');
        botao.classList.add('container__botao');

    } else {
        botao.classList.remove('container__botao');
        botao.classList.add('container__botao-desabilitado');
    }
}

function reiniciar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('de').value = '';
    document.getElementById('ate').value = '';
    document.getElementById('resultado').innerHTML =  '<label class="texto__paragrafo">Números sorteados:  nenhum até agora</label>';
    alterarStatusBotao();
}

function limparCampo(campo) {}