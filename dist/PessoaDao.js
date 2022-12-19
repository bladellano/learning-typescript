"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaDao = void 0;
const Pessoa_1 = __importDefault(require("./Pessoa"));
class PessoaDao {
    constructor() {
        this.nomeTabela = "tb_concessionaria";
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
        return new Pessoa_1.default("", "");
    }
    selecionar(id) {
        console.log("Lógica de selecionar");
        return new Pessoa_1.default("", "");
    }
    selecionarTodos() {
        console.log("Lógica de selecionar todos");
        return [new Pessoa_1.default("", "")];
    }
}
exports.PessoaDao = PessoaDao;
