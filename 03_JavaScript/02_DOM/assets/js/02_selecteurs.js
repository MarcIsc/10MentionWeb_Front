// Afin de modifier notre page HTML selon les intéractions d'un utilisateur, nous allons modifier notre DOM grâce a JavaScript.

//----------------------
    // SELECTIONNER NOS ELEMENTS
//----------------------

// Selection via TAG

let tittle = document.getElementsByTagName('h1');
console.log(tittle);

let lesP = document.getElementsByTagName('p'); // Ici on cherche, tous les paragraphes de notre page
// On récupère un Array (tableau) d'éléments. 
console.log(lesP);

// Grace a ma variable dans laquelle j'ai sélectionné tous les P, je peux viser un seul des éléments grâce à son index. Pour faire du CSS j'utilise la propriété 'style' suivi des mêùe déclaration que j'utilise en CS, avec du camelCase a la place de Kebab-case.
// La propriété 'style' permet d'acceder finement au style qui concerne un élément particulier.

lesP[0].style.backgroundColor = 'red';
lesP[0].style.color = 'white';
lesP[0].style.fontWeight = 'bold';

// Selection via ID

let titre = document.getElementById('Titre')

titre.style.backgroundColor = ('blue')
console.log(titre)

// Selectin via Classe
let selectClass = document.getElementsByClassName('selectClass')

console.log(selectClass);

// Lorsqu'on sélectionne plusieurs éléments en même temps avec getElementsByClassName, on crée un array en JavaScript qui affiche dans la console avec l'intitulé HTMLCollection. Comme un tableau, le premier élément aura l'index 0.

selectClass[1].style.backgroundColor = ('yellow');
console.log(selectClass[1]);
console.log(selectClass[1].innerHTML);


// innerHTML est une propriété en JavaScript qui permet d'accéder ou de définir le contenu HTML d'un élément. Elle renvoie ou modifie le contenu HTML (c'est-à-dire les balises et le texte) à l'intérieur de l'élément spécifié.

// Mini Exo 1 : Modifier le contenu du h2 qui a la classe .subtitle : 'Je change le titre, youhou'

let subtitle = document.getElementsByClassName('subtitle')
subtitle[0].innerHTML = '<strong> bonjours </strong>';

console.log('subtitle');

//--------------------------
    // mini exo 2
//--------------------------



lesP[0].style.textTransform = ('uppercase')
lesP[0].innerHTML = ('Je change le Titre, youhou')

for(let i = 0; i< lesP.length; i++){
    lesP[i].style.textTransform = "uppercase";
};
console.log(lesP)

// Boucle for of : Je déclare une variable 'p' qui représente chaque élément dans le tableau lesP, au niveau de l'instruction à exécuter j'apelle la variable 'p' en lui attribuant le style souhaité avec la propriété style. 
 
for ( let p of lesP ){
    p.style.textTransform = "uppercase";
}







