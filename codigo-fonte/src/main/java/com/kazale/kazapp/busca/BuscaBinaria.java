package com.kazale.kazapp.busca;

public class BuscaBinaria {

    /**
     * Implementação do algoritmo de busca binária.
     * A busca binária possui performance de ordem O(log n).
     * Ela parte do princípio de que receberá uma lista ordenada.
     *
     * @param numeros - lista contendo os números utilizados para a busca.
     * @param numero - número a ser encontrado na lista.
     *
     * @return int - índice do número na lista, ou -1 caso não encontrado.
     */
    public int buscar(int[] numeros, int numero) {
        int indice = -1;
        if (numeros == null) {
            return indice;
        }

        int inicio = 0;
        int meio;
        int fim = numeros.length - 1;

        while (inicio <= fim) {
            meio = (inicio + fim) / 2;
            if (numeros[meio] < numero) {
                inicio = meio + 1;
            } else if (numeros[meio] > numero) {
                fim = meio - 1;
            } else if (numeros[meio] == numero) {
                indice = meio;
                break;
            }
        }

        return indice;
    }
}
