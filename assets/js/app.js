// Variables Declaration
const toggleBtn = document.querySelector('.togglebtn');
const closeBtn = document.querySelector('.closebtn');
const sideBar = document.querySelector('.side-bar');

toggleBtn.addEventListener('click', function(){
    sideBar.classList.toggle('toggle');
});
closeBtn.addEventListener('click', function(){
    sideBar.classList.toggle('toggle');
});