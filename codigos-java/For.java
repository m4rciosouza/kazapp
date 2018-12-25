public class For {
  public static void main(String[] args) {
    int[] numeros = new int[] { 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 };
    
    for (int i=0; i<=10; i++) {
      System.out.println(i);
    }

    for (int i=10; i>=0; i--) {
      System.out.println(i);
    }

    for (int i=0; i<=10; i++) {
      if (i % 2 == 0) {
        continue;
      }
      System.out.println(i);
    }

    for (int i=0; i<=10; i++) {
      System.out.println(i);
      if (i == 5) {
        break;
      }
    }

    for (int numero: numeros) {
      System.out.println(numero);
    }
  }
}
