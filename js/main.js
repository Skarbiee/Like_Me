// Sélectionne tous les éléments avec l'id icone
const switchjaime = document.querySelectorAll('#icone'); 

// Ajoute un écouteur pour chaque icone
// Sélectionne le <span> suivant l'icône
// Ajoute ou retire la classe text-info
// Bascule entre fa-regular et fa-solid
switchjaime.forEach(icon => {                       
    icon.addEventListener('click', function () {
        const likeText = this.nextElementSibling;   
        likeText.classList.toggle('text-info');     
        this.classList.toggle('fa-solid');          
    });
});