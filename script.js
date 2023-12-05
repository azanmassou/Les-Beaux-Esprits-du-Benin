// Récupération des pièces depuis le fichier JSON
// const reponse = await fetch("pieces-autos.json");
// const pieces = await reponse.json();


// const article = pieces[0];
// const imageElement = document.createElement("img");
// imageElement.src = article.image;
// const nomElement = document.createElement("h2");
// nomElement.innerText = article.nom;
// const prixElement = document.createElement("p");
// prixElement.innerText = `Prix: ${article.prix} €`;
// const categorieElement = document.createElement("p");
// categorieElement.innerText = article.categorie;


// const sectionFiches = document.querySelector(".fiches");
// sectionFiches.appendChild(imageElement);
// sectionFiches.appendChild(nomElement);
// sectionFiches.appendChild(prixElement);
// sectionFiches.appendChild(categorieElement);

// Creation des Balises 
const nomImage = document.createElement("img");
nomImage.src = "assets/drapeau.png"

const nomElement = document.createElement("h1");
nomElement.innerText = "Les Beaux Esprits du Benin";


// const navHeader = document.createElement("nav");

// const ulHeader = document.createElement("ul");

// const liHeader = document.createElement("li");

// const liaHeader = document.createElement("a");
// liaHeader.href = "contact.html"
// liaHeader.textContent = "Contact"

// Selection au niveau du DOM
const sectionFiches = document.querySelector(".header");


// Append Child Parents

sectionFiches.appendChild(nomImage);

sectionFiches.appendChild(nomElement);

// Les liens que vous souhaitez afficher dans la barre de navigation
var links = [
    { text: 'Accueil', url: '/' },
    { text: 'Services', url: '/services' },
    { text: 'Contact', url: '/contact' }
    // Ajoutez autant de liens que vous le souhaitez
  ];

  // Fonction pour générer la barre de navigation
  function generateNavigation() {
    var navElement = document.querySelector(".header");

    // Créez un élément <a> pour chaque lien et ajoutez-le à la barre de navigation
    links.forEach(function(link) {
      var aElement = document.createElement('a');
      aElement.href = link.url;
      aElement.textContent = link.text;
      navElement.appendChild(aElement);
    });
  }

  // Appelez la fonction pour générer la barre de navigation
  generateNavigation();