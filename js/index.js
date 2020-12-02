const nav = document.querySelector('.nav');
const signUp = document.querySelector('.content-pick');
const img = document.querySelector('img');
const footer = document.querySelector('footer');
const firstButton = document.querySelector('.btn');

nav.addEventListener('click', function(event){
    console.log('the better way to add future functionality');
});

document.addEventListener('keydown', function(event){
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

// changing the footer color when you move your mouse over it 
footer.addEventListener('mouseover', e => {
    e.target.style.backgroundColor = 'skyblue';
});

footer.addEventListener('mouseleave', e => {
    e.target.style.backgroundColor = '';
});


// changing the color of the first button upon mouseover

firstButton.addEventListener('mouseover', (event) => {
    event.target.style.backgroundColor = 'black';
    event.target.style.borderColor = 'red';
  })

  firstButton.addEventListener('mouseleave', (event) => {
    event.target.style.backgroundColor = '';
    event.target.style.borderColor = '';
  })

// added 3 layers of interactivity to the nav links 
Array.from(document.links).forEach(function (link) {
    link.addEventListener('click', function (event) {
        console.log(
            `disrupting the default behavior of '${event.target.textContent}' link`
            );
        event.preventDefault();
    }); 
    link.addEventListener('mouseover', e => {
        e.target.style.borderBottom = '1px dotted black';
        e.target.style.fontSize = '2em';
    })
    link.addEventListener('mouseleave', e => {
        e.target.style.border = '';
        e.target.style.fontSize = '';
    })
});