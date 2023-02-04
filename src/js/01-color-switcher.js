const startBTN = document.querySelector('button[data-start]')
const stopBTN = document.querySelector('button[data-stop]')
const body = document.querySelector('body')

startBTN.addEventListener('click', () => {bodyColorToChange.start()})
stopBTN.addEventListener('click', () => {bodyColorToChange.stop()})

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }

const bodyColorToChange = {

    intervalID: null,
    
start () {
    startBTN.setAttribute('disabled', 'true')
    stopBTN.removeAttribute('disabled')
    this.intervalID = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor()
    }, 1000);
    },

stop () {
    clearInterval(this.intervalID);
    stopBTN.setAttribute('disabled', 'true')
    startBTN.removeAttribute('disabled')
    }

}
