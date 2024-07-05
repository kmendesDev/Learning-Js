
import {Cliente} from "./Cliente.js" 

export class ContaCorrente {
    agencia;
    _cliente;

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }
    }

    get cliente(){
        return this._cliente;
    }
    // Atributo privado: #saldo
    // Convenção atual:
    _saldo = 0;

    get saldo(){
        return this._saldo;
    }

    // MÉTODO:
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            console.log("Saque realizado")
            console.log("Saldo atual:", this._saldo);
            return valor;
        }
        else {
            console.log("Saque não autorizado")
            console.log("Saldo atual:", this._saldo);
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor;
            console.log("Depósito realizado")
        }
        else {
            console.log("Depósito não autorizado")
        }
        console.log("Saldo atual:", this._saldo);
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}