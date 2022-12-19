import { DaoInterface } from "./DaoInterface";

export class Dao<T> implements DaoInterface<T> {
  nomeTabela: string = "";

  inserir(object: T): boolean {
    console.log("Lógica de insert");
    return true;
  }
  atualizar(object: T): boolean {
    console.log("Lógica de atualizar");
    return true;
  }

  remover(id: number): T {
    console.log("Lógica de remover");
    return Object();
  }

  selecionar(id: number): T {
    console.log("Lógica de selecionar");
    return Object();
  }
  selecionarTodos(): [T] {
    console.log("Lógica de selecionar todos");
    return [Object()];
  }
}
