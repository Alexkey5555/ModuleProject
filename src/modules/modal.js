const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    let timer;

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            modal.style.opacity = '0'
            const animate = () => {
                const width = document.documentElement.scrollWidth
                timer = requestAnimationFrame(animate)
                if (modal.style.opacity === '1') cancelAnimationFrame(timer);
                else if (width < 768) {
                    modal.style.opacity = '1'

                }
                else {
                    let count = +modal.style.opacity
                    count += 0.04
                    modal.style.opacity = count
                }
            }
            animate()
        })
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}
export default modal