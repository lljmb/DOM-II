const nav = document.querySelector('.nav');
const signUp = document.querySelector('.content-pick');
const img = document.querySelector('.destination');
const header = document.querySelector("header");

nav.addEventListener('click', function(event){
    console.log('the better way to add future functionality');
});

document.addEventListener('keydown', function(event){
    // if the event object contains the key escape, kill modal
    if (event.key === 'Escape'){
        console.log('GET OUT OF HERE!!');
    }
});

signUp.addEventListener('click', function(event){
    console.log('HAPPY BIRTHDAY TRIN!!');
});

img.addEventListener('mouseover', function(event){
    console.log('yo baby yo baby YO');
});

Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event) {
        console.log(
            `disrupting the default behavior of '${event.target.textContent}' link`
            );
        event.preventDefault();
    }); 
});