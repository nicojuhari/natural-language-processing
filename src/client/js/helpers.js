/* =============   Declaration part ============= */

/* Validate the URL */
export const validateUrl = (str) => {
    const urlRegex = /^(http|https):\/\/+(www.)*([a-z0-9]{2})\S*\.[a-z]{2,10}(\/)*(\S)*?$/gm;
    const url = new RegExp(urlRegex, 'i');
    return url.test(str);
}

/* Close the error message */
export const closeErrorMessage = () => {
    document.getElementById('error-message').classList.add('hide');
}

/* Show errors message block */
export const showErrorMessage = (msg) => {
    document.querySelector('.em-text').innerHTML = msg;
    document.getElementById('error-message').classList.remove('hide');
}

/* Show & hide loading gif */
export const loadingGif = (hide = '') => {
    hide === 'hide' ? document.getElementById('loading-gif').classList.add('hide') : document.getElementById('loading-gif').classList.remove('hide');
};

/* Show & hide REsult Block */
export const showOrHideResultBlock = (hide = '') => {
    hide === 'hide' ? document.getElementById('result-blocks').classList.add('hide') : document.getElementById('result-blocks').classList.remove('hide');
}