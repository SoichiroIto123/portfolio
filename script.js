setTimeout(() => {
    const obj = document.querySelector('.scroll');
    obj.style.display = 'block';
}, 6250);



function closeMenu() {
    document.getElementById("menu-btn-check").checked = false;
}
document.addEventListener("click", function(event) {
    if (event.target.tagName === "A" && event.target.getAttribute("href").charAt(0) === "#" && document.getElementById("menu-btn-check").checked) {
      closeMenu();
    }
});



const fadeTargets = document.querySelectorAll(".target");
const fadeOption = {
    root: null,
    rootMargin: "0% 0px",
    threshold: 0
};
  
const targets = (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
};
  
const fadeObserver = new IntersectionObserver(targets, fadeOption);
  
fadeTargets.forEach((target) => {
    fadeObserver.observe(target);
});


let targets2 = document.querySelectorAll('.graph');
window.addEventListener('scroll', function () {
  var scroll = window.scrollY; 
  var windowHeight = window.innerHeight; 
  for (let target of targets2) { 
    var targetPos = target.getBoundingClientRect().top + scroll; 
    if (scroll > targetPos - windowHeight) { 
      target.classList.add('is-animated');
    }
  }
});




const radioButtons = document.querySelectorAll('input[name=radioBtn]');

const slideInterval = 5000;
let count = 0;
let timeoutId;

function slideImage() {
  radioButtons[count++ % radioButtons.length].checked = true;
  timeoutId = setTimeout(slideImage, slideInterval);
}
slideImage();

for(let i = 0; i < radioButtons.length; i++) {
  radioButtons[i].addEventListener('click', function() {
    count = i;
    if(timeoutId) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(slideImage, slideInterval);
    }
  });
}

window.addEventListener("scroll", function() {

  let scroll = window.pageYOffset;

  if (scroll > 1250) {
    document.body.style.backgroundColor = '#ffffff';
  } else {
    document.body.style.backgroundColor = '#000000';
  } 
});