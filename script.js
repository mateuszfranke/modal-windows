'use strict';

//Selectors
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const buttonCloseModal = document.querySelector('.close-modal');
const buttonsOpenModal = document.querySelectorAll('.show-modal');
//

//eventListeners
for(let i=0;i<buttonsOpenModal.length;i++){
   buttonsOpenModal[i].addEventListener('click', showModal);
} 
buttonCloseModal.addEventListener('click',closeModal);
//

function closeModal(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

function showModal(){
   modal.classList.remove('hidden');
   overlay.classList.remove('hidden');
}

