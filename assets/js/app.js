// Variables Declaration
const toggleBtn = document.querySelector('.togglebtn');
const closeBtn = document.querySelector('.closebtn');
const sideBar = document.querySelector('.side-bar');
const topSection = document.querySelector('.top');
const container = document.querySelector('.container');
// Animation functions

// Button functions
toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('toggle');
    topSection.classList.toggle('top-block');
    
});
closeBtn.addEventListener('click', function(){
    sideBar.classList.toggle('toggle');
    topSection.classList.toggle('top-block');
});