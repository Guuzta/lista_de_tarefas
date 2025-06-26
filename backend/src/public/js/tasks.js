const newTaskButton = document.getElementById('newTask')
const deleteTaskButtons = document.querySelectorAll('#deleteTask')

const API_URL = 'http://localhost:3000/api'

newTaskButton.onclick = function () {
    Swal.fire({
        title: 'Adicionar nova tarefa',
        html: `
            <input type="text" id="description" class="swal2-input" placeholder="Digite sua nova tarefa aqui">
        
        `,
        showDenyButton: true,
        confirmButtonText: 'Cadastrar',
        denyButtonText: 'Cancelar',
        customClass: {
            popup: 'popupBackground',
            title: 'title',
            confirmButton: 'confirmButton',
        }
    }).then((result) => {
        if (result.isConfirmed) {

            const description = document.getElementById('description').value
            const userId = document.getElementById('userId').value

            fetch(`${API_URL}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    description,
                    userId
                })
            })


            Swal.fire({
                showConfirmButton: false,
                title: 'Tarefa cadastrada com sucesso!',
                icon: 'success',
                timer: 1300,
                customClass: {
                    popup: 'popupBackground',
                    title: 'title',
                    confirmButton: 'confirmButton',
                }
            })

            setTimeout(function () {
                location.reload()
            }, 1400)
        } else {
            Swal.fire({
                showConfirmButton: false,
                title: 'Sua tarefa não foi cadastrada!',
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

deleteTaskButtons.forEach((button) => {
    button.onclick = function () {

        const taskId = document.getElementById('taskId').value

        console.log(taskId)

        fetch(`${API_URL}/tasks/${taskId}`, {
            method: 'DELETE'
        })
            .then(response => response.json())
            .then(data => {
               if(data.message === 'sucess') {
                    location.reload()
                }
            }).catch(error => {
                console.error(error)
            })

    }
})