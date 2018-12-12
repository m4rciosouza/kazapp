package com.kazale.curso.p002;

public class IfElse {
  public static void main(String[] args) {
    boolean passouNoTeste = true;
    int nota = 80;

    if (passouNoTeste) {
      System.out.println("Passou no teste!");
    }

    if (!passouNoTeste) {
      System.out.println("Não passou no teste.");
    }

    if (nota >= 70) {
      System.out.println("Passou no teste!");
    }

    if (nota >= 70 && nota <= 80) {
      System.out.println("Passou no teste com nota B.");
    }

    if (passouNoTeste || nota >= 70) {
      System.out.println("Passou no teste!");
    }

    if (passouNoTeste) {
      System.out.println("Passou no teste!");
    } else {
      System.out.println("Não passou no teste.");
    }

    if (nota % 2 == 0) {
      System.out.println("Nota é um número par.");
    } else {
      System.out.println("Nota é um número ímpar.");
    }

    if (nota < 70) {
      System.out.println("Não passou no teste.");
    } else if (nota >= 70 && nota <= 90) {
      System.out.println("Passou no teste com nota B.");
    } else {
      System.out.println("Passou no teste com nota A.");
    }

  }   
}

