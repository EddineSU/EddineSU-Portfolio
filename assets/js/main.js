/*===== VOIR LE MENU MOBILE =====*/ 
// Fonction pour afficher/cacher le menu mobile lorsque l'icône de menu est cliquée
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
// Appel de la fonction showMenu avec les identifiants des éléments de menu mobile
showMenu('nav-toggle','nav-menu')


/*==================== CACHER LE MENU MOBILE ====================*/
// Lorsqu'on clique sur un lien du menu mobile, le menu mobile se cache
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))



/*===== EFFET DECOUVERTE AU SCROLL =====*/
// Initialise la bibliothèque ScrollReveal pour révéler progressivement les éléments lors du défilement
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2000,
    delay: 200,
//     reset: true
});

// Révélation des éléments avec des effets lors du défilement
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200});
