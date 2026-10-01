document.getElementById('btnclassificar').addEventListener('click', function() {
    
    let idade = parseFloat(document.getElementById('idade').value);
    let classificacao = "";

  
    classificacao = (idade <= 5) ? "Bebê"
        : (idade >= 6 && idade <= 11) ? "Criança"
        : (idade >= 12 && idade <= 17) ? "Adolescente"
        : (idade >= 18 && idade <= 59) ? "Adulto"
        : (idade >= 60) ? "Idoso"
        : "Inválido";


    document.getElementById('resultado').value = classificacao;

});