const registerForm = document.querySelector('.registerForm')
const API_URL = 'http://localhost:3000/api'

registerForm.onsubmit = function (e) {
    e.preventDefault()

    const name = document.forms['registerForm'].name.value
    const email = document.forms['registerForm'].email.value
    const password = document.forms['registerForm'].password.value

    const responseMessage = document.getElementById('responseMessage')

    fetch(`${API_URL}/register`, {
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
                responseMessage.innerText = ''

                responseMessage.classList.remove('error')
                responseMessage.classList.add('sucess')
                responseMessage.innerText = data.message
            } else {
                responseMessage.innerText = ''  
                responseMessage.classList.remove('sucess')

                responseMessage.classList.add('error')
                responseMessage.innerText = data.message
            }

        })


}