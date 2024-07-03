
// DECLARANDO VARIÁVEIS E MOSTRANDO NA CONSOLE:

const title = "Working with variables";

console.log(title);

const idade = 27;
console.log(idade);

const idadeSomada = idade+2;
console.log(idadeSomada);

console.log(title,idadeSomada);

let nome = "Kaio";

console.log(`Meu nome é ${nome}`);

nome = nome+" Mendes";

console.log(`Meu nome é ${nome}`);


// LISTAS:
console.log("TRABALHANDO COM LISTAS: ")

const listaDestinos = new Array(
    "Salvador","Rio de Janeiro","São Paulo"
)

listaDestinos.push("Curitiba")
console.log("Destinos possíveis: ")
console.log(listaDestinos)

listaDestinos.splice(2,1) //deleta a terceira posição. Deleta apenas 1

console.log(listaDestinos)

console.log(listaDestinos[1]) //Mostra apenas o elemento na segunda posição(1)