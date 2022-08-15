export class ContaCorrente {
    static contador = 0;
    agencia;
    saldo = 0;
    cliente;

    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this.cliente = novoValor;
        }
    }

    get cliente() {
        return this.cliente;
    }

    get saldo() {
        return this.saldo;
    }

    sacar(valor) {
        if(this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    depositar(valor) {
        if (valor >= 0) {
            this.saldo +=valor;
        }
    }

    constructor() {
        ContaCorrente.contador +=1;
    }
}