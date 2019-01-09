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
        },
        "olaMundo": { 
            "t1": "Home",
            "t2": "Basic Java",
            "t3": "\"Hello World!!!\"",
            "t4": "Installing Java",
            "t5": "Java needs to be run on a virtual machine, the Java Virtual Machine (JVM)",
            "t6": "For the development of Java applications, we need to install the Java Development Kit (JDK), which allows us to compile and execute Java code.",
            "t7": "To install JDK, we must download it",
            "t8": "here",
            "t9": "Accessing the URL above, download the operating system and run the installer.",
            "t10": "To verify your installation, run the following command on the terminal:",
            "t11": "You should see something similar to:",
            "t12": "Creating the first program - \"Hello World!\"",
            "t13": "First, create in a directory a file called <b>HelloWorld.java</b>, with the following content:",
            "t14": "After the file creation, we must compile the same with the following command (executed by the terminal in the root of the directory where you created the file):",
            "t15": "After compilation, the <b>HelloWorld.class</b> file will be generated in the same directory.",
            "t16": "To run the code, run the following command in the root of the directory where you created the Java file:",
            "t17": "You should see the following:",
            "t18": "Using an IDE",
            "t19": "In the course we will use only the command line to create the files, but you can use an IDE to make it easier, so you can download the <a href=\"https://www.jetbrains.com/idea/download\" target=\"_ blank\">IntelliJ</a> or the <a href=\"https://www.eclipse.org/downloads\" target=\"_blank\">Eclipse</a> for example.",
            "t20": "Understanding the code - \"Hello world!\"",
            "t21": "Let's start by looking at the class declaration line:",
            "t22": "<b>public</b> means that the class can be accessed from anywhere, it is public.",
            "t23": "Classes scope",
            "t24": "There are other class scopes, such as <b>protected</b>, <b>private</b> and <b>default</b>, which will be displayed in the future, for now we will use only <b>public</b>.",
            "t25": "<b>class</b> means that this file is a class, which will be used to create objects (instances) in Java, and every class must have a name, in our case <b>HelloWorld</b>.",
            "t26": "Classes names",
            "t27": "There is a convention in class nomenclature, which is basically the first letter always capital, and for each new word we always use the first capital letter as well. We must not use spaces or special characters in your name.",
            "t28": "File names",
            "t29": "All files must be named with the same name defined in the class, plus the <b>.java</b> extension.",
            "t30": "Next we have the main method <b>main</b>, which is the default method in Java classes to run whenever we execute it, as follows:",
            "t31": "In this method the <b>public</b> statement means that the method is public, which means it can be accessed from any location, visible by any other class that has access to an instance of the class.",
            "t32": "<b>static</b> means that the method is static, that is, that it can be accessed without an instance of the class, is an operator that we will study in more detail later.",
            "t33": "<b>void</b> means that the method returns no value.",
            "t34": "The <b>String [] args</b> means that the <b>main</b> method when executed, if values are passed through the command line, information is available in this list of Strings.",
            "t35": "Finally, we use the standard command to print a line in the terminal, according to the following code:"
        }
    }
};

function inicializar() {
    var lingua = localStorage["lingua"];
    // código fonte
    $(".source-code").each(function() {
        if ($(this).hasClass("code-" + lingua)) {
            $(this).show();
        } else {
            $(this).hide();
        }
    });
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
