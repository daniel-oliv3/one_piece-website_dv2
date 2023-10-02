
const botoes = document.querySelectorAll('.botao');

const personagens = document.querySelectorAll('.personagem');

botoes.forEach(( botao, indice ) => {
  botao.addEventListener('click', () => {    
    desselecionarBotao();        
    desselecionarPersonagem();
    
    botao.classList.add('selecionado');
    personagens[indice].classList.add("selecionado");
  });
});

function desselecionarBotao() {
  const botaoSelecionado = document.querySelector('.botao.selecionado');
  botaoSelecionado.classList.remove("selecionado");
}

function desselecionarPersonagem() {
  const personagemSelecionado = document.querySelector('.personagem.selecionado');
  personagemSelecionado.classList.remove("selecionado");
}



/* 
O que precisamos fazer? - quando clicar no botão do personagem na lista temos que 
marcar o botão como selecionado e mostrar o personagem correspondente

OBJETIVO 1 - quando clicar no botão do personagem na lista, marcar o botao como selecionado 
passo 1 - pegar os botões no JS pra poder verificar quando o usuário clicar em cima de um deles
passo 2 - adicionar a classe "selecionado" no botão que o usuário clicou
passo 3 - verificar se já existe um botão selecionado, se sim, devemos remover 
a seleção dele 

OBJETIVO 2 - quando clicar no botão do personagem mostrar as informações do personagem
  passo 1 - pegar os personagens no JS pra poder mostrar ou esconder ele
  passo 2 - adicionar a classe "selecionado" no personagem que o usuário selecionou
  passo 3 - verificar se já exista um personagem selecionado, se sim, devemos remover 
  a seleção dele 
*/
 


 // ------------------------------------------------------------------------
 // Exemplo 1, Desenvolvimento
 
 
 // /*obj1 - passo 1*/
 // const botoes = document.querySelectorAll('.botao');
 
 // /*obj2 - passo 1 */
 // const personagens = document.querySelectorAll('.personagem');
 // // console.log(personagens);
 
 // botoes.forEach(( botao, indice ) => {
 //   // console.log(botao);
 //   botao.addEventListener('click', () => {
     
 //     /*obj1 - passo 3*/
 //     const botaoSelecionado = document.querySelector('.botao.selecionado');
 //     // console.log(botaoSelecionado);
 //     botaoSelecionado.classList.remove("selecionado");
     
 //     /*obj1 - passo 2*/
 //     // console.log('clicou no botão', botao);
 //     // console.log(botao.classList);
 //     botao.classList.add('selecionado');
 
 //     // console.log(personagens);
 //     // console.log(indice);
 //     // // console.log(personagens[0]);
 //     // console.log(personagens[indice]);
 
 //     /*obj2 - passo 3*/
 //     const personagemSelecionado = document.querySelector('.personagem.selecionado');
 //     personagemSelecionado.classList.remove("selecionado");
 
 //     /*obj2 - passo 2*/
 //     personagens[indice].classList.add("selecionado");
 //   });
 // });
 
 




// ------------------------------------------------------------------------
// Outros Exemplos de JS, (sem relação com o projeto)
 

// window.alert("Olá Mundo!");

// console.log("Sapup3");
// console.log(document);


//pega um elemento pelo id
// console.log(document.getElementById('chopper'));



// Variaveis
// const botao = document.getElementById('chopper');
// console.log(botao);


// (let) deixa atribuir e (const) não
// let botao = document.getElementById('chopper');
// botao = "Sapup3";

// console.log(botao);





// busca varios elementos pelo seletor
// const botao = document.querySelectorAll('.botao');

// console.log(botao);

// DICAS
// não usar o addEventListener em listas pois retorna 1 elemento, e nao uma lista de elementos
// usar o forEach para percorrer a lista de elementos

// ForEach
// Link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach


// function logArrayElements(element, index, array) {
//   console.log("a[" + index + "] = " + element);
// }
// [7, 2, 4, 8, 1, 3].forEach(logArrayElements);
// // logs:
// // a[0] = 2
// // a[1] = 5
// // a[2] = 9



// function copy(o) {
//   var copy = Object.create(Object.getPrototypeOf(o));
//   var propNames = Object.getOwnPropertyNames(o);

//   propNames.forEach(function (name) {
//     var desc = Object.getOwnPropertyDescriptor(o, name);
//     Object.defineProperty(copy, name, desc);
//   });

//   return copy;
// }

// var o1 = { a: 1, b: "Sapup3" };
// var o2 = copy(o1); // o2 looks like o1 now

// console.log(o1);
// console.log(o2);


// if (!Array.prototype.forEach) {
//   Array.prototype.forEach = function (fn, scope) {
//     for (var i = 0, len = this.length; i < len; ++i) {
//       fn.call(scope, this[i], i, this);
//     }
//   };
// }

// ------------------------------------------------------------------------


