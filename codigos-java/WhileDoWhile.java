public class WhileDoWhile {
  public static void main(String[] args) {
    int numero = 1;
    boolean fim = false;

    while (!fim) {
      System.out.println("Ainda não terminou...");
      fim = true;
    }

    while (numero <= 10) {
      System.out.println(numero);
      numero++;
    }

    numero = 1;
    do {
      System.out.println(numero);
      numero++;
    } while (numero <= 10);

  }
}
