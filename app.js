/*
  Dica:

  - Alguns exercícios utilizarão métodos, propriedades e funcionalidades vistos  
    no começo do curso. Se for necessário, reveja partes das aulas anteriores  
    para relembrar.
*/

/*
  01

  - Converta a função abaixo em uma arrow function e utilize-a para exibir um  
    valor no console.
*/

convertToString = value => String(value)
console.log(convertToString(10))

/*
  02
  
  - Crie uma função que retorne a quantidade de caracteres que uma string  
  recebida por parâmetro possui.
*/

contarCaracteres = string => string.length

console.log("Quantidade de caracteres:", contarCaracteres("Olá mundo!"));

/*
  03
  
  - Crie uma função que retorne todos os caracteres de uma string em letras  
    minúsculas;  
  - Utilize a função para exibir a string abaixo no console.
  
    "CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"
*/

converterParaMinusculas = string => string.toLowerCase()

console.log(converterParaMinusculas("CHOCOTONE E OVO DE PÁSCOA JUNTOS NO MERCADO EM PLENO FEVEREIRO"))

/*
  04
  
  - Crie uma função que recebe 2 parâmetros: um caractere e uma string;
  - Ao ser invocada, a função deve retornar o index do caractere na string.
*/

encontrarIndice = (caractere, string) => string.indexOf(caractere)

console.log("Índice do caractere na string:", encontrarIndice("u", "Olá mundo!"));

/*
  05
  
  - Crie uma função que, ao ser invocada, retorna um boolean indicando se o item  
    passado por argumento existe no array (também passado por argumento).
*/

verificarExistencia = (item, array) => array.includes(item)

console.log("O item existe no array:", verificarExistencia(3, [1, 2, 3, 4, 5]));

/*
  06
  
  - Crie uma função que retorna a concatenação de 2 arrays, passados como  
    argumentos em sua invocação;
*/

concatenar = (array1, array2) => array1.concat(array2)

console.log("String concatenada:", concatenar([1, 2, 3], [4, 5, 6]))

/*
  07
  
  - Crie uma função que retorna o array passado como argumento em sua invocação,  
    mas com o último item removido.
*/

removerUltimoItem = array => array.slice(0, -1)

console.log(removerUltimoItem([1, 2, 3, 4, 5]))

/*
  08
  
  - Crie uma função que retorna se o valor passado como argumento em sua  
    invocação é null.
*/

verificarNull = valor => valor === null

let exemplo1 = null
let exemplo2 = "Algum valor"

console.log("Exemplo 1 é null:", verificarNull(exemplo1))
console.log("Exemplo 2 é null:", verificarNull(exemplo2))

/*
  09
  
  - Crie uma função que apenas invoca uma função de callback recebida por  
    parâmetro;
  - Crie outra função que apenas exibe seu nome no console;
  - Invoque a função que recebe um callback por parâmetro, passando como  
    argumento a função que exibe seu nome no console e veja se o nome realmente  
    foi exibido.
*/

invocarCallback = callback => callback()

function exibirNome() {
    console.log("Meu nome é Hugo.")
}

invocarCallback(exibirNome)

/*
  10
  
  - Crie uma função que invoca uma função de callback recebida por parâmetro.  
    A invocação da função recebida por parâmetro deve receber um valor como  
    argumento;
  - Crie uma função que retorna o triplo de um número recebido por parâmetro;
  - Faça com que a invocação da função descrita no 1º item deste exercício (10)  
    resulte no triplo de 33.
*/

CallbackComValor = (callback, valor) => callback(valor)

triplo = (numero) => numero * 3

console.log("O triplo de 33 é:", CallbackComValor(triplo, 33))

/*
  11
  
  - Utilizando um forEach, baseado no array "numbers", a cada iteração, exiba a  
    mensagem abaixo no console, substituindo os "X" pelas informações corretas;
    
    "O Xº item do array [X, X, X] é X."
*/

const numbers = [1, 2, 3]

numbers.forEach(function(numero, indice) {
    console.log(`O ${indice + 1}º item do array [${numbers}] é ${numero}.`)
}
)

/*
  12
  
  - Converta o for loop abaixo em um forEach;
  - Após a conversão, verifique se a cópia do array lettersCopy realmente foi  
    criada.
*/

const letters = ['v', 'e', 'p']
let lettersCopy = []

// for (let i = 0; i < letters.length; i++) {
//     lettersCopy.push(letters[i])
// }

letters.forEach(function(letra) {
    lettersCopy.push(letra)
});

console.log("Array original:", letters)
console.log("Cópia do array:", lettersCopy)