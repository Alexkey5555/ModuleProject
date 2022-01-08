const calc = (price = 100) => {
    const calcBlock = document.querySelector('.calc-block')
    const calcType = document.querySelector('.calc-type')
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const total = document.getElementById('total')
    let interval

    const animateTotal = (num) => {
        let id
        let start = performance.now()
        let progress = 0
        let result = 0
        let n = +total.textContent
        let to = n - num
        let animateCalc = () => {
            let now = performance.now()
            progress = (now - start) / 1000

            if (progress <= 1) {
                if (n < num) {
                    result = num * progress
                }
                if (n > num) {
                    result = n - to * progress
                }
                id = requestAnimationFrame(animateCalc)
            }
            else {
                result = num
                cancelAnimationFrame(id)
            }
            total.textContent = Math.trunc(+result)
        }
        animateCalc()
    }

    const countCalc = () => {
        const calcTypeValue = +calcType.options[calcType.selectedIndex].value
        const calcSquareValue = calcSquare.value

        let totalValue = 0
        let calcCountValue = 1
        let calcDayValue = 1

        if (calcCount.value > 1) {
            calcCountValue += +calcCount.value / 10
        }
        if (calcDay.value && calcDay.value < 5) {
            calcDayValue = 2
        } else if (calcDay.value && calcDay.value < 10) {
            calcDayValue = 1.5
        }
        if (calcType.value && calcSquare.value) {
            totalValue = price * calcTypeValue * calcSquareValue * calcCountValue * calcDayValue
        }
        else {
            totalValue = 0
        }

        animateTotal(totalValue);
    }
    calcBlock.addEventListener('change', (e) => {
        clearInterval(interval);
        if (e.target === calcSquare ||
            e.target === calcCount || e.target === calcDay) {
            countCalc()
        }
    })
}
export default calc