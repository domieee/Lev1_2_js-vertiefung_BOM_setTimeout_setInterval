let n = 100

const runPercentage = () => {
    interval = setInterval(() => {
        if (n > 0) {
            n--
        } else if (n === 0) {
            clearInterval(interval)
            n = 100
        }
        document.querySelector('#percentage').innerHTML = n
    }, 100)
}