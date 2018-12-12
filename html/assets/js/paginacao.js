var Paginacao = {
    pagAtual: 1,
    paginas: [1],

    init: function(numPaginas) {
        this.paginas = [];
        for (var n=1; n<=numPaginas; n++) {
            this.paginas.push(n);
        }
    },

    paginaAnterior: function() {
        if (this.pagAtual === 1) {
            $('.anterior').addClass('disabled');
            return;
        }
        this.pagAtual--;
        if (this.pagAtual < this.paginas.length) {
            $('.proxima').removeClass('disabled');
        }
        if (this.pagAtual === 1) {
            $('.anterior').addClass('disabled');
        } else {
            $('.anterior').removeClass('disabled');
        }
        this.paginar();
    },

    proximaPagina: function() {
        if (this.pagAtual === this.paginas[this.paginas.length-1]) {
            $('.proxima').addClass('disabled');
            return;
        }
        this.pagAtual++;
        if (this.pagAtual > 1) {
            $('.anterior').removeClass('disabled');
        }
        if (this.pagAtual === this.paginas[this.paginas.length-1]) {
            $('.proxima').addClass('disabled');
        } else {
            $('.proxima').removeClass('disabled');
        }
        this.paginar();
    },

    paginar: function() {
        for (i in this.paginas) {
            $('.pag' + this.paginas[i]).css('display', 'none');
        }
        $('.pag' + this.pagAtual).show();
        // paginacao
        var porcentagem = Math.round((this.pagAtual / this.paginas.length) * 100);
        $('.progress').attr('aria-valuenow', porcentagem);
        $('.progress').attr('aria-valuetext', porcentagem + ' percent');
        $('.progress-meter').width(porcentagem + '%');
        $('.progress-meter-text').text(porcentagem + '%');
        // botoes
        if (this.pagAtual === this.paginas.length) {
            $('.concluir').show();
            $('.sair').hide();
        } else {
            $('.concluir').hide();
            $('.sair').show();
        }
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
};
