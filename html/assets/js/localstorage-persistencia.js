var Persistencia = {
    
    dados: [
        { 
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
        return true;
    },
    
    completarMultiplos: function(listaSpanSelCompletar) {
        if (localStorage['kazapp-dados']) {
            this.dados = JSON.parse(localStorage['kazapp-dados']);
        }
        for (var i in this.dados) {
            for (var j in listaSpanSelCompletar) {
                if (this.dados[i]["span-sel"] === listaSpanSelCompletar[j]) {
                    this.dados[i]["span-class"] = 'success';
                    this.dados[i]["icon-class"] = 'fi-check';
                    this.dados[i]["icon-color-style"] = 'darkolivegreen';
                }
            }
        }
        localStorage['kazapp-dados'] = JSON.stringify(this.dados);
        return true;
    }
};
