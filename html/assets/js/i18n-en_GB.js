var i18nTraducao = {
    "en_GB": {
        "off-canvas": [
            { "i18n-off-canvas-1": "Language" },
            { "i18n-off-canvas-2": "English" },
            { "i18n-off-canvas-3": "Portuguese" },
            { "i18n-off-canvas-4": "About :)" },
            { "i18n-off-canvas-5": "Kazapp - Java and Algorithms" }
        ],
        "paginacao": {
            "proximo": "Next",
            "anterior": "Previous"
        },
        "botoes": {
            "concluir-licao": "Complete lesson",
            "sair-licao": "Leave lesson"
        },
        "index": { 
            "title": "Learn Java and Algorithms | Kazapp",
            "t1": "Basic Java",
            "t2": "Welcome to the basic Java module!",
            "t3": "Learn the basics of Java to follow the course.",
            "t4": "This module is optional. You can enable the next module simply by completing the exercises with minimum grid of 70%!",
            "t5": "Good studies!",
            "t6": "\"Hello World!\"",
            "t7": "If/Else",
            "t8": "For",
            "t9": "While/Do While",
            "t10": "Switch",
            "t11": "Exercises",
            "t12": "Finish the previous module to enable the next modules.",
            "t13": "Big-O Notation",
            "t14": "Welcome to the Big-O Notation module!",
            "t15": "Learn to measure the performance of your algorithm with Big-O notation.",
            "t16": "This module is fundamental for learning algorithms, because with Big-O notation you will be able to check if your algorithm has a good performance, resulting in the creation of high-standard algorithms.",
            "t17": "Good studies!",
            "t18": "Definition",
            "t19": "O(n<sup>2</sup>)",
            "t20": "O(log n)",
            "t21": "Exercises",
            "t22": "Lesson unavailable.",
            "t23": "To enable it, you must complete the lessons before it, or the exercises of the module successfully, when available."
        },
        "ola-mundo": { 
            "title": "Learn Java and Algorithms | Kazapp"
        }
    }
};

function inicializar() {
    var lingua = localStorage["lingua"];
    if (!lingua || !i18nTraducao[lingua]) {
        return;
    }
    var pathCompleto = location.pathname.split("/");
    var pathPagina = pathCompleto[pathCompleto.length-1].split(".")[0];
    document.title = i18nTraducao[lingua][pathPagina].title;
    // menu off-canvas
    for (var i in i18nTraducao[lingua]["off-canvas"]) {
        var pos = parseInt(i, 10) + 1;
        $(".i18n-off-canvas-" + pos).text(i18nTraducao[lingua]["off-canvas"][i]["i18n-off-canvas-" + pos]);
    }
    // paginação
    $(".i18n-pag-anterior").text(i18nTraducao[lingua].paginacao.anterior);
    $(".i18n-pag-proximo").text(i18nTraducao[lingua].paginacao.proximo);
    // botões de ação
    $(".i18n-concluir-licao").text(i18nTraducao[lingua].botoes["concluir-licao"]);
    $(".i18n-sair-licao").text(i18nTraducao[lingua].botoes["sair-licao"]);
    // outros
    $(".i18n").each(function() {
        var dataI18n = $(this).attr("data-i18n").split("-");
        if (dataI18n && dataI18n.length === 2) {
            $(this).html(i18nTraducao[lingua][dataI18n[0]][dataI18n[1]]);
        }
    });
}

inicializar();

I18nTraducao = {
    definirLingua: function(lingua) {
        if (lingua === "en_GB" || lingua === "pt_BR") {
            localStorage['lingua'] = lingua;
            location.reload();
        }
    }
};
