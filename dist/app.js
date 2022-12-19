"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
/* --- Criar carros --- */
let carroA = new Carro_1.default("dodge journey", 4);
let carroB = new Carro_1.default("veloster", 3);
let carroC = new Carro_1.default("cerato", 4);
/* --- Montar a lista de carros da concessionaria --- */
let listaDeCarros = [carroA, carroB, carroC];
let concessionaria = new Concessionaria_1.default("Av. Paulista", listaDeCarros);
/* --- Exibir lista de carros --- */
console.table(concessionaria.mostrarlistaDeCarros());
/* --- Comprar carro --- */
let pessoa = new Pessoa_1.default("João", "veloster");
console.log("> Carro preferido: ", pessoa.dizerCarroPreferido());
concessionaria.mostrarlistaDeCarros().map((carro) => {
    if (carro["modelo"] == pessoa.dizerCarroPreferido()) {
        pessoa.comprarCarro(carro); //Comprar o carro
    }
});
console.table(pessoa.dizerCarroQueTem());
