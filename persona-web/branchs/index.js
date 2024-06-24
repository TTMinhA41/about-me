const doc = document;
const themeButton = doc.getElementById('theme-mode');

themeButton.addEventListener ('click', () => {
    doc.body.classList.toggle('dark-mode');
    if(doc.body.classList.contains('dark-mode')){
        themeButton.classList.remove('fa-moon-o');
        themeButton.classList.add('fa-sun-o');
    }
    else{
        themeButton.classList.remove('fa-sun-o');
        themeButton.classList.add('fa-moon-o');
    }
})