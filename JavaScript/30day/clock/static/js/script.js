const secodHand = document.querySelector('.sec')
const minHand = document.querySelector('.min')
const hourHand = document.querySelector('.hour')

function setDtae() {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds/60)*360) + 90 ;
    secodHand.style.transform = `rotate(${secondsDegrees}deg)`


    const minutes = now.getMinutes();
    const minutesDegrees = ((minutes/60)*360) + 90 ;
    minHand.style.transform = `rotate(${minutesDegrees}deg)`

    const hour = now.getHours();
    const hourDegrees = ((hour/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`

    console.log(seconds)
}

setInterval(setDtae, 1000);