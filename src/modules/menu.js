const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const btnDown = document.querySelector('a[href="#service-block"]')

    btnDown.addEventListener('click', (event) => {
        event.preventDefault()
        let a = event.target.parentElement.attributes.href.value.slice(1)
        let href = document.getElementById(a)
        href.scrollIntoView({ behavior: "smooth" })
    })


    const handleMenu = () => {
        menu.classList.toggle('active-menu')
    }

    menuBtn.addEventListener('click', handleMenu)
    closeBtn.addEventListener('click', handleMenu)
    menuItems.forEach(menuItem => menuItem.addEventListener('click', (event) => {
        event.preventDefault()
        let linkhref = event.target.attributes.href.value.slice(1)
        let link = document.getElementById(linkhref)
        link.scrollIntoView({ behavior: "smooth" })
        handleMenu()
    }))
}
export default menu

