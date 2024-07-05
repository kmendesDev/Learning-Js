import {Cliente} from "./Cliente.js"
import {ContaCorrente} from "./ContaCorrente.js"
const cliente1 = new Cliente();
cliente1.nome = "Ricardo";
cliente1.cpf = 11122233309;

const cliente2 = new Cliente();
cliente2.nome = "Alice";
cliente2.cpf = 88822233309;

// console.log(cliente1);
// console.log(cliente2);

const contaCorrenteRicardo = new ContaCorrente();
//contaCorrenteRicardo.saldo = 10000;
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;

contaCorrenteRicardo.depositar(500);

const conta2 = new ContaCorrente();
conta2.cliente = cliente2;
conta2.agencia=1002;

let valorTransf = 300
contaCorrenteRicardo.transferir(valorTransf, conta2);

console.log(contaCorrenteRicardo)
console.log(conta2.cliente);
console.log(conta2.saldo);



// const valorSacado = contaCorrenteRicardo.sacar(50)
// console.log("Saque",valorSacado)


