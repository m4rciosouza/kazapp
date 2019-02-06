package kazapp;

import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class BuscaLinearTest {

    private static final int[] LISTA_NUMEROS = { 1, 3, 5, 6, 2, 9, 10, 20, 100, 40 };
    private static final int NUMERO_PRESENTE_LISTA = 10;
    private static final int NUMERO_NAO_PRESENTE_LISTA = 50;
    private static final int INDICE_NUMERO_EX_LISTA = 6;
    private static final int INDICE_NAO_ENCONTRADO = -1;

    private final BuscaLinear buscaLinear = new BuscaLinear();

    @Test
    public void listaNulaTest() {
        int indice = buscaLinear.buscar(null, NUMERO_PRESENTE_LISTA);

        assertEquals(INDICE_NAO_ENCONTRADO, indice);
    }

    @Test
    public void listaVaziaTest() {
        int indice = buscaLinear.buscar(new int[0], NUMERO_PRESENTE_LISTA);

        assertEquals(INDICE_NAO_ENCONTRADO, indice);
    }

    @Test
    public void buscaComSucessoPrimeiraPosicaoTest() {
        int primeiroNumeroLista = LISTA_NUMEROS[0];
        int indice = buscaLinear.buscar(LISTA_NUMEROS, primeiroNumeroLista);

        assertEquals(0, indice);
    }

    @Test
    public void buscaComSucessoTest() {
        int indice = buscaLinear.buscar(LISTA_NUMEROS, NUMERO_PRESENTE_LISTA);

        assertEquals(INDICE_NUMERO_EX_LISTA, indice);
    }

    @Test
    public void buscaComSucessoUltimaPosicaoTest() {
        int indiceUltimoNumeroLista = LISTA_NUMEROS.length - 1;
        int ultimoNumeroLista = LISTA_NUMEROS[indiceUltimoNumeroLista];
        int indice = buscaLinear.buscar(LISTA_NUMEROS, ultimoNumeroLista);

        assertEquals(indiceUltimoNumeroLista, indice);
    }

    @Test
    public void elementoNaoEncontrado() {
        int indice = buscaLinear.buscar(LISTA_NUMEROS, NUMERO_NAO_PRESENTE_LISTA);

        assertEquals(INDICE_NAO_ENCONTRADO, indice);
    }

}
