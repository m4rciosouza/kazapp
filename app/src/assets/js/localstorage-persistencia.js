var API_BASE_URL            = "http://localhost:8888/kazapp/api/";
var URL_DADOS_USUARIO       = API_BASE_URL + "dados-usuario.php";
var URL_OBTER_DADOS_USUARIO = API_BASE_URL + "obter-dados-usuario.php?usuarioId=";

var Persistencia = {
    
    dados: [
        { // 001-java-basico
            "span-sel": ".ola-mundo", 
            "span-class": "warning", 
            "icon-sel": ".ola-mundo-i",
            "icon-class": "fi-play",
            "icon-color-style": "chocolate"
        },
        { 
            "span-sel": ".if-else", 
            "span-class": "secondary", 
            "icon-sel": ".if-else-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".for", 
            "span-class": "secondary", 
            "icon-sel": ".for-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".do-while", 
            "span-class": "secondary", 
            "icon-sel": ".do-while-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".switch-op", 
            "span-class": "secondary", 
            "icon-sel": ".switch-op-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".java-basico-exercicios", 
            "span-class": "alert", 
            "icon-sel": ".java-basico-exercicios-i",
            "icon-class": "fi-clipboard-pencil",
            "icon-color-style": "white"
        },
        { // 002-big-o
            "span-sel": ".big-o-introducao", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-introducao-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-n-fatorial", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-n-fatorial-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-n-2", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-n-2-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-n-log-n", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-n-log-n-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-n", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-n-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-log-n", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-log-n-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-1", 
            "span-class": "secondary", 
            "icon-sel": ".big-o-1-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".big-o-exercicios", 
            "span-class": "alert", 
            "icon-sel": ".big-o-exercicios-i",
            "icon-class": "fi-clipboard-pencil",
            "icon-color-style": "white"
        },
        { // 003-algoritmos-busca-1
            "span-sel": ".algoritmos-busca-1-introducao", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-busca-1-introducao-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-busca-1-busca-linear", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-busca-1-busca-linear-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-busca-1-busca-binaria", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-busca-1-busca-binaria-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-busca-1-exercicios", 
            "span-class": "alert", 
            "icon-sel": ".algoritmos-busca-1-exercicios-i",
            "icon-class": "fi-clipboard-pencil",
            "icon-color-style": "white"
        },
        { // 004-algoritmos-ordenacao-1
            "span-sel": ".algoritmos-ordenacao-1-introducao", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-ordenacao-1-introducao-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-ordenacao-1-ordenacao-insercao", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-ordenacao-1-ordenacao-insercao-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-ordenacao-1-ordenacao-selecao", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-ordenacao-1-ordenacao-selecao-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-ordenacao-1-ordenacao-flutuacao", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-ordenacao-1-ordenacao-flutuacao-i",
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        },
        { 
            "span-sel": ".algoritmos-ordenacao-1-exercicios", 
            //"span-class": "alert", 
            "span-class": "secondary", 
            "icon-sel": ".algoritmos-ordenacao-1-exercicios-i",
            //"icon-class": "fi-clipboard-pencil",
            //"icon-color-style": "white"
            "icon-class": "fi-lock",
            "icon-color-style": "#EEE"
        }
    ],
    
    init: function() {
        if (localStorage['kazapp-dados']) {
            this.dados = JSON.parse(localStorage['kazapp-dados']);
        }
        for (i in this.dados) {
            $(this.dados[i]["span-sel"]).addClass(this.dados[i]["span-class"]);
            $(this.dados[i]["icon-sel"])
                .addClass(this.dados[i]["icon-class"])
                .css("color", this.dados[i]["icon-color-style"]);
        }
        this.mailboxInit();
        if (!localStorage['kazapp-id']) {
            localStorage['kazapp-id'] = this.gerarIdUsuario();
        }
        this.sincronizarDados();
    },
    
    completar: function(spanSelCompletar, spanSelHabilitar) {
        if (localStorage['kazapp-dados']) {
            this.dados = JSON.parse(localStorage['kazapp-dados']);
        }
        var completarAtualizado = false;
        var habilitarAtualizado = false;
        for (var i in this.dados) {
            if (this.dados[i]["span-sel"] === spanSelCompletar) {
                if (this.dados[i]["span-class"] === 'success') {
                    return true;
                }
                this.dados[i]["span-class"] = 'success';
                this.dados[i]["icon-class"] = 'fi-check';
                this.dados[i]["icon-color-style"] = 'darkolivegreen';
                completarAtualizado = true;
            }
            if (this.dados[i]["span-sel"] === spanSelHabilitar) {
                this.dados[i]["span-class"] = 'warning';
                this.dados[i]["icon-class"] = 'fi-play';
                this.dados[i]["icon-color-style"] = 'chocolate';
                habilitarAtualizado = true;
            }
            if (completarAtualizado && habilitarAtualizado) {
                break;
            }
        }
        localStorage['kazapp-dados'] = JSON.stringify(this.dados);
        localStorage['kazapp-sincronizar'] = true;
        return true;
    },
    
    completarMultiplos: function(listaSpanSelCompletar) {
        if (localStorage['kazapp-dados']) {
            this.dados = JSON.parse(localStorage['kazapp-dados']);
        }
        for (var i in this.dados) {
            for (var j in listaSpanSelCompletar) {
                if (this.dados[i]["span-sel"] === listaSpanSelCompletar[j]) {
                    if (this.dados[i]["span-class"] === 'secondary') {
                        this.dados[i]["span-class"] = 'warning';
                        this.dados[i]["icon-class"] = 'fi-play';
                        this.dados[i]["icon-color-style"] = 'chocolate';
                    }
                }
            }
        }
        localStorage['kazapp-dados'] = JSON.stringify(this.dados);
        localStorage['kazapp-sincronizar'] = true;
        return true;
    },
    
    temAcesso: function(spanSel) {
        var temAcesso = this.temAcessoPagina(spanSel);
        if (!temAcesso) {
            $('#nao-tem-acesso').foundation('open');
        }
        return temAcesso;
    },
    
    temAcessoPagina: function(spanSel) {
        if (localStorage['kazapp-dados']) {
            this.dados = JSON.parse(localStorage['kazapp-dados']);
        }
        for (var i in this.dados) {
            if (this.dados[i]["span-sel"] === spanSel && 
                this.dados[i]["span-class"] !== "secondary") {
                return true;
            }
        }
        return false;
    },
    
    redirecionarIndex: function() {
        location.href = "../../index.html";
    },
    
    // mailbox:inicio
    mailbox: {
        total: 1,
        naoLidas: 1,
        naoLidasInfo: [
            { id: '#mail-1-subject', lida: false }//,
            //{ id: '#mail-2-subject', lida: false }
        ]
    },
    mailboxEstiloNaoLidas: function() {
        if (localStorage['kazapp-mail']) {
            this.mailbox = JSON.parse(localStorage['kazapp-mail']);
        }
        for (var i=0; i<this.mailbox.naoLidasInfo.length; i++) { 
            if (!this.mailbox.naoLidasInfo[i].lida) {
                $(this.mailbox.naoLidasInfo[i].id).css('fontWeight', 'bold');
            } else {
                $(this.mailbox.naoLidasInfo[i].id).css('fontWeight', 'normal');
            }
        }
    },
    mailMarcarLida: function(mailNumero) {
        if (!this.mailbox.naoLidasInfo[mailNumero-1].lida) {
            this.mailbox.naoLidas--;
        }
        this.mailbox.naoLidasInfo[mailNumero-1].lida = true;
        localStorage['kazapp-mail'] = JSON.stringify(this.mailbox);
        localStorage['kazapp-sincronizar'] = true;
        this.mailboxEstiloNaoLidas();
        // atualiza info top bar a direita
        if (this.mailbox.naoLidas > 0) {
            $('.mailbox-nao-lidas').html(this.mailbox.naoLidas.toString());
        } else {
            $('.mailbox-nao-lidas').css('display', 'none');
        }
    },
    mailboxInit: function() {
        if (!localStorage['kazapp-mail']) {
            localStorage['kazapp-mail'] = JSON.stringify(this.mailbox);
        } else {
            var kazappMail = JSON.parse(localStorage['kazapp-mail']);
            if (this.mailbox.naoLidasInfo.length != kazappMail.naoLidasInfo.length) {
                for (var k=kazappMail.naoLidasInfo.length; k<this.mailbox.naoLidasInfo.length; k++) {
                    kazappMail.naoLidasInfo.push(this.mailbox.naoLidasInfo[k]);
                    kazappMail.total++;
                    kazappMail.naoLidas++;
                }
                localStorage['kazapp-mail'] = JSON.stringify(kazappMail);
                localStorage['kazapp-sincronizar'] = true;
            }
        }
    },
    // mailbox:fim
    
    // sincronização:início
    sincronizarDados: function() {
        var dados = localStorage['kazapp-dados'] || false;
        var mail  = localStorage['kazapp-mail'] || false;
        if (!dados || !mail) {
            return;
        }
        var sincronizar = localStorage['kazapp-sincronizar'] || 'true';
        var idUsuario   = localStorage['kazapp-id'] || false;
        if (sincronizar == 'true' && idUsuario) {
            $.post(URL_DADOS_USUARIO, { 
                usuarioId: idUsuario, 
                dados: dados,
                mail: mail
            }).done(function() {
                localStorage['kazapp-sincronizar'] = false;
            });
        }
    },
    sincronizarIdUsuario: function(idUsuario) {
        if (!idUsuario) {
            return;
        }
        return $.getJSON(URL_OBTER_DADOS_USUARIO + idUsuario, function(data) {
            localStorage['kazapp-dados'] = data.dados;
            localStorage['kazapp-mail']  = data.mail;      
            localStorage['kazapp-id']    = data.usuario_id;
        });
    },
    gerarIdUsuario: function() {
        var prefixo = String.fromCharCode(this.gerarNumAleatorio(65, 91),
                                          this.gerarNumAleatorio(65, 91),
                                          this.gerarNumAleatorio(65, 91));
        var timestamp = new Date().getTime().toString();
        var sufixo = '-';
        for (var i=0; i<timestamp.length; i++) {
            sufixo += timestamp.charAt(i);
            if (i > 0 && i != (timestamp.length-1) && i % 4 == 0) {
                sufixo += '-';
            }
        }
        return prefixo + sufixo;
    },
    gerarNumAleatorio: function(min, max) {
        return Math.random() * (max - min) + min;
    }
    // sincronização:fim
};
