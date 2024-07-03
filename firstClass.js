class Cliente{
    nome;
    cpf;
}
// CLASSE:
class ContaCorrente{
    agencia;
    // Atributo privado: #saldo
    // Convenção atual:
    _saldo=0;
    // MÉTODO:
    sacar(valor){
        if(this._saldo >= valor){
            this._saldo -= valor;
            console.log("Saque realizado")
            console.log("Saldo atual:",this._saldo);
            return valor;
        }
        else{
            console.log("Saque não autorizado")
            console.log("Saldo atual:",this._saldo);
        }
    }

    depositar(valor){
        if(valor > 0){
            this._saldo += valor;
            console.log("Depósito realizado")
        }
        else{
            console.log("Depósito não autorizado")
        }
        console.log("Saldo atual:",this._saldo);
    }
}

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

contaCorrenteRicardo.depositar(100)
contaCorrenteRicardo.depositar(300)
const valorSacado = contaCorrenteRicardo.sacar(50)
console.log("Saque",valorSacado)

console.log(contaCorrenteRicardo)

