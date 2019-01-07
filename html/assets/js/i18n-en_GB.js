var i18nTraducao = {
    "en_GB": {
        "off-canvas": {
            "i18n-off-canvas-1": "Kazapp - Java and Algorithms"
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
        }
    }
};

function getUrlVars() {
    var vars = [], hash;
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for(var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars.push(hash[0]);
        vars[hash[0]] = hash[1];
    }
    return vars;
}

function inicializar() {
    var lingua = getUrlVars()["lang"];
    if (!lingua || !i18nTraducao[lingua]) {
        return;
    }
    var pathCompleto = location.pathname.split("/");
    var pathPagina = pathCompleto[pathCompleto.length-1].split(".")[0];
    document.title = i18nTraducao[lingua][pathPagina].title;
    $(".i18n-off-canvas-1").text(i18nTraducao[lingua]["off-canvas"]["i18n-off-canvas-1"]);
    $(".i18n").each(function() {
        var dataI18n = $(this).attr("data-i18n").split("-");
        if (dataI18n && dataI18n.length === 2) {
            $(this).html(i18nTraducao[lingua][dataI18n[0]][dataI18n[1]]);
        }
    });
}

inicializar();
