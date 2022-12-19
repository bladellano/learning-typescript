"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dao_1 = require("./Dao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
let concessionaria = new Concessionaria_1.default('', []);
let pessoa = new Pessoa_1.default('', '');
let daoConcessionaria = new Dao_1.Dao();
daoConcessionaria.inserir(concessionaria);
let daoPessoa = new Dao_1.Dao();
daoPessoa.inserir(pessoa);
daoPessoa.remover(0);
