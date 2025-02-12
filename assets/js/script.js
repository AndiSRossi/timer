const relogio = document.querySelector(".timer")
const iniciar = document.querySelector(".iniciar")
const pausar = document.querySelector(".pausar")
const zerar = document.querySelector(".zerar")

function criarHoraDosSeg(segundos) {
    const data = new Date(segundos * 1000)
    return data.toLocaleTimeString('pt-BR', {
        hour12: false,
        timeZone: 'GMT'
    })
}

let segundos = 0
let timer = null

function iniciarTimer() {
    timer = setInterval(function () {
        segundos++
        relogio.innerHTML = criarHoraDosSeg(segundos)
    }, 1000)
}

iniciar.addEventListener('click', function (event) {
    if (timer) return
    iniciarTimer()
    relogio.style.borderColor = '#2cdd00'
    iniciar.disabled = true

})

pausar.addEventListener('click', function (event) {
    relogio.style.borderColor = 'yellow'
    clearInterval(timer);
    timer = null
    iniciar.disabled = false
    

})
zerar.addEventListener('click', function (event) {
    clearInterval(timer)
    timer = null
    segundos = 0
    relogio.innerHTML = criarHoraDosSeg(segundos)
    iniciar.disabled = false
    relogio.style.borderColor = 'black'
})