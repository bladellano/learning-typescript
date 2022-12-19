import Veiculo from "./Veiculo";

class Moto extends Veiculo {
  public acelerar(): void {
    this.velocidade += 5;
  }
}

export default Moto;
