const newTaskButton = document.getElementById('newTask')
const deleteTaskButtons = document.querySelectorAll('#deleteTask')
const editingTaskButtons = document.querySelectorAll('#editingTask')
const doneTaskButtons = document.querySelectorAll('#doneTask')

const isLocalHost = window.location.hostname === 'localhost'
const API_URL = isLocalHost ? 'http://localhost:3000/api' : 'https://lista-de-tarefas-iq6a.onrender.com/api'

async function isTaskDone() {
    const tasks = document.querySelectorAll('#task')

    tasks.forEach((task) => {

        let taskId = task.children.taskId.value

        fetch(`${API_URL}/tasks/${taskId}`)
            .then(response => response.json())
            .then(data => {
                const { isDone } = data.tasks[0]
                if (isDone) {
                    const taskCard = task
                    const buttonIsDone = task.querySelector('.isDone')
                    const taskStatus = task.querySelector('.status')

                    taskCard.classList.add('done')
                    buttonIsDone.classList.add('done')
                    taskStatus.classList.add('done')
                    taskStatus.innerHTML = `Status: <b>Concluído</b>`
                }
            })
    })
}

isTaskDone()

newTaskButton.onclick = function (e) {
    Swal.fire({
        title: 'Adicionar nova tarefa',
        html: `
            <input type="text" id="description" class="swal2-input" placeholder="Digite sua nova tarefa aqui">
        
        `,
        allowOutsideClick: false,
        showDenyButton: true,
        confirmButtonText: 'Cadastrar',
        denyButtonText: 'Cancelar',
        customClass: {
            popup: 'popupBackground',
            title: 'title',
            confirmButton: 'confirmButton',
        }
    }).then((result) => {

        const description = document.getElementById('description').value
        const userId = document.getElementById('userId').value

        if (result.isConfirmed) {
            if (!description) {
                Swal.fire({
                    showConfirmButton: false,
                    title: 'Insira uma tarefa válida!',
                    icon: 'error',
                    timer: 1300,
                    customClass: {
                        popup: 'popupBackground',
                        title: 'title',
                        confirmButton: 'confirmButton',
                    }
                })
            } else {
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
            }
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
    button.onclick = function (e) {

        const taskId = e.target.parentElement.nextElementSibling.value

        Swal.fire({
            title: 'Tem certeza que deseja deletar esta tarefa?',
            text: 'Esta ação não poderá ser revertida!',
            iconColor: '#e1cc2d',
            icon: 'warning',
            allowOutsideClick: false,
            showDenyButton: true,
            confirmButtonText: 'Sim, deletar!',
            denyButtonText: 'Cancelar',
            customClass: {
                title: 'warningTitle',
                popup: 'popupBackground',
                content: 'descriptionText',
                confirmButton: 'confirmButton',
            }
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`${API_URL}/tasks/${taskId}`, {
                    method: 'DELETE'
                })
                    .then(response => response.json())
                    .then(data => {
                        if (data.message === 'sucess') {
                            Swal.fire({
                                showConfirmButton: false,
                                title: 'Tarefa removida com sucesso!',
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
                        }
                    }).catch(error => {
                        console.error(error)
                    })
            }
        })



    }
})

editingTaskButtons.forEach((button) => {
    button.onclick = function (e) {
        Swal.fire({
            title: 'Atualizar tarefa',
            html: `
            <input type="text" id="description" class="swal2-input" placeholder="Atualize sua tarefa aqui">
        
        `,
            allowOutsideClick: false,
            showDenyButton: true,
            confirmButtonText: 'Atualizar',
            denyButtonText: 'Cancelar',
            customClass: {
                popup: 'popupBackground',
                title: 'title',
                confirmButton: 'confirmButton',
            }
        }).then((result) => {

            const description = document.getElementById('description').value
            const taskId = e.target.parentElement.nextElementSibling.value

            if (result.isConfirmed) {
                if (!description) {
                    Swal.fire({
                        showConfirmButton: false,
                        title: 'Insira uma tarefa válida!',
                        icon: 'error',
                        timer: 1300,
                        customClass: {
                            popup: 'popupBackground',
                            title: 'title',
                            confirmButton: 'confirmButton',
                        }
                    })
                } else {

                    const isDone = false

                    fetch(`${API_URL}/tasks/${taskId}`, {
                        method: 'PUT',
                        headers: {
                            'Content-type': 'application/json'
                        },
                        body: JSON.stringify({
                            description,
                            isDone
                        })
                    })

                    Swal.fire({
                        showConfirmButton: false,
                        title: 'Tarefa atualizada com sucesso!',
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
                }
            } else {
                Swal.fire({
                    showConfirmButton: false,
                    title: 'Sua tarefa não foi atualizada!',
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
})

doneTaskButtons.forEach((button) => {
    button.onclick = function (e) {

        const isDoneHtml = e.target.classList.contains('done')
        const taskId = e.target.parentElement.children.taskId.value

        if (!isDoneHtml) {

            const isDone = true

            fetch(`${API_URL}/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    isDone,
                })
            })

            location.reload()

        } else {
            const isDone = false

            fetch(`${API_URL}/tasks/${taskId}`, {
                method: 'PUT',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    isDone,
                })
            })

            location.reload()
        }

    }
})