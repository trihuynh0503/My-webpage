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


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));