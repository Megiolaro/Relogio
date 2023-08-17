const hoursHand = document.querySelector(".hand.hours")
const minutesHand = document.querySelector(".hand.minutes")
const secondsHand = document.querySelector(".hand.seconds")

const setRotation = (element, rotationPercentage) => {
    element.style.setProperty("--rotation", rotationPercentage * 360)
}    

const setClock = () => {
    const currentDate = new Date()

    const secondPercentage = currentDate.getSeconds() / 60
    const minutesPercentage = (secondPercentage + currentDate.getMinutes()) / 60
    const hoursPercentage = (minutesPercentage + currentDate.getHours()) /12

    setRotation(secondsHand, secondPercentage)
    setRotation(minutesHand, minutesPercentage)
    setRotation(hoursHand, hoursPercentage)
}

setClock()

setInterval(setClock, 1000)