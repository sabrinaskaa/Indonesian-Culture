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

/* ==========   CULTURAL DIVERSITY   ========== */
let draggableSlider = function () {
    let swipe = document.querySelector(".slider-cd"),
      innerSwipe = document.querySelector(".slider-inner-cd");
  
    let pressed = false,
      startX,
      x;
  
    swipe.addEventListener("mousedown", (e) => {
      pressed = true;
      startX = e.offsetX - innerSwipe.offsetLeft;
      swipe.style.cursor = "pointer";
    });
  
    swipe.addEventListener("mouseenter", () => {
      swipe.style.cursor = "pointer";
    });
  
    swipe.addEventListener("mouseup", () => {
      swipe.style.cursor = "pointer";
    });
  
    window.addEventListener("mouseup", () => {
      pressed = false;
    });
  
    swipe.addEventListener("mousemove", (e) => {
      if (!pressed) return;
      e.preventDefault();
  
      x = e.offsetX;
  
      innerSwipe.style.left = `${x - startX}px`;
  
      checkBoundry();
    });
  
    function checkBoundry() {
      let outer = swipe.getBoundingClientRect(),
        inner = innerSwipe.getBoundingClientRect();
  
      if (parseInt(innerSwipe.style.left) > 0) {
        innerSwipe.style.left = "0px";
      } else if (inner.right < outer.right) {
        innerSwipe.style.left = `-${inner.width - outer.width}px`;
      }
    }
  };
  
  draggableSlider();

  /* ==========   CHANGE LAYER GALLERY   ========== */
  let changLayers = document.querySelectorAll(".gallery-pc-link button");

  for (let changeLayer of changLayers) {
    changeLayer.addEventListener('click', (e) => {
        const et = e.target;
        const activeButton = document.querySelector(".active-button");
        if (activeButton) {
            activeButton.classList.remove("active-button");
        }

        et.classList.add("active-button");

        let allLayer = document.querySelectorAll('.gallery-pr');
        for (let layer of allLayer) {
            if(layer.getAttribute('data-number') === changeLayer.getAttribute('data-number')) {
                layer.style.display = "flex";
            }
            else {
                layer.style.display = "none";
            }
        }
    });
  }
  
/* ===========    GALLERY SLIDERS    ========== */

let slidePosition = 0;
const slides = document.getElementsByClassName('gallery-penjelasan-slider');
const totalSlides = slides.length;

document.
getElementById('sliders-button--next')
.addEventListener("click", function() {
  moveToNextSlide();
});
document.
getElementById('sliders-button--prev')
.addEventListener("click", function() {
  moveToPrevSlide();
});

function updateSlidePosition() {
for (let slide of slides) {
  slide.classList.remove('gallery-penjelasan-slider--visible');
  slide.classList.add('gallery-penjelasan-slider--hidden');
}

slides[slidePosition].classList.add('gallery-penjelasan-slider--visible');
}

function moveToNextSlide() {
if (slidePosition === totalSlides - 1) {
  slidePosition = 0;
} else {
  slidePosition++;
}

updateSlidePosition();
}

function moveToPrevSlide() {
if (slidePosition === 0) {
  slidePosition = totalSlides - 1;
} else {
  slidePosition--;
}

updateSlidePosition();
};



let itemsPosition = 0;
const items = document.getElementsByClassName('slider-item-penjelasan');
const totalItems = items.length;

document.
getElementById('sliders-button--next')
.addEventListener("click", function() {
  moveToNextItems();
});
document.
getElementById('sliders-button--prev')
.addEventListener("click", function() {
  moveToPrevItems();
});

function updateItemsPosition() {
for (let item of items) {
  item.classList.remove('slider-item-penjelasan--visible');
  item.classList.add('slider-item-penjelasan--hidden');
}

items[itemsPosition].classList.add('slider-item-penjelasan--visible');
}

function moveToNextItems() {
if (itemsPosition === totalItems - 1) {
  itemsPosition = 0;
} else {
  itemsPosition++;
}

updateItemsPosition();
}

function moveToPrevItems() {
if (itemsPosition === 0) {
  itemsPosition = totalItems - 1;
} else {
  itemsPosition--;
}

updateItemsPosition();
};



let titleRumah = 0;
const titles = document.getElementsByClassName('rumah-title-slider');
const totalTitles = titles.length;

document.
getElementById('sliders-button-2--next')
.addEventListener("click", function() {
  moveToNextTitles();
});
document.
getElementById('sliders-button-2--prev')
.addEventListener("click", function() {
  moveToPrevTitles();
});

function updateTitlesPosition() {
for (let title of titles) {
  title.classList.remove('rumah-title-slider--visible');
  title.classList.add('rumah-title-slider--hidden');
}

titles[titleRumah].classList.add('rumah-title-slider--visible');
}

function moveToNextTitles() {
if (titleRumah === totalTitles - 1) {
  titleRumah = 0;
} else {
  titleRumah++;
}

updateTitlesPosition();
}

function moveToPrevTitles() {
if (titleRumah === 0) {
  titleRumah = totalTitles - 1;
} else {
  titleRumah--;
}

updateTitlesPosition();
};


let itemsRumah = 0;
const imgs = document.getElementsByClassName('slider-item-rumah');
const totalimgs = imgs.length;

document.
getElementById('sliders-button-2--next')
.addEventListener("click", function() {
  moveToNextImgs();
});
document.
getElementById('sliders-button-2--prev')
.addEventListener("click", function() {
  moveToPrevImgs();
});

function updateImgsPosition() {
for (let img of imgs) {
  img.classList.remove('slider-item-rumah--visible');
  img.classList.add('slider-item-rumah--hidden');
}

imgs[itemsRumah].classList.add('slider-item-rumah--visible');
}

function moveToNextImgs() {
if (itemsRumah === totalimgs - 1) {
  itemsRumah = 0;
} else {
  itemsRumah++;
}

updateImgsPosition();
}

function moveToPrevImgs() {
if (itemsRumah === 0) {
  itemsRumah = totalimgs - 1;
} else {
  itemsRumah--;
}

updateImgsPosition();
};


let titlePakaian = 0;
const ptitles = document.getElementsByClassName('pakaian-title-slider');
const totalptitles = ptitles.length;

document.
getElementById('sliders-button-3--next')
.addEventListener("click", function() {
  moveToNextPtitles();
});
document.
getElementById('sliders-button-3--prev')
.addEventListener("click", function() {
  moveToPrevPtitles();
});

function updatePtitlesPosition() {
for (let ptitle of ptitles) {
  ptitle.classList.remove('pakaian-title-slider--visible');
  ptitle.classList.add('pakaian-title-slider--hidden');
}

ptitles[titlePakaian].classList.add('pakaian-title-slider--visible');
}

function moveToNextPtitles() {
if (titlePakaian === totalptitles - 1) {
  titlePakaian = 0;
} else {
  titlePakaian++;
}

updatePtitlesPosition();
}

function moveToPrevPtitles() {
if (titlePakaian === 0) {
  titlePakaian = totalptitles - 1;
} else {
  titlePakaian--;
}

updatePtitlesPosition();
};


let itemsPakaian = 0;
const pitems = document.getElementsByClassName('slider-item-pakaian');
const totalpitems = pitems.length;

document.
getElementById('sliders-button-3--next')
.addEventListener("click", function() {
  moveToNextPitems();
});
document.
getElementById('sliders-button-3--prev')
.addEventListener("click", function() {
  moveToPrevPitems();
});

function updatePitemsPosition() {
for (let pitem of pitems) {
  pitem.classList.remove('slider-item-pakaian--visible');
  pitem.classList.add('slider-item-pakaian--hidden');
}

pitems[itemsPakaian].classList.add('slider-item-pakaian--visible');
}

function moveToNextPitems() {
if (itemsPakaian === totalpitems - 1) {
  itemsPakaian = 0;
} else {
  itemsPakaian++;
}

updatePitemsPosition();
}

function moveToPrevPitems() {
if (itemsPakaian === 0) {
  itemsPakaian = totalpitems - 1;
} else {
  itemsPakaian--;
}

updatePitemsPosition();
};


let titleMakanan = 0;
const mtitles = document.getElementsByClassName('makanan-title-slider');
const totalmtitles = mtitles.length;

document.
getElementById('sliders-button-4--next')
.addEventListener("click", function() {
  moveToNextMtitles();
});
document.
getElementById('sliders-button-4--prev')
.addEventListener("click", function() {
  moveToPrevMtitles();
});

function updateMtitlesPosition() {
for (let mtitle of mtitles) {
  mtitle.classList.remove('makanan-title-slider--visible');
  mtitle.classList.add('makanan-title-slider--hidden');
}

mtitles[titleMakanan].classList.add('makanan-title-slider--visible');
}

function moveToNextMtitles() {
if (titleMakanan === totalmtitles - 1) {
  titleMakanan = 0;
} else {
  titleMakanan++;
}

updateMtitlesPosition();
}

function moveToPrevMtitles() {
if (titleMakanan === 0) {
  titleMakanan = totalmtitles - 1;
} else {
  titleMakanan--;
}

updateMtitlesPosition();
};



let itemsMakanan = 0;
const mitems = document.getElementsByClassName('slider-item-makanan');
const totalmitems = mitems.length;

document.
getElementById('sliders-button-4--next')
.addEventListener("click", function() {
  moveToNextMitems();
});
document.
getElementById('sliders-button-4--prev')
.addEventListener("click", function() {
  moveToPrevMitems();
});

function updateMitemsPosition() {
for (let mitem of mitems) {
  mitem.classList.remove('slider-item-makanan--visible');
  mitem.classList.add('slider-item-makanan--hidden');
}

mitems[itemsMakanan].classList.add('slider-item-makanan--visible');
}

function moveToNextMitems() {
if (itemsMakanan === totalmitems - 1) {
  itemsMakanan = 0;
} else {
  itemsMakanan++;
}

updateMitemsPosition();
}

function moveToPrevMitems() {
if (itemsMakanan === 0) {
  itemsMakanan = totalmitems - 1;
} else {
  itemsMakanan--;
}

updateMitemsPosition();
};

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