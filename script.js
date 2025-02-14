var tl = gsap.timeline()
tl.from(".logo", {
     y:-30,
     opacity:0,
     duration:1,
     delay:0.5
})
 // ================menu bar========================
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnIcon = document.querySelector('.toggle-btn i')
const dropdownMenu = document.querySelector('.dropdown-menu')

toggleBtn.onclick = function () {
dropdownMenu.classList.toggle('open')
const isOpen = dropdownMenu.classList.contains('open')

toggleBtnIcon.classList = isOpen
? 'fa-solid fa-xmark'
: 'fa-solid fa-bars';
}

// ================watch video ============================
document.getElementById('watch-video-btn').addEventListener('click', function(){
    window.location.href = 'video-page.html';
});
