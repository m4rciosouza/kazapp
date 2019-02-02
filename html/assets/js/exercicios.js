function calcularJavaBasicoExercicios() {
    var resultados = [
        { res: "2", sel: $("input[name='p1']:checked").val() },
        { res: "2", sel: $("input[name='p2']:checked").val() },
        { res: "4", sel: $("input[name='p3']:checked").val() },
        { res: "4", sel: $("input[name='p4']:checked").val() },
        { res: "1", sel: $("input[name='p5']:checked").val() },
        { res: "3", sel: $("input[name='p6']:checked").val() }
    ];
    var totalAcertos = 0;
    var resultadoFinal;
    for (var i in resultados) {
        if (resultados[i].res === resultados[i].sel) {
            totalAcertos++;
        }
    }
    resultadoFinal = Math.round(totalAcertos / resultados.length * 100);
    if (resultadoFinal >= 70) {
        $(".passou").show();
        $(".naoPassou").hide();
    } else {
        $(".passou").hide();
        $(".naoPassou").show();
    }
    $("#resultado").text(resultadoFinal);
}

function calcularBigOExercicios() {
    var resultados = [
        { res: "2", sel: $("input[name='p1']:checked").val() },
        { res: "2", sel: $("input[name='p2']:checked").val() },
        { res: "4", sel: $("input[name='p3']:checked").val() },
        { res: "3", sel: $("input[name='p4']:checked").val() },
        { res: "3", sel: $("input[name='p5']:checked").val() },
        { res: "4", sel: $("input[name='p6']:checked").val() }
    ];
    var totalAcertos = 0;
    var resultadoFinal;
    for (var i in resultados) {
        if (resultados[i].res === resultados[i].sel) {
            totalAcertos++;
        }
    }
    resultadoFinal = Math.round(totalAcertos / resultados.length * 100);
    if (resultadoFinal >= 70) {
        $(".passou").show();
        $(".naoPassou").hide();
    } else {
        $(".passou").hide();
        $(".naoPassou").show();
    }
    $("#resultado").text(resultadoFinal);
}

$("input:radio").click(function() {
    $("."+this.name).removeClass("success");
    $("."+this.name).addClass("primary");
    $("."+this.name+"r"+this.value).removeClass("primary");
    $("."+this.name+"r"+this.value).addClass("success");
});