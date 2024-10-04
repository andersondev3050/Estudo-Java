function enviar() {
    var endEmail = document.querySelector('#enviar').ariaValueMax;
    var senha = document.querySelector('#senha').ariaValue;

    console.log(senha);
    console.log(endEmail);

    var lemb = document.querySelector('#checkbox');
    if (lemb.checked) {
        console.log('Checkbox selecionada');
    } else {
        console.log('checkbox não selecionada');
    }

  
}
const pessoa = {
    nome: "AndersonDev",
    dataNascimento: 21,
    mesNascimento: "JULHO",
    anoNascimento: 1975,

    
}

console.log("Me chamo"  +  pessoa.nome  +   "nasci dia "  +  pessoa.dataNascimento);