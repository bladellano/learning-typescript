"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Dao = void 0;
class Dao {
    constructor() {
        this.nomeTabela = "";
    }
    inserir(object) {
        console.log("Lógica de insert");
        return true;
    }
    atualizar(object) {
        console.log("Lógica de atualizar");
        return true;
    }
    remover(id) {
        console.log("Lógica de remover");
        return Object();
    }
    selecionar(id) {
        console.log("Lógica de selecionar");
        return Object();
    }
    selecionarTodos() {
        console.log("Lógica de selecionar todos");
        return [Object()];
    }
}
exports.Dao = Dao;
