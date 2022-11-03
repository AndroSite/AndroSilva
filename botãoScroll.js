const botãoScrooll = document.querySelector('[ data-anima="scroll"]');

const metadewindow = window.innerHeight * 23.0;
 
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






// botão whatsApp animado

const content = document.querySelector('[data-shrink="yes"]');

const span = document.querySelector('[data-shrink="yes"] span');

span.classList.add('aparecer')
 
setInterval(function(){
   
    content.classList.toggle('shrink')
}, 5000)

 setTimeout(function(){
    setInterval(function(){
   
        span.classList.toggle('aparecer')
    }, 5100)
 }, 200)