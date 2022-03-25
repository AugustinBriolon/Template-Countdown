const countdown = () => {
    const countDate = new Date('March 24, 2028 00:00:00').getTime()
    const now = new Date().getTime()
    const gap = countDate - now

    const second = 1000
    const minute = second * 60
    const hour = minute * 60
    const day = hour * 24

    const textDay = Math.floor(gap / day)
    const textHour = Math.floor((gap % day) / hour)
    const textMinute = Math.floor((gap % hour) / minute)
    const textSecond = Math.floor((gap % minute) / second)

    document.querySelector('.day').innerText = textDay
    document.querySelector('.hour').innerText = textHour
    document.querySelector('.minute').innerText = textMinute
    document.querySelector('.second').innerText = textSecond

    if(gap <= 0){
        document.querySelector('.day').innerText = 0
        document.querySelector('.hour').innerText = 0
        document.querySelector('.minute').innerText = 0
        document.querySelector('.second').innerText = 0
    }

    if(gap <= 0) {
        var confettiSettings = { target: 'my-canvas' };
        var confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
    }
}

setInterval(countdown, 1000)