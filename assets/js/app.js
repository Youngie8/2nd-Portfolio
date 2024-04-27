// Variables Declaration
const toggleBtn = document.querySelector('.togglebtn');
const closeBtn = document.querySelector('.closebtn');
const sideBar = document.querySelector('.side-bar');
const topSection = document.querySelector('.top');
const container = document.querySelector('.container');
// Animation functions
function animateOnScroll() {
  const elements = document.querySelectorAll('.fade-in');
  elements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;
    const elementBottom = element.getBoundingClientRect().bottom;
    const viewportHeight = window.innerHeight;
    
    if (elementTop < viewportHeight && elementBottom >= 0) {
      element.classList.add('active');
    } 
  });
}

window.addEventListener('scroll', animateOnScroll);

window.addEventListener('load', animateOnScroll);

// Button functions
toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('toggle');
    topSection.classList.toggle('top-block');
    
});
closeBtn.addEventListener('click', function(){
    sideBar.classList.toggle('toggle');
    topSection.classList.toggle('top-block');
});