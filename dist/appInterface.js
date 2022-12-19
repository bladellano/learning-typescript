"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ConcessionariaDao_1 = require("./ConcessionariaDao");
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const PessoaDao_1 = require("./PessoaDao");
const Pessoa_1 = __importDefault(require("./Pessoa"));
const CarroDao_1 = require("./CarroDao");
const Carro_1 = __importDefault(require("./Carro"));
const MotoDao_1 = require("./MotoDao");
const Moto_1 = __importDefault(require("./Moto"));
/** Concessionaria */
let dao = new ConcessionariaDao_1.ConcessionariaDao();
let concessionaria = new Concessionaria_1.default("Av Paulista", []);
let response = dao.inserir(concessionaria);
console.log("response", response);
/** Pessoa */
let daoPessoa = new PessoaDao_1.PessoaDao();
let pessoa = new Pessoa_1.default("João", "GrandSiena");
response = daoPessoa.inserir(pessoa);
console.log("response", response);
console.log(daoPessoa.selecionarTodos());
/** Carro */
let daoCarro = new CarroDao_1.CarroDao();
let carro = new Carro_1.default("Corsa", 4);
response = daoCarro.inserir(carro);
console.log("response", response);
/** Moto */
let daoMoto = new MotoDao_1.MotoDao();
let moto = new Moto_1.default();
response = daoMoto.inserir(moto);
console.log("response", response);
