package kazapp;

public class BuscaLinear {

    /**
     * Implementação do algoritmo de busca linear.
     * A busca linear possui performance de ordem O(n).
     *
     * @param numeros - lista contendo os números utilizados para a busca.
     * @param numero - número a ser encontrado na lista.
     *
     * @return int - índice do número na lista, ou -1 caso não encontrado.
     */
    public int buscar(int[] numeros, int numero) {
        if (numeros == null) {
            return -1;
        }
        for (int i=0; i < numeros.length; i++) {
            if (numeros[i] == numero) {
                return i;
            }
        }
        return -1;
    }

}
