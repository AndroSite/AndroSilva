const botãoScrooll = document.querySelector('[ data-anima="scroll"]');

const metadewindow = window.innerHeight * 18.0;
 
 function animarScroll(){
const topitem = botãoScrooll.getBoundingClientRect().top;

const itemvisivel = topitem - metadewindow < 0;

if (itemvisivel) {
    botãoScrooll.classList.add('show-botton');
} else{
    botãoScrooll.classList.remove('show-botton');
}
 
 } 
    

window.addEventListener('scroll',animarScroll);