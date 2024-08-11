const languageButton = document.querySelector('.language-button');
const languageList = document.querySelector('.language-list');

languageButton.addEventListener('click', () => {
    languageList.style.display = languageList.style.display === 'none' ? 'block' : 'none';
});