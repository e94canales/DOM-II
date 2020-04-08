// GET  
const get = (selector) => {
    return document.querySelector(selector)
}


// VARIABLES
const landing = get('#welcome');
const body = get('body');
const navLinks = document.querySelectorAll('nav a')
const letsGoImg = document.querySelectorAll('.content-section img')[0];
const advImg = document.querySelectorAll('.content-section img')[1];
const rollButton = get('.rollit button')
const destination = get('.rollit p');


// HANDLERS

// --- LANDING --- //
function hideLanding (e) {
    if (window.pageYOffset > 25){
        landing.classList.add('off')
    } 
    else {
        landing.classList.remove('off')
    }
    // console.log(window.pageYOffset)
}

body.onscroll = hideLanding;
// --- LANDING END --- //

// --- NAV HOVERS --- //
function linkHover (e){
    this.classList.add('linkHov') 
}
function linkHoverOut (e){
    this.classList.remove('linkHov') 
}
navLinks[0].addEventListener('mouseover', linkHover)
navLinks[1].addEventListener('mouseover', linkHover)
navLinks[2].addEventListener('mouseover', linkHover)
navLinks[3].addEventListener('mouseover', linkHover)

navLinks[0].addEventListener('mouseout', linkHoverOut)
navLinks[1].addEventListener('mouseout', linkHoverOut)
navLinks[2].addEventListener('mouseout', linkHoverOut)
navLinks[3].addEventListener('mouseout', linkHoverOut)
// --- NAV END --- //

// --- IMAGES  --- //
function hoverFX (e){
    letsGoImg.classList.add('hovFx')
    // console.log('test')
}
function hoverOutFX (e){
    letsGoImg.classList.remove('hovFx')
}
function popIt (e){
    letsGoImg.classList.add('popOut')
}
function popItNot (e){
    letsGoImg.classList.remove('popOut')
}

letsGoImg.addEventListener('mouseover', hoverFX);
letsGoImg.addEventListener('mouseout', hoverOutFX);
letsGoImg.addEventListener('click', popIt);
letsGoImg.addEventListener('mousedown', popItNot);

//-----//

function hoverFX2 (e){
    advImg.classList.add('hovFx')
    // console.log('test')
}
function hoverOutFX2 (e){
    advImg.classList.remove('hovFx')
}
function popIt2 (e){
    advImg.classList.add('popOut')
}
function popItNot2 (e){
    advImg.classList.remove('popOut')
}

advImg.addEventListener('mouseover', hoverFX2);
advImg.addEventListener('mouseout', hoverOutFX2);
advImg.addEventListener('click', popIt2);
advImg.addEventListener('mousedown', popItNot2);


function getCountry () {
    let randomIndex = Math.floor(Math.random() * 249)
    return countries[randomIndex]
  }

function roll (e){
    let country = getCountry();
    destination.classList.remove('off');
    destination.innerText = `Your next destination is ${country}`
}

rollButton.addEventListener('click', roll)
