/* commenterle code
function calculer_somme(a, b) {
    // Demander à l'utilisateur quelle opération il veut faire
let operation = prompt("Quelle opération voulez-vous effectuer ? (addition, soustraction, multiplication, division)");
// condition if else if pour chaque opération
function calculer_somme(a, b) {
    if (operation === "addition") {
        let somme =  additionner(a, b);
        document.writeln(" resultat de l'addition : " + somme);
    }
    else if (operation === "soustraction") {
        let difference = soustraire(a, b);
        document.writeln(" resultat de la soustraction : " + difference);
    }
    else if (operation === "multiplication") {
        let produit = multiplier(a, b);
        document.writeln(" resultat de la multiplication : " + produit);
    }
    else if (operation === "division") {
        let quotient = diviser(a, b);
        document.writeln(" resultat de la division : " + quotient);
    }
    else {
        document.writeln("Opération non reconnue.");
    }
}
// fonctions pour chaque opération
function additionner(a, b) {
    return a + b;
}
function soustraire(a, b) {
    return a - b;
}
function multiplier(a, b) {
    return a * b;
}
function diviser(a, b) {
    if (b !== 0) {
        return a / b;
    } else {
        return "Erreur : Division par zéro.";
    }
}
}
*/

// innerHTML on l'évite souvent pour des raisons de sécurité (XSS)
//textContent est plus sûr et rapide à utiliser
 
/*function verifierAge() {
    const age= document.getElementById("age").value;
    const p =document
    console.log(age);
    if (age < 18) {
        p.textContent = "Vous êtes mineur.";

        document.getElementById("result").innerText = "Vous êtes mineur.";
    } else if (age >= 18 && age <= 99) {
        p.textContent = "Vous êtes majeur.";
    } else {
        p.textContent = "Âge invalide.";
 
    }
}
*/

/*function verifierformulaire() {

    const nom = document.getElementById("nom").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (nom === "" || email === "") {
        message.textContent = "Veuillez remplir tous les champs obligatoires.";
        message.style.color = "1px solid red";
    } else {
        message.textContent = "Formulaire soumis avec succès !";
        message.style.color = "1px solid green";
    }
}*/

const slides = [
    {src: "msc1.JPG",
        titre: "Titre 1",

},
{src: "image2.jpg",
    titre: "Titre 2",

},
{src: "image3.jpg",
    titre: "Titre 3",

},

]

function afficherSlide() {

    let image=document.getElementById("image");
    let titre=document.getElementById("titre"); 
    image.src=slides[index].src;
    titre.textContent=slides[index].titre;
} 
function suivante() {
index=(index + 1) % slides.length;
afficherSlide();


}
function retour() {
    index=(index - 1 + slides.length) % slides.length;
    afficherSlide();

}