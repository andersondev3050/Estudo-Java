// Criando Arrays
const dc1 = document.getElementById('c1');
const dc2 = document.getElementById('c2');
const dc3 = document.getElementById('c3');
const dc4 = document.getElementById('c4');
const dc5 = document.getElementById('c5');
const dc6 = document.getElementById('c6');

const arrrayElementos = [dc1, dc2, dc3, dc4, dc5,dc6];

// Utilizando sprashing el element  que se  est e
const colecaoHTML = [...document.getElementsByTagName('div')]


// Adicionando eventos aos elementos do array
//for(d of arrrayElementos)
    //d.innerHTML = 'AndersonDev'

console.log(colecaoHTML)
colecaoHTML.map((e)=>{
    console.log(e)
})




