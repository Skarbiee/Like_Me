const switchjaime = document.querySelector('#icone');

// switchjaime.addEventListener('click', function () {
//     document.querySelectorAll('span').classList.toggle('text-info');
//     switchjaime.classList.toggle('fa-solid');
// });

function itemClicked(event) {
    if (event.target.tagName === 'I') { // Vérifie que l'élément cliqué est un <i>
        document.querySelector('span').classList.toggle('text-info');
        switchjaime.classList.toggle('fa-solid');
    }
}
switchjaime.addEventListener('click', itemClicked);