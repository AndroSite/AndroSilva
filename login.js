const botao= document.querySelector('#botao');

botao.addEventListener('click', () =>{
    window.scroll({top: window.innerHeight,behavior: 'smooth'})
    botao.style.dispalay="none"
})

function entrar(){

   let Usuario = document.querySelector('#Usuario')
   let usuarioLabel = document.querySelector('#userLabel')

   let Senha = document.querySelector('#Senha')
   let senhaLabel = document.querySelector('#senhaLabel')

   let msgerror = document.querySelector('#msgerror')
   let listaUser = []

   let userValid = {

    nome: '',
    user: '',
    senha: ''

   }
listaUser = JSON.parse(localStorage.getItem('listaUser'))
   
    listaUser.forEach((item)=> {

        if(Usuario.value == item.userCad && Senha.value == item.senhaCad){

            userValid = {
                nome: item.nomeCad,
                user: item.userCad,
                senha: item.senhaCad
            }

        }
    })
 
    if (Usuario.value == userValid.user && Senha.value == userValid.senha) {
        window.location.href="https://androsilva.github.io/AndroSilva/"
        let token = Math.random().toString(16).substr(2) + Math.random().toString(16).substr(2)
        localStorage.setItem('token', token)
        localStorage.setItem('userLogado', JSON.stringify(userValid))
    } else {
        usuarioLabel.setAttribute('style','color: red')
        Usuario.setAttribute('style',' border-color: red')

        senhaLabel.setAttribute('style','color:red')
        Senha.setAttribute('style','border-color:red')

        msgerror.setAttribute ('style','text-align: center;  border-radius: 8px;  background-color: red ; color: white;')
        msgerror.innerHTML= 'Usuario ou Senha estão incorretos!'
        Usuario.focus()

    }

     }


     let userLogado = JSON.parse(localStorage.getItem('userLogado'))
     let logando = document.querySelector('#logado')
     logando.innerHTML =  `Olá ${userLogado.nome}`

     if (localStorage.getItem('token') == null ) {
         alert('Você precisa estar logando para acessar esta página')
         window.location.href="https://androsilva.github.io/AndroSilva/log.html"
     }

     function sair(){
         localStorage.removeItem('token')
         localStorage.removeItem('userLogado')
         window.location.href="https://androsilva.github.io/AndroSilva/"
     }