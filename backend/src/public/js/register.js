const registerForm = document.querySelector('.registerForm')
const isLocalHost = window.location.hostname === 'localhost'
const API_URL = isLocalHost ? 'http://localhost:3000/api' : 'https://lista-de-tarefas-iq6a.onrender.com/api'

registerForm.onsubmit = async function (e) {
    e.preventDefault()

    let isFilled = true

    const name = document.forms['registerForm'].name.value
    const email = document.forms['registerForm'].email.value
    const password = document.forms['registerForm'].password.value

    const inputName = document.forms['registerForm'].name
    const inputEmail = document.forms['registerForm'].email
    const inputPassword = document.forms['registerForm'].password

    const responseMessage = document.getElementById('responseMessage')

    if (!name) {
        isFilled = false
        inputName.classList.add('error')
        inputName.placeholder = 'Digite um nome válido!'
    } else {
        inputName.classList.remove('error')
        inputName.placeholder = 'Nome de usuário!'
    }

    if (!email) {
        isFilled = false
        inputEmail.classList.add('error')
        inputEmail.placeholder = 'Digite um email válido!'
    } else {
        inputEmail.classList.remove('error')
        inputEmail.placeholder = 'Email'
    }

    if (!password) {
        isFilled = false
        inputPassword.classList.add('error')
        inputPassword.placeholder = 'Digite uma senha válida!'
    } else {
        inputPassword.classList.remove('error')
        inputPassword.placeholder = 'Senha'
    }

    if (isFilled) {
        await fetch(`${API_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        })
            .then(response => response.json())
            .then(data => {
                if (data.succeed) {
                    registerForm.reset()

                    Swal.fire({
                        showConfirmButton: false,
                        title: data.message,
                        icon: 'success',
                        timer: 1300,
                        customClass: {
                            popup: 'popupBackground',
                            title: 'title',
                            confirmButton: 'confirmButton',
                        }
                    })

                } else {
                    Swal.fire({
                        showConfirmButton: false,
                        title: data.message,
                        icon: 'error',
                        timer: 1300,
                        customClass: {
                            popup: 'popupBackground',
                            title: 'title',
                            confirmButton: 'confirmButton',
                        }
                    })
                }
            })
    }


}