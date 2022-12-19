import Carro from "./Carro";
import Pessoa from "./Pessoa";
import Concessionaria from "./Concessionaria";

/* --- Criar carros --- */
let carroA = new Carro("dodge journey", 4);
let carroB = new Carro("veloster", 3);
let carroC = new Carro("cerato", 4);

/* --- Montar a lista de carros da concessionaria --- */
let listaDeCarros: Array<Carro> = [carroA,carroB,carroC]

let concessionaria = new Concessionaria("Av. Paulista", listaDeCarros);

/* --- Exibir lista de carros --- */
console.table(concessionaria.mostrarlistaDeCarros());

/* --- Comprar carro --- */

let pessoa = new Pessoa("João", "veloster");
console.log("> Carro preferido: ", pessoa.dizerCarroPreferido());

concessionaria.mostrarlistaDeCarros().map((carro: Carro) => {
  if (carro["modelo"] == pessoa.dizerCarroPreferido()) {
    pessoa.comprarCarro(carro); //Comprar o carro
  }
});

console.table(pessoa.dizerCarroQueTem());
