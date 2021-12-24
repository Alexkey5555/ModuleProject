const now = new Date();
let day = now.getDay()
let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
let hour = now.getHours()
let message = ''
let dateStop = new Date('31 december 2021').getTime()
let dateNow = new Date().getTime()
let timeRemaining = (dateStop - dateNow) / 1000
let days = Math.floor(timeRemaining / 60 / 60 / 24)

let div1 = document.createElement('div')
let div2 = document.createElement('div')
let div3 = document.createElement('div')
let div4 = document.createElement('div')

if (hour >= 0 && hour < 6) {
    message = 'Доброй ночи'
}
else if (hour >= 6 && hour < 12) {
    message = 'Доброе утро'
}
else if (hour >= 12 && hour < 18) {
    message = 'Добрый день'
}
else if (hour >= 18 && hour <= 24) {
    message = 'Добрый вечер'
}

div1.innerHTML = message
div2.innerHTML = 'Сегодня: ' + week[day - 1]
div3.innerHTML = 'Текущее время: ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true })
div4.innerHTML = 'До Нового Года осталось: ' + days + ' дней';

document.body.append(div1)
document.body.append(div2)
document.body.append(div3)
document.body.append(div4)