const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const closeBtn = modal.querySelector('.popup-close')
    const width = document.documentElement.scrollWidth
    modal.style.opacity = '0'

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            let timer = setInterval(() => {
                if (modal.style.opacity === '1') clearInterval(timer);
                else if (width < 768) {
                    modal.style.opacity = '1'
                }
                else {
                    let count = +modal.style.opacity
                    count += 0.1
                    modal.style.opacity = count
                }
            }, 80)
        })
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none'
            modal.style.opacity = '0'
        })
    })
}
export default modal