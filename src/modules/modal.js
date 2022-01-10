import { animate } from './helpers'
const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const width = document.documentElement.scrollWidth

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            modal.style.opacity = '0'
            if (width > 724) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                    }
                });
            }
            else {
                modal.style.opacity = '1'
            }
        })
    })
    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') || e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}
export default modal