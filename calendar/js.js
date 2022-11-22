const modal = document.querySelector('#modal');
 const openModal = documennt.querySelector('.open-button');
 const closeModal = document.querySelector('.close-button');

 openModal.addEventListener('click', () => {
    modal.showModal();
 })

 closeModal.addEventListener('click', () => {
    modal.close();
 })