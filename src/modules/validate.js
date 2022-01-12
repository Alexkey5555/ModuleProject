const validate = () => {
    const validCalc = document.querySelectorAll('.calc-item')
    const validText = document.querySelectorAll('input[type="text"]')
    const validMes = document.querySelectorAll('input[name="user_message"]')
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
    const validateMes = (e) => {
        let check = /[^а-яА-Я -\d\,\.]/g;
        e.target.value = e.target.value.replace(check, '');

    }
    const validateEmail = (e) => {
        let check = /[^\w\@\-!.'*`]+/g;
        e.target.value = e.target.value.replace(check, '');
    }
    const validateTel = (e) => {
        let check = /[^\d\-+\(\)]+/g;
        e.target.value = e.target.value.replace(check, '');
    }
    const delSymbol = (e) => {
        let check = / {2,}/g;
        let check2 = /-{2,}/g;
        e.target.value = e.target.value.replace(check, ' ');
        e.target.value = e.target.value.replace(check2, '-');
        e.target.value = e.target.value.replace(/^-/g, '');
        e.target.value = e.target.value.replace(/-$/g, '');
        e.target.value = e.target.value.trim()
    }
    const upperSymbol = (e) => {
        let check = / {2,}/g;
        let check2 = /-{2,}/g;
        e.target.value = e.target.value.replace(check, ' ');
        e.target.value = e.target.value.replace(check2, '-');
        e.target.value = e.target.value.replace(/^-/g, '');
        e.target.value = e.target.value.replace(/-$/g, '');
        e.target.value = e.target.value.trim()
        e.target.value = e.target.value.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' ')
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
            event.addEventListener('blur', upperSymbol)
        }
    })
    validMes.forEach((event) => {
        event.addEventListener('input', validateMes)
        event.addEventListener('blur', upperSymbol)

    })
    validEmail.forEach((event) => {
        event.addEventListener('input', validateEmail)
        event.addEventListener('blur', delSymbol)

    })

    validTel.forEach((event) => {
        event.addEventListener('input', validateTel)
        event.addEventListener('blur', delSymbol)

    })
}
export default validate
