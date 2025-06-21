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

            const token = data.token

            if(data.succeed) {

                fetch(`${API_URL}/todolist`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-type': 'application/json'
                    }
                })
                    .then(response => response.text())
                    .then(html => {
                        document.open()
                        document.write(html)
                        document.close()
                    })

            } else {
                responseMessage.classList.add('error')
                responseMessage.innerText = data.message
            }

        })
}