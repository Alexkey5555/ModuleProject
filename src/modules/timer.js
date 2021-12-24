const timer = (deadLine) => {
    const timerHours = document.getElementById('timer-hours')
    const timerMinutes = document.getElementById('timer-minutes')
    const timerSeconds = document.getElementById('timer-seconds')
    const timer = document.querySelectorAll('#timer span')
    const timerDays = document.createElement('span')
    const span = document.createElement('span')
    let checkTime;
    span.textContent = ' : '
    timerDays.textContent = '00'
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

    checkTime = getTimeRemaining()
    const updateClock = () => {
        let getTime = getTimeRemaining()

        if (getTime.days < 10) {
            timerDays.textContent = '0' + getTime.days;
        }
        else {
            timerDays.textContent = getTime.days
        }
        if (getTime.hours < 10) {
            timerHours.textContent = '0' + getTime.hours;
        }
        else {
            timerHours.textContent = getTime.hours
        }
        if (getTime.minutes < 10) {
            timerMinutes.textContent = '0' + getTime.minutes;
        }
        else {
            timerMinutes.textContent = getTime.minutes
        }
        if (getTime.seconds < 10) {
            timerSeconds.textContent = '0' + getTime.seconds;
        }
        else {
            timerSeconds.textContent = getTime.seconds
        }

    }
    if (checkTime.timeRemaining > 0) {
        setInterval(updateClock, 1000)
    }


}
export default timer