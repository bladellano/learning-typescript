import { DaoInterface } from "./DaoInterface";
import Carro from "./Carro";

export class CarroDao implements DaoInterface<Carro> {
  nomeTabela: string = "tb_concessionaria";

  inserir(object: Carro): boolean {
    console.log("Lógica de insert");
    return true;
  }
  atualizar(object: Carro): boolean {
    console.log("Lógica de atualizar");
    return true;
  }

  remover(id: number): Carro {
    console.log("Lógica de remover");
    return new Carro("", 0);
  }

  selecionar(id: number): Carro {
    console.log("Lógica de selecionar");
    return new Carro("", 0);
  }
  selecionarTodos(): [any] {
    console.log("Lógica de selecionar todos");
    return [new Carro("", 0)];
  }
}
