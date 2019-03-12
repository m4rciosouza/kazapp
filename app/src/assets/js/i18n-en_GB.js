var i18nTraducao = {
    "en_GB": {
        "off-canvas": [
            { "i18n-off-canvas-1": "Language" },
            { "i18n-off-canvas-2": "English" },
            { "i18n-off-canvas-3": "Portuguese" },
            { "i18n-off-canvas-4": "About :)" },
            { "i18n-off-canvas-5": "Kazapp" }
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
        },
        "if-else": { 
            "title": "Learn Java and Algorithms | Kazapp"
        },
        "ifElse": { 
            "t1": "Home",
            "t2": "Basic Java",
            "t3": "When creating any code, we need to use conditional at all times to direct the execution steps of our algorithm.",
            "t4": "So there is the <b>if/else</b> command to allow us to execute a particular block of code depending on whether a condition is valid or not.",
            "t5": "The conditional to be executed can contain different variations, and next we will study the main ones.",
            "t6": "The If/Else in practice",
            "t7": "The simplest of these is the use of <b>if</b>, together with a single condition, according to the following code:",
            "t8": "Notice that we use the <b>if</b> keyword followed by the condition, which will be enclosed in parentheses.",
            "t9": "The condition should always return a Boolean value, so that the code contained in braces is executed or not.",
            "t10": "The operator \"!\" means that if the result of the condition is true, it will be converted to false, and vice versa.",
            "t11": "We can also use comparison operators, which are the \"==\", \"&lt;\", \"&gt;\", \"&ge;\" and \"&le;\", where we compare whether the values are equal, smaller, greater, greater or equal, and less or equal, respectively.",
            "t12": "Use of curly braces",
            "t13": "When we have a single line of code in our <b>if</b> block, we can simply omit the keys.",
            "t14": "Compound conditionals",
            "t15": "Using the \"and\" operator, represented by <b>&amp;&amp;</b>, and the \"or\" operator, represented by <b>||</b>, we can chain multiple conditions into a same <b>if</b>, according to the following code:",
            "t16": "Basically the \"and\" operator will cause the code block to run only if both conditions are true, while the \"or\" operator will execute if at least one of the conditions is true.",
            "t17": "Multiple conditionals",
            "t18": "Although there is no limit on conditions, adding many of them to a <b>if</b> will make the code difficult to read, so it is recommended that you limit the number of conditions in sequence to the maximum.",
            "t19": "If and Else together",
            "t20": "Many times we want to not only execute the code for the true result of a condition, but also for when the result is false, and for that we use <b>else</b>, according to the code below:",
            "t21": "In the first and second <b>if</b> of the code above, we perform an action for when the result is true, and another for when it is false (<b>else</b>).",
            "t22": "In the third <b>if</b> of the above code, we check not only two but three different conditions, combining <b>else</b> with <b>if</b>, where we can check how many conditions necessary.",
            "t23": "Module operator",
            "t24": "The operator \"%\", or module as it is called, returns the remainder of a division. A classic example is to test whether a number is even or odd, according to the above code, where when we divide a number by 2, if the remainder is 0, it means that it is even, and for any other value it will be odd.",
            "t25": "Multiple <b>if</b> and <b>else</b>",
            "t26": "Chaining multiple conditions is not always a good practice, and often the best thing to do is to use the <b>switch</b> operator for this, which we will study shortly.",
            "t27": "Let's practice?",
            "t28": "The best way to learn is to practice, so let's take a step by step to run the code studied in the previous classes.",
            "t29": "Create the <b>IfElse.java</b> file in a directory of your choice.",
            "t30": "Add the following code to it:",
            "t31": "Compile the source code, running on the terminal in the directory where the file was created:",
            "t32": "The <b>IfElse.class</b> file will be generated in the same directory.",
            "t33": "Run the compiled code in the terminal with:",
            "t34": "You should see the following in the terminal:",
            "t35": "Congratulations!!! You have successfully completed your study of the <b>if/else</b> command."
        },
        "for": { 
            "title": "Learn Java and Algorithms | Kazapp",
            "t1": "Home",
            "t2": "Basic Java",
            "t3": "The <b>for</b> loop is used when we want to perform an operation multiple times.",
            "t4": "Examples of their use would be to iterate under data lists, perform an operation for \"n\" times, among others.",
            "t5": "The <b>for</b> loop works with three parameters, separated by \";\", the first being the initialization of values, the second the end-of-execution condition, similar to the condition used in <b>if</b>, and the third is the increment criterion to satisfy the stop condition, defined in the previous condition.",
            "t6": "The <b>for</b> loop is most commonly used for iterations with a defined beginning and end, and although infinite loops can be made with it, what is recommended for such an operation would be the <b>while</b> loop, which we will study in sequence.",
            "t7": "The 'For' loop in practice",
            "t8": "Check the following code to see the use of the <b>for</b> loop:",
            "t9": "In the above code, in the first line, we create a list with numbers from 0 to 10, which we will use in the iteration in the <b>for</b> loop.",
            "t10": "Notice that in both <b>for</b> loops of the code above, we first initialize the control variable of our iterations, which in this case is the variable called \"i\".",
            "t11": "We start the first with the value 0 and the second with the value 10, because in the first loop <b>for</b> we want to print the numbers from 0 to 10, and in the second from 10 to 0.",
            "t12": "In the second parameter we have the loop end condition <b>for</b>, which indicates that we want to proceed with loop execution while the value of \"i\" is less than or equal to 10, or in the second case, while \"i\" is greater than or equal to 0. The condition is very similar to the one we saw earlier in <b>if</b>.",
            "t13": "The third parameter indicates how we will get from initialization to the stop condition, which in our case consists of incrementing the \"i\" in 1 to each loop in the first case, and decrementing \"i\" in 1 in the second case.",
            "t14": "Simulating the first  <b>for</b> loop",
            "t15": "In the case of the first <b>for</b> loop, we initialize the value of \"i\" with a value of 0, and for each iteration we print the current value of \"i\" in the terminal, and then increment it by 1. This process will be repeated until the condition is reached, which in this case is when the value of \"i\" is incremented to 11, stating that it is time to stop, since 11 is greater than 10, as we define our condition.",
            "t16": "In the terminal, the values should be printed as follows:",
            "t17": "'Break' and 'Continue'",
            "t18": "The <b>break</b> and <b>continue</b> are two elements that help us perform certain tasks within a <b>for</b> loop.",
            "t19": "The <b>continue</b> serves to move to the next iteration of the <b>for</b> loop as it is called, ignoring the code contained in the loop after its call.",
            "t20": "The <b>break</b> serves to exit the <b>for</b> loop, terminating its execution as it is called.",
            "t21": "Check the example of the following code:",
            "t22": "In the first line of the code above, we created a list of numbers, containing the values from 0 to 10, that we will use for the iteration of the data.",
            "t23": "In the first loop we use <b>continue</b>, where we want the number to be printed only if it is odd (given the condition in <b>if</b>), because if it is an even number, <b>continue</b> will be executed, ignoring the number print command.",
            "t24": "In the second loop we use <b>break</b>, where we will only print the numbers from 0 to 5, as <b>break</b> will run as soon as \"i\" is equal to 5, causing the <b>for</b> execution to be interrupted.",
            "t25": "Alternate 'For' loop",
            "t26": "Java has an alternate form of the <b>for</b> loop, typically used to iterate through object lists, since we will not indicate stop criteria, not even initialization.",
            "t27": "Notice the following code as the <b>for</b> loop is created, using only two attributes separated by \":\":",
            "t28": "In the first line of the code above, we created a list of numbers, containing the values from 0 to 10, that we will use for the iteration of the data.",
            "t29": "In the <b>for</b> loop we have two attributes, \"number\" and \"numbers\", where the first is the current value of the list to be iterated, and the second is the list with the data to be iterated.",
            "t30": "For each iteration of the loop <b>for</b>, for each value contained in \"numbers\", it will be assigned to the attribute \"number\", which should be of the same type as the values in our list (in our case <b>int</b>).",
            "t31": "Finally, even in our <b>for</b> loop, we only print the current number, which will be the numbers from 0 to 10 contained in our list.",
            "t32": "Java 8, Streams and Lambdas",
            "t33": "Java 8 has introduced a new feature called <b>Streams</b> and <b>Lambdas</b>, which allows us to iterate over lists in a way different from those previously mentioned.",
            "t34": "Besides iterating under lists, it allows to apply several other transformations like filter of data, mappings, among others.",
            "t35": "Due to its large amount of resources, we will study <b>Streams</b> and <b>Lambdas</b> separately, in a module only dedicated to them.",
            "t36": "Let's practice?",
            "t37": "The best way to learn is to practice, so let's take a step by step to run the code studied in the previous classes.",
            "t38": "Create the <b>For.java</b> file in a directory of your choice.",
            "t39": "Add the following code to it:",
            "t40": "Compile the source code, running on the terminal in the directory where the file was created:",
            "t41": "The <b>For.class</b> file will be generated in the same directory.",
            "t42": "Run the compiled code on the terminal with:",
            "t43": "You should see the following in the terminal:",
            "t44": "Congratulations!!! You have successfully completed your study of the <b>for</b> statement."
        },
        "do-while": { 
            "title": "Learn Java and Algorithms | Kazapp"
        },
        "doWhile": { 
            "t1": "Home",
            "t2": "Basic Java",
            "t3": "While and Do/While",
            "t4": "Both <b>while</b> and <b>do/while</b> are two operators used for iteration.",
            "t5": "Its big difference from the <b>for</b> loop is that it only has the stop condition in its declaration, leaving the initialization and increment of values to occur before or during the iteration command.",
            "t6": "The <b>while</b> has a variation called <b>do/while</b>, in which the difference occurs in checking the loop stop condition, since it will occur at the beginning for the <b>while</b>, and at the end for <b>do/while</b> statement.",
            "t7": "The 'while' in practice",
            "t8": "Let's start with an example of the <b>while</b> loop:",
            "t9": "In the code above, we created two variables, \"number\" and \"end\", which will contain the values of a counter and the information should end the execution of the loop, respectively.",
            "t10": "Next, we have the first <b>while</b> loop, which will run as long as the \"end\" value is other than \"true\". In the case of code, it will be executed only once, since the value of \"end\" is changed to \"true\" already in the first execution of the loop.",
            "t11": "In the second loop, we have a <b> while </ b> that will run as long as the \"number\" value is less than or equal to 10. Note that the \"number\" value is incremented by one each loop execution.",
            "t12": "Initialization and increase of values",
            "t13": "The second <b>while</b> command of the code above makes it very clear that initialization and incrementing of values, which do not occur in the definition of the loop command, but rather before and during execution.",
            "t14": "The initialization in the same code was done previously, when we defined \"number\" with the value \"1\", and the increment is done with the increment operator \"++\" inside the loop itself.",
            "t15": "Increment Operator",
            "t16": "You certainly noticed the use of the \"++\" operator to increase the \"number\" value in the above code.",
            "t17": "This operator is an alternative to the following written:",
            "t18": "The same code is valid for the decrement operator, which in this case would be \"--\".",
            "t19": "The 'do/while' in practice",
            "t20": "Let's now look at an example of the <while>do/while</b> loop:",
            "t21": "In the code above, we created the variable \"number\", which contains the initial value of our counter, which will be used to finish the execution of the loop.",
            "t22": "Next, we have the <b>do/while</b> loop, which will run as long as the \"number\" value is less than or equal to \"10\".",
            "t23": "The difference of this code to the one studied on the previous page is that the condition is checked at the end of the loop execution, and not at the beginning as <b>while</b>.",
            "t24": "When to use one or the other?",
            "t25": "The choice of which one to use will depend a lot on your algorithm, as both work very similarly, but in practice you will find that in most cases <b>while</b> will pertain to almost all cases, more used.",
            "t26": "The <b>do/while</b> will be used if you want an action to be executed at least once without the condition being verified.",
            "t27": "Let's practice?",
            "t28": "The best way to learn is to practice, so let's take a step by step to run the code studied in the previous classes.",
            "t29": "Create the <b>WhileDoWhile.java</b> file in a directory of your choice.",
            "t30": "Add the following code to it:",
            "t31": "Compile the source code, running on the terminal in the directory where the file was created:",
            "t32": "The <b>WhileDoWhile.class</b> file will be generated in the same directory.",
            "t33": "Run the compiled code in the terminal with:",
            "t34": "You should see the following in the terminal:",
            "t35": "Congratulations!!! You have successfully completed your study of the <b>while/do while</b> statement."
        },
        "switch-op": { 
            "title": "Learn Java and Algorithms | Kazapp"
        },
        "switchOp": { 
            "t1": "Home",
            "t2": "Basic Java",
            "t3": "The <b>switch</b> is a command used to execute a given action according to the value passed to it for verification.",
            "t4": "It receives a single parameter as input, and for this value it checks whether there is a (case) condition defined in it.",
            "t5": "The <b>switch</b> can have numerous \"cases\", as well as a default (default) coding, which will be executed if the input does not answer any \"case\".",
            "t6": "The <b>switch</b> is quite similar to <b>if/else</b>, but its great advantage is that its readability is best when we want to do multiple checks.",
            "t7": "'Switch' Syntax",
            "t8": "Check the following code for the <b>switch</b> statement definition:",
            "t9": "The <b>switch</b> receives a value that will be used in the case checks.",
            "t10": "Inside the <b>switch</b> we have the definitions of the conditions (case), where we check each of the possible values.",
            "t11": "We use <b>break</b>, which is optional to terminate execution for each case.",
            "t12": "We can also add the <b>default</b> entry, which is a special <b>case</b> for when no conditions are found.",
            "t13": "The 'switch' in practice",
            "t14": "Let's first study the use of the <b>switch</b> to return the name of a given month with a numeric value between 1 and 12.",
            "t15": "For any other value we returned that the month is invalid.",
            "t16": "See the code below:",
            "t17": "In the previous code we printed the value of month 7, which in the case is July.",
            "t18": "Syntax of the 'switch', second example",
            "t19": "In this second example, we will print all the names of the months from last month on the <b>switch</b> command.",
            "t20": "Here is the example code:",
            "t21": "Note the use of <b>break</b> only at the end of <b>case</b> 12, so that conditions will run sequentially from last month as a parameter.",
            "t22": "If a value other than 1 to 12 is passed, nothing will be printed because the <b>default</b> condition does not execute any commands.",
            "t23": "Use of the \"default\"",
            "t24": "Although the <b>default</b> command is optional, it is always recommended to use it, so we will be sure to treat all possible conditions in our <b>switch</b>.",
            "t25": "Syntax of the 'switch', third example",
            "t26": "In the third example, we will print the number of days of a given month.",
            "t27": "We will use clustered (s) to represent the 30-day, 31-day, and February-specific months, which may contain 28 or 29 days.",
            "t28": "Check the following code:",
            "t29": "Notice that we group <b>case</b> simply by adding the <b>case</b> entry, one following the other, without any implementation, until the last one has the code to handle all previous cases, followed by <b>break</b> to finish executing the command.",
            "t30": "This behavior is very similar to <b>if</b> using compound conditions with the \"or\" (<b>||</b>).",
            "t31": "The above example will print \"Number of days = 31\" because it is the number of days in month 7 (July).",
            "t32": "Let's practice?",
            "t33": "The best way to learn is to practice, so let's take a step by step to run the code studied in the previous classes.",
            "t34": "Create the <b>Switch.java</b> file in a directory of your choice.",
            "t35": "Add the following code to it:",
            "t36": "Compile the source code, running in the terminal in the directory where the file was created:",
            "t37": "The <b>Switch.class</b> file will be generated in the same directory.",
            "t38": "Run the compiled code on the terminal with:",
            "t39": "You should see the following in the terminal:",
            "t40": "Congratulations!!! You have successfully completed your study of the <b>switch</b> statement."
        },
        "java-basico-exercicios": { 
            "title": "Learn Java and Algorithms | Kazapp"
        },
        "javaBasicoExercicios": { 
            "t1": "Home",
            "t2": "Basic Java",
            "t3": "What is the command used to compile the source code in Java from the command line?",
            "t4": "java CLASS_NAME.java",
            "t5": "javac CLASS_NAME.java",
            "t6": "java -jar CLASS_NAME.java",
            "t7": "javaw CLASS_NAME.java",
            "t8": "What will be printed in the terminal when running the following code?",
            "t9": "The code does not compile.",
            "t10": "Passed the test with grade B.",
            "t11": "Passed the test with a grade other than B.",
            "t12": "Nothing is printed.",
            "t13": "What will be printed in the terminal when running the following code?",
            "t14": "The 'IF' line was executed.",
            "t15": "The code does not compile.",
            "t16": "Nothing is printed.",
            "t17": "The 'ELSE' line was executed.",
            "t18": "What will be printed in the terminal when running the following code?",
            "t19": "The numbers between 1 and 10.",
            "t20": "The code does not compile.",
            "t21": "The numbers between 0 and 10.",
            "t22": "The numbers between 0 and 9.",
            "t23": "What will be printed in the terminal when running the following code?",
            "t24": "The numbers between 1 and 10.",
            "t25": "The code does not compile.",
            "t26": "The numbers between 1 and 11.",
            "t27": "The numbers between 0 and 9.",
            "t28": "Given the following code, what is the value of the variable \"<b>month</b>\" so that the months \"October\", \"November\" and \"December\" are printed in the terminal?",
            "t29": "Check answers",
            "t30": "Result",
            "t31": "Congratulations, you have successfully completed the module!",
            "t32": "The minimum passing grade is 70%, please try again.",
            "t33": "You've got grade of",
            "t34": "",
            "t35": "Move to the next module",
            "t36": "Try again",
            "t37": "Exercises"
        }
    }
};

function inicializar() {
    var lingua = localStorage["lingua"] || "pt_BR";
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
    $(".menu-flag-pt_BR").hide();
    $(".menu-flag-en_GB").show();
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
