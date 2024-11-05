const switchjaime = document.querySelectorAll('#icone');

switchjaime.forEach(icon => {
    icon.addEventListener('click', function () {
        const spanText = this.nextElementSibling;  // Sélectionne le <span> suivant l'icône
        spanText.classList.toggle('text-info');
        this.classList.toggle('fa-solid');
    });
});