/*====== MENU =====*/
const showMenu = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-menu')
      })
  }
}
showMenu('nav-toggle','nav-menu');

/* ==========   SHOW LIST   ========== */
const showList = (toggleId,navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show-list')
      })
  }
}

showList('nav-toggle','nav-list');

/* ==========   ANIMATION TOGGLE    ========== */
const hambToggle = (toggleId,navhomeId,navgalleryId,navTeamId) =>{
  const toggle = document.getElementById(toggleId),
  home = document.getElementById(navhomeId),
  gallery = document.getElementById(navgalleryId),
  team = document.getElementById(navTeamId)

  if(toggle && home && gallery && team){
      toggle.addEventListener('click', ()=>{
          toggle.classList.toggle('active')
      })
      home.addEventListener('click', ()=>{
          toggle.classList.toggle('active')
      })
      gallery.addEventListener('click', ()=>{
          toggle.classList.toggle('active')
      })
      team.addEventListener('click', ()=>{
        toggle.classList.toggle('active')
      })
    }
  }

hambToggle('nav-toggle', 'link-home', 'link-gallery', 'link-team');


/* ==========   REMOVE MENU   ========== */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  navMenu.classList.remove('show-menu')

  const navList = document.getElementById('nav-list')
  navList.classList.remove('show-list')
}

navLink.forEach(n => n.addEventListener('click', linkAction));

/* ==========   SCROLL ANIMATION NAVBAR   ========== */
window.addEventListener("scroll", function(){
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 200)
});

/* ==========   COUNTER ANIMATION   ========== */ 
const counters = document.querySelectorAll('.number-count');
const speed = 200;

counters.forEach( counter => {
 const animate = () => {
    const value = +counter.getAttribute('data-count');
    const data = +counter.innerText;
   
    const time = value / speed;
   if(data < value) {
        counter.innerText = Math.ceil(data + time);
        setTimeout(animate, 1);
      }else{
        counter.innerText = value;
      }
   
 }
 
 animate();
});

/* ==========   SWIPE REVEAL ANIMATION   ========== */ 
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});
