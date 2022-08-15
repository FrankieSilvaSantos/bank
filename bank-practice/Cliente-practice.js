export class Cliente {
rg;
cpf;
nome;


get cpf() {
    this.cpf = cpf;
}

get rg() {
    this.rg = rg;
}

constructor(nome,cpf) {
    this.nome = nome;
    this.cpf = cpf;
}
}