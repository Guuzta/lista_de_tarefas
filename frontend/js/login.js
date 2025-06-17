const loginForm = document.getElementById('loginForm')
const API_URL = 'http://localhost:3000/api'

loginForm.onsubmit = function (e) {
    e.preventDefault()

    const email = document.forms['loginForm'].email.value
    const password = document.forms['loginForm'].password.value
    const responseMessage = document.getElementById('responseMessage')

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        })
    })
        .then(response => response.json())
        .then(data => {
            
            if(data.succeed) {
                loginForm.submit()
            } else {
                responseMessage.classList.add('error')
                responseMessage.innerText = data.message
            }

        })
}