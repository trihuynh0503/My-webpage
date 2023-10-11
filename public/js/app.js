//will handle the scroll animations for web page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else { entry.target.classList.remove('show');
        }
    })
})
//navbar shrinking effect when scroll down
window.addEventListener("scroll", ()=>{
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky_navbar", window.scrollY > 0);
})

//drop down menu for navbar on phone
const toggleButton = document.getElementsByClassName('toggle-button')[0];
const navLinks = document.getElementsByClassName('navLinks')[0];
toggleButton.addEventListener('click', ()=>{
    navLinks.classList.toggle('active');
})

//handle the parallax effect
let light1 = document.getElementById('light-1');
let light2 = document.getElementById('light-2');
let lighthouse = document.getElementById('lighthouse');
let island = document.getElementById('island');
let sky = document.getElementById('sky');
let sun = document.getElementById('sun');
let cloud = document.getElementById('cloud');
let sea = document.getElementById('sea');
let birds = document.getElementById('birds');
window.addEventListener('scroll', function(){
    let value = window.scrollY;
    light1.style.top = value*1.2 + 'px';
    light2.style.top = value*1.2 + 'px';
    light2.style.rotate = value*.05 + 'deg';
    lighthouse.style.top = value*0.1 + 'px';
    lighthouse.style.left = value*0.1 + 'px';

    // island.style.top = value*.5 + 'px';
    sky.style.top = value*.7 + 'px';
    birds.style.left = value + 'px';
    sun.style.top = value*.5 + 'px';
    cloud.style.top = value*.1 + 'px';
    cloud.style.left = -value*.5 + 'px';

    sea.style.top = value*.15 + 'px';


})

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));