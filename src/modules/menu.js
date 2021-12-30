const menu = () => {
    const menu = document.querySelector('menu')
    const menuItems = menu.querySelectorAll('ul>li>a')

    document.addEventListener('click', (e) => {
        if (e.target.closest('.menu') || e.target.classList.contains('close-btn')) {
            e.preventDefault()
            menu.classList.toggle('active-menu')
        }
        else if (!e.target.classList.contains('active-menu')) {
            menu.classList.remove('active-menu')
        }
        if (e.target.parentElement.attributes.href.value == '#service-block') {
            e.preventDefault()
            let a = e.target.parentElement.attributes.href.value.slice(1)
            let href = document.getElementById(a)
            href.scrollIntoView({ behavior: "smooth" })
        }
        menuItems.forEach((item) => {
            if (e.target === item) {
                e.preventDefault()
                let linkhref = e.target.attributes.href.value.slice(1)
                let link = document.getElementById(linkhref)
                link.scrollIntoView({ behavior: "smooth" })
                menu.classList.remove('active-menu')
            }
        })

    })
}
export default menu

