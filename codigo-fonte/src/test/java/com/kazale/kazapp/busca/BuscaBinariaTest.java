package com.kazale.kazapp.busca;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class BuscaBinariaTest {

    private static final int[] LISTA_NUMEROS = { 1, 2, 3, 5, 6, 9, 10, 20, 40, 100 };
    private static final int NUMERO_PRESENTE_LISTA = 10;
    private static final int NUMERO_NAO_PRESENTE_LISTA = 50;
    private static final int INDICE_NUMERO_EX_LISTA = 6;
    private static final int INDICE_NAO_ENCONTRADO = -1;

    private final BuscaBinaria buscaBinaria = new BuscaBinaria();

    @Test
    public void listaNulaTest() {
        int indice = buscaBinaria.buscar(null, NUMERO_PRESENTE_LISTA);

        assertEquals(INDICE_NAO_ENCONTRADO, indice);
    }

    @Test
    public void listaVaziaTest() {
        int indice = buscaBinaria.buscar(new int[0], NUMERO_PRESENTE_LISTA);

        assertEquals(INDICE_NAO_ENCONTRADO, indice);
    }

    @Test
    public void buscaComSucessoPrimeiraPosicaoTest() {
        int primeiroNumeroLista = LISTA_NUMEROS[0];
        int indice = buscaBinaria.buscar(LISTA_NUMEROS, primeiroNumeroLista);

        assertEquals(0, indice);
    }

    @Test
    public void buscaComSucessoTest() {
        int indice = buscaBinaria.buscar(LISTA_NUMEROS, NUMERO_PRESENTE_LISTA);

        assertEquals(INDICE_NUMERO_EX_LISTA, indice);
    }

    @Test
    public void buscaComSucessoUltimaPosicaoTest() {
        int indiceUltimoNumeroLista = LISTA_NUMEROS.length - 1;
        int ultimoNumeroLista = LISTA_NUMEROS[indiceUltimoNumeroLista];
        int indice = buscaBinaria.buscar(LISTA_NUMEROS, ultimoNumeroLista);

        assertEquals(indiceUltimoNumeroLista, indice);
    }

    @Test
    public void elementoNaoEncontrado() {
        int indice = buscaBinaria.buscar(LISTA_NUMEROS, NUMERO_NAO_PRESENTE_LISTA);

        assertEquals(INDICE_NAO_ENCONTRADO, indice);
    }
}
