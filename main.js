//on ecoute le chargement de la page
document.addEventListener('DOMContentLoaded', function(){

  // appel de la function init
  init();

})

//function qui initialise
function init(){

  
  let deleteButtons;
  let contactList;
  let counter;
  //recherche des elements a
  deleteButtons = document.getElementsByTagName('a');
  //longueur du tableau d'element a
  buttonLength = deleteButtons.length;
  //recherche des elements qui ont la classe contact
  contactList = document.getElementsByClassName('contact');
  //recherhce de l'element qui a l'id counter
  counter = document.getElementById('counter');

  //actualise le h3 du compteur
  counter.childNodes[1].innerHTML = "Compteur : " + contactList.length;

  //boucle pour gerer ecouter le click sur tous les elements du tableau deleteButtons
  for( let i = 0; i < buttonLength; i++){

    //tous les elements du tableau deleteButtons , on ecoute le click
    deleteButtons[i].addEventListener('click', function( ){

        // appel de la function pour supprimer
        onDelete( event, counter, contactList );

    })
  }

  //appel de la function pour ajouter
  add();
}

//function pour gérer la suppression
function onDelete(event, counter, contactList){

  //supprime le grand-parent de l'element sur lequel on a cliqué
  event.target.parentNode.parentNode.remove();

  //actualise le h3 du compteur
  counter.childNodes[1].innerHTML = "Compteur : " + contactList.length;

}

//function pour ajouter l'element
function add(){
  
  //on cherche l'element qui a l'id add
  let addContactButton = document.getElementById('add');
  

  //ecoute de l'event click sur le bouton contenu dans addContactButton
  addContactButton.addEventListener('click', addContent)

 
}

function addContent(){

  //on cherche l'element qui a la classe content
  let sectionContent = document.querySelector('.content');
  //on cherche l'element qui a l'id description
  let textarea = document.getElementById('description');

   //template de l'article que je ajouter au dom
  let value = `<article class="contact">
  <img src="img/profils1.png" alt="profil1">
  <h2>Profil 1</h2>
  <p>${textarea.value}</p>
  <a href="#"><i class="fa fa-trash" aria-hidden="true"></i></a>
  </article>`;

  //ajout dans le dom de l'article dans la section
  sectionContent.innerHTML += value ;

  init();

  // remet à zero le contenu du textarea
  textarea.value = "";
}

function myFilter() {
  let input, filter, ul, article, h2, i, txtValue, searchButton;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  ul = document.getElementById("myUL");
  article = ul.getElementsByTagName("article");
  for (i = 0; i < article.length; i++) {
      h2 = article[i].getElementsByTagName("h2")[0];
      txtValue = h2.textContent || h2.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          article[i].style.display = "";
      } else {
          article[i].style.display = "none";
      }
  }
}


