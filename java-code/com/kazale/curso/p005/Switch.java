package com.kazale.curso.p005;

public class Switch {
  public static void main(String[] args) {
    int mes = 7;
    int ano = 2018;
    int numDias = 0;
    String nomeMes;

    switch (mes) {
      case 1:
        nomeMes = "Janeiro";
        break;
      case 2:
        nomeMes = "Fevereiro";
        break;
      case 3:
        nomeMes = "Março";
        break;
      case 4:
        nomeMes = "Abril";
        break;
      case 5:
        nomeMes = "Maio";
        break;
      case 6:
        nomeMes = "Junho";
        break;
      case 7:
        nomeMes = "Julho";
        break;
      case 8:
        nomeMes = "Agosto";
        break;
      case 9:
        nomeMes = "Setembro";
        break;
      case 10:
        nomeMes = "Outubro";
        break;
      case 11:
        nomeMes = "Novembro";
        break;
      case 12:
        nomeMes = "Dezembro";
        break;
      default:
        nomeMes = "Mês inválido";
        break;
    }
    System.out.println(nomeMes);

    switch (mes) {
      case 1:  System.out.println("Janeiro");
      case 2:  System.out.println("Fevereiro");
      case 3:  System.out.println("Março");
      case 4:  System.out.println("Abril");
      case 5:  System.out.println("Maio");
      case 6:  System.out.println("Junho");
      case 7:  System.out.println("Julho");
      case 8:  System.out.println("Agosto");
      case 9:  System.out.println("Setembro");
      case 10: System.out.println("Outubro");
      case 11: System.out.println("Novembro");
      case 12: System.out.println("Dezembro");
               break;
      default: break;
    }

    switch (mes) {
      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        numDias = 31;
        break;
      case 4: case 6: case 9: case 11:
        numDias = 30;
        break;
      case 2:
        if (((ano % 4 == 0) && !(ano % 100 == 0)) || (ano % 400 == 0)) {
          numDias = 29;
        } else {
          numDias = 28;
        }
        break;
      default:
        System.out.println("Mês inválido.");
        break;
      }
      System.out.println("Número de dias = " + numDias);

  }
}
