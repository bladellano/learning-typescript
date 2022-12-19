import { ConcessionariaInterface } from "./ConcessionariaInterface";
import Carro from "./Carro";

export default class Concessionaria implements ConcessionariaInterface {
    private endereco: string;
    private listaDeCarros: Array<Carro>;
  
    constructor(endereco: string, listaDeCarro: Array<Carro>) {
      this.endereco = endereco;
      this.listaDeCarros = listaDeCarro;
    }
  
    public fornecedorEndereco(): string {
      return this.endereco;
    }
  
    public mostrarlistaDeCarros(): Array<Carro> {
      return this.listaDeCarros;
    }

    public fornecerHorariosDeFuncionamento(): string {
      return 'De segunda a sexta das 08:00 as 18:00 e sábado das 08:00 as 12:00'
    }
  }