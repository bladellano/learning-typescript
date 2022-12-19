"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Concessionaria {
    constructor(endereco, listaDeCarro) {
        this.endereco = endereco;
        this.listaDeCarros = listaDeCarro;
    }
    fornecedorEndereco() {
        return this.endereco;
    }
    mostrarlistaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerHorariosDeFuncionamento() {
        return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00';
    }
}
exports.default = Concessionaria;
