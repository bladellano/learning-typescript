import { DaoInterface } from "./DaoInterface";
import Pessoa from "./Pessoa";

export class PessoaDao implements DaoInterface<Pessoa> {
  nomeTabela: string = "tb_concessionaria";

  inserir(object: Pessoa): boolean {
    console.log("Lógica de insert");
    return true;
  }
  atualizar(object: Pessoa): boolean {
    console.log("Lógica de atualizar");
    return true;
  }

  remover(id: number): Pessoa {
    console.log("Lógica de remover");
    return new Pessoa("", "");
  }

  selecionar(id: number): Pessoa {
    console.log("Lógica de selecionar");
    return new Pessoa("", "");
  }
  selecionarTodos(): [any] {
    console.log("Lógica de selecionar todos");
    return [new Pessoa("", "")];
  }
}
