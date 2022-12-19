import { ConcessionariaDao } from "./ConcessionariaDao";
import Concessionaria from "./Concessionaria";

import { PessoaDao } from "./PessoaDao";
import Pessoa from "./Pessoa";

import { CarroDao } from "./CarroDao";
import Carro from "./Carro";

import { MotoDao } from "./MotoDao";
import Moto from "./Moto";

/** Concessionaria */
let dao: ConcessionariaDao = new ConcessionariaDao();
let concessionaria = new Concessionaria("Av Paulista", []);
let response = dao.inserir(concessionaria);
console.log("response", response);

/** Pessoa */
let daoPessoa: PessoaDao = new PessoaDao();
let pessoa: Pessoa = new Pessoa("João", "GrandSiena");
response = daoPessoa.inserir(pessoa);
console.log("response", response);
console.log(daoPessoa.selecionarTodos());

/** Carro */
let daoCarro: CarroDao = new CarroDao();
let carro: Carro = new Carro("Corsa", 4);
response = daoCarro.inserir(carro);
console.log("response", response);

/** Moto */
let daoMoto: MotoDao = new MotoDao();
let moto: Moto = new Moto();
response = daoMoto.inserir(moto);
console.log("response", response);
