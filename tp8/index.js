function calcul_moyenne() {
    var n1 = prompt("donner le note 1:");
    var n2 = prompt("donner le note 2:");
    var n3 = prompt("donner le note 3:");

    var somme = Number(n1) + Number(n2) + Number(n3);
    document.write("voici la somme:" + somme +"<br>");
    var moyenne = somme / 3;
    document.write("voici la moyenne:" + moyenne + "<br>");

    if (moyenne<10) {
        document.write("Redoublant");
    }
    else if ( moyenne <12) {
        document.write("Admis-passable");
    }
    else if (moyenne <14) {
        document.write("Admis-bien");
    }
    else if (moyenne >= 14) {
        document.write("Admis-très bien");
    }
    // appel de la fonction de retour au menu
    retour_menu();
}

function retour_menu() {
    document.write("<br><br><a href='index.html'>Retour au menu</a>");
}

function test_temperature() {
    var temp = prompt("donner la temperature:");
    document.write("la temperature est :" + temp + "<br>");
    if (temp < 10) {
        document.write("Froid");
    }
    else if (temp >= 10 && temp <= 25) {
        document.write("Normal");
    }
    else if (temp > 25) {
        document.write("Chaud");
    }
    // appel de la fonction de retour au menu
    retour_menu();
}
function retour_menu() {
    document.write("<br><br><a href='index.html'>Retour au menu</a>");
}

function comparer_nombres() {
    var varl1 = prompt("donner le nombre 1:");
    var varl2 = prompt("donner le nombre 2:");

    document.write("le nombre 1 est :" + varl1 + "<br>");
    document.write("le nombre 2 est :" + varl2 + "<br>");

    if (varl1 > varl2) {
        document.write("le nombre 1 est plus grand que le nombre 2");
    }
    else if (varl1 < varl2) {
        document.write("le nombre 2 est plus grand que le nombre 1");
    }
    else if (varl1 == varl2) {
        document.write("les deux nombres sont égaux");
    }
    // appel de la fonction de retour au menu
    retour_menu();
}
function retour_menu() {
    document.write("<br><br><a href='index.html'>Retour au menu</a>");
}