document.addEventListener('DOMContentLoaded', () => {
    
    //get the DOM
    const closeErrMessageBtn = document.querySelector('.em-close');

    // Event Listener: Click => on closeErrMessageBtn and close the Error Message Block
    closeErrMessageBtn.addEventListener('click', (ev) => {
        const errorMessage = ev.target.parentElement.parentElement;
        errorMessage.classList.add('hide');
    })

})