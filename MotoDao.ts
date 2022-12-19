import { DaoInterface } from "./DaoInterface";
import Moto from "./Moto";

export class MotoDao implements DaoInterface<Moto> {
  nomeTabela: string = "tb_concessionaria";

  inserir(object: Moto): boolean {
    console.log("Lógica de insert");
    return true;
  }
  atualizar(object: Moto): boolean {
    console.log("Lógica de atualizar");
    return true;
  }

  remover(id: number): Moto {
    console.log("Lógica de remover");
    return new Moto();
  }

  selecionar(id: number): Moto {
    console.log("Lógica de selecionar");
    return new Moto();
  }
  selecionarTodos(): [any] {
    console.log("Lógica de selecionar todos");
    return [new Moto()];
  }
}
