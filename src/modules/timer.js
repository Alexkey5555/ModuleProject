const timer = (deadLine) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const timer = document.querySelectorAll('#timer span')
    const timerDays = document.createElement('span')
    const span = document.createElement('span')
    span.textContent = ' : '

    timerDays.id = 'timer-days'
    timer[0].before(timerDays)
    timer[0].before(span)
    const getTimeRemaining = () => {


        let dateStop = new Date(deadLine).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)

        return { timeRemaining, days, hours, minutes, seconds }
    }
    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        if (getTime.timeRemaining > 0) {
            setTimeout(updateClock, 1000)
        }
    }

    updateClock()

}
export default timer