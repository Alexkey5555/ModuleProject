const validate = () => {
    const validCalc = document.querySelectorAll('.calc-item')
    const validText = document.querySelectorAll('input[type="text"], input[placeholder="Ваше сообщение"]')
    const validEmail = document.querySelectorAll('input[type="email"]')
    const validTel = document.querySelectorAll('input[type="tel"]')

    const validateCalc = (e) => {
        let check = /\D+/g;
        e.target.value = e.target.value.replace(check, '');
    }
    const validateText = (e) => {
        let check = /[^а-яА-Я -]/g;
        e.target.value = e.target.value.replace(check, '');
    }

    const validateEmail = (e) => {
        let check = /[^\w\@\-!.'*`]+/g;
        e.target.value = e.target.value.replace(check, '');
    }
    const validateTel = (e) => {
        let check = /[^\d\-\(\)]+/g;
        e.target.value = e.target.value.replace(check, '');
    }

    validCalc.forEach((event) => {
        if (event[0]) {
            return
        }
        else {
            event.addEventListener('input', validateCalc)
        }
    })

    validText.forEach((event) => {
        if (/calc-item/g.test(event.classList.value)) {
            return
        }
        else {
            event.addEventListener('input', validateText)
        }
    })

    validEmail.forEach((event) => {
        event.addEventListener('input', validateEmail)
    })

    validTel.forEach((event) => {
        event.addEventListener('input', validateTel)
    })
}
