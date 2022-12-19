"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MotoDao = void 0;
const Moto_1 = __importDefault(require("./Moto"));
class MotoDao {
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
        return new Moto_1.default();
    }
    selecionar(id) {
        console.log("Lógica de selecionar");
        return new Moto_1.default();
    }
    selecionarTodos() {
        console.log("Lógica de selecionar todos");
        return [new Moto_1.default()];
    }
}
exports.MotoDao = MotoDao;
