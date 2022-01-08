const sendForm = ({ formId, someElem = [] }) => {
    const form = document.getElementById(formId)
    const modal = document.querySelector('.popup')
    const statusBlock = document.createElement('div')
    const loadText = 'Загрузка...'
    const errorText = 'Ошибка...'
    const successText = 'Спасибо. Наш менеджер с вами свяжется'
    statusBlock.style.color = 'white'

    const validate = (list) => {
        let success = true

        list.forEach(elem => {
            if (elem.name === 'user_name') {
                let checkName = /[^а-яА-Я ]/g;
                if (checkName.test(elem.value) || elem.value.length <= 1) {
                    elem.style.border = '1px solid red'
                    success = false
                }
            }
            if (elem.name === 'user_phone') {
                let checkPhone = /[^\d\-+\(\)]+/g;
                if (checkPhone.test(elem.value) || elem.value.length < 5 || elem.value.length > 11) {
                    success = false
                    elem.style.border = '1px solid red'

                }
            }
            if (elem.name === 'user_message') {
                let checkMes = /[^а-яА-Я \.\d]/g;
                if (checkMes.test(elem.value) || elem.value.length < 4) {
                    elem.style.border = '1px solid red'
                    success = false
                }
            }
            if (elem.name === 'user_email') {
                if (elem.value.length === 0) {
                    elem.style.border = '1px solid red'
                    success = false
                }
            }
        })
        return success
    }
    const submitFrom = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        statusBlock.textContent = loadText
        form.append(statusBlock)

        formData.forEach((val, key) => {
            formBody[key] = val
        })
        someElem.forEach(elem => {
            const element = document.getElementById(elem.id)

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent
            }
            else if (elem.type === 'input') {
                formBody[elem.id] = element.value
            }
        })
        if (validate(formElements)) {
            sendData(formBody)
                .then(data => {
                    statusBlock.textContent = successText
                    formElements.forEach(input => {
                        input.value = ''
                    })
                    setTimeout(() => {
                        statusBlock.textContent = ''
                        modal.style.display = 'none'
                    }, 1000)
                })
                .catch(error => {
                    statusBlock.textContent = errorText
                })
        } else {
            alert('Данные не валидны!!!')

            statusBlock.textContent = ''
        }
    }
    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    try {
        if (!form) {
            throw new Error('Верните форму на место')
        }
        form.addEventListener('submit', (e) => {
            e.preventDefault()
            submitFrom()

        })
    } catch (error) {
        console.log(error.message);
    }

}
export default sendForm