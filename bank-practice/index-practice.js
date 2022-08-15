import {Cliente} from "./Cliente-practice.js";
import {ContaCorrente} from "./ContaCorrente-practice.js";

const cliente1 = new Cliente();
cliente1.nome = "Frankie";
cliente1.cpf = 2222222;
cliente1.rg = 3333333;


const contaFrankie = new ContaCorrente();
contaFrankie.agencia = 1001;
contaFrankie.saldo = 300;
contaFrankie.cliente = cliente1;

contaFrankie.depositar(300);
contaFrankie.sacar(50);
console.log(contaFrankie);



console.log(cliente1);
console.log("Numero de contas: ",ContaCorrente.contador);

