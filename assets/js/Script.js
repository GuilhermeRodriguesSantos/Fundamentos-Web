let nome = document.querySelector('#Nome')
let email = document.querySelector('#Email')


nome.style.width = '98%'
email.style.width = '98%'


function validaNome(){
    let text = document.querySelector('#text')

    if(nome.value.length < 4){
        text.innerHTML = 'Nome Inválido'
        text.style.color = 'red'
        nome.style.border = '3px solid red'
    }else{
        text.innerHTML = 'Nome Válido'
        text.style.color = 'green'
        nome.style.border = '3px solid green'
    }
}

function validaEmail(){
    let text = document.querySelector('#text2')

    if(email.value.indexOf('@') == -1){
        text.innerHTML = 'Email Inválido, precisa do @ para ser email'
        text.style.color = 'red'
        email.style.border = '3px solid red'
    }else if(email.value.indexOf('.') == -1){
        text.innerHTML = 'Email Inválido, precisa do .'
        text.style.color = 'red'
        email.style.border = '3px solid red'
    }else{
        text.innerHTML = 'Email Válido'
        text.style.color = 'green'
        email.style.border = '3px solid green'
    }

}





