//will handle the scroll animations for web page
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else { entry.target.classList.remove('show');
        }
    })
})

window.addEventListener("scroll", ()=>{
    var navbar = document.querySelector(".navbar");
    navbar.classList.toggle("sticky_navbar", window.scrollY > 0);
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));