import { Dao } from "./Dao";
import Concessionaria from "./Concessionaria";
import Pessoa from "./Pessoa";

let concessionaria = new Concessionaria('',[])
let pessoa = new Pessoa('','')

let daoConcessionaria:Dao<Concessionaria> = new Dao<Concessionaria>();
daoConcessionaria.inserir(concessionaria)

let daoPessoa:Dao<Pessoa> = new Dao<Pessoa>();
daoPessoa.inserir(pessoa)
daoPessoa.remover(0)