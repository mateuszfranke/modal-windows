'use strict';

const escapeKey = 'Escape';
//Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
//

//eventListeners
for (let i = 0; i < buttonsOpenModal.length; i++) {
    buttonsOpenModal[i].addEventListener('click', showModal);
}
buttonCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);
document.addEventListener('keydown', function (event) {
    if (event.key === escapeKey)
        if(!modal.classList.contains('hidden')) closeModal();
})
//

function closeModal() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showModal() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

