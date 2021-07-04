const pads = document.querySelectorAll('.pads div');
const sound = document.querySelectorAll('.sound');
const visual = document.querySelector('.visual');
const slider = document.querySelector('.slider');
const intro = document.querySelector('.intro');
const tl = gsap.timeline({defaults: { ease: "power1.out"}});
const colors = ["#d3d160","#60aed3","#60d394","#d36060","#3c0ce9","#D98BE5","#7dfd5c"];
const emojis = ["🎵","🎶","🎼","🎺","🎸"];

pads.forEach((pad,index) => {
    pad.addEventListener('click',() => {
        sound[index].play();
        sound[index].currentTime = 0;
        animationCube(index);
    })
})
// function for animation to create bubbles
const animationCube = index => {
    const cube = document.createElement('div');
    // cube animation 
    cube.style.animation = `bounce-5 1.5s ease`;
    cube.style.background = colors[index];
    
    cube.innerHTML = `<h2 class="emojis">${emojis[Math.floor(Math.random()*emojis.length)]}</h2>`
    visual.appendChild(cube);
    cube.addEventListener('animationend',function() {
        this.remove();
    })
}
// intro animation
window.addEventListener('load',() => {
    introAnimation();
})

let state = true;
const introAnimation = () => {
    tl.to('.text',{x: 0, stagger: 0.5, duration: 0.5})
    tl.to(".slider", {x: "100%", duration: 1.5, delay: 0.45})
    tl.to(".intro", {x: "100%", duration: 1}, "-=1")
}