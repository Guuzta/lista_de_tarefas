const loginForm = document.getElementById('loginForm')
const API_URL = 'http://localhost:3000/api'

loginForm.onsubmit = function (e) {
    e.preventDefault()

    const email = document.forms['loginForm'].email.value
    const password = document.forms['loginForm'].password.value

    fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({
            email,
            password
        }),
        credentials: 'include'
    })
        .then(response => response.json())
        .then(data => {
            if (!data.succeed) {
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
            } else {
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

                setTimeout(function() {
                    window.location.href = '/'
                }, 1500)
            }
        })
}