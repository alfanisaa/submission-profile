const content = document.querySelector(".content");
const left = document.querySelector(".left");
const right = document.querySelector(".right");

left.addEventListener('mouseenter', () => {
    content.classList.add('hover-left');
})

left.addEventListener('mouseleave', () => {
    content.classList.remove('hover-left');
})

right.addEventListener('mouseenter', () => {
    content.classList.add('hover-right');
})

right.addEventListener('mouseleave', () => {
    content.classList.remove('hover-right');
})

TweenMax.to(".overlay h1", 2, {
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay span", 2, {
    delay: .3,
    opacity: 0,
    y: -60,
    ease: Expo.easeInOut
})

TweenMax.to(".overlay", 2, {
    delay: 1,
    top: "-105%",
    ease: Expo.easeInOut
})

TweenMax.from(".navbar", 1, {
    delay: 2.6,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".content h1", 1, {
    delay: 3,
    opacity: 0,
    x: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".content p", 1, {
    delay: 2.6,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

TweenMax.from(".content button", 1, {
    delay: 3.4,
    opacity: 0,
    y: 100,
    ease: Expo.easeInOut
})

TweenMax.from(".jumbotron", 1, {
    delay: 3,
    opacity: 0,
    y: -100,
    ease: Expo.easeInOut
})

window.addEventListener("scroll", function (event) {
    var scroll = this.scrollY;
    let navbar = document.querySelector('.navbar')
    
    if (scroll >= 50) {
        navbar.classList.add('bg-light')
    }
    else {
        navbar.classList.remove('bg-light')
    }
});
