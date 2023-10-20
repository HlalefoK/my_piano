let pianoKeys = document.querySelectorAll('.keys')

function playSound(newUrl) {
    new Audio(newUrl).play()
    console.log(newUrl)
}

pianoKeys.forEach((pianoKey, i) => {
    let number = i < 9 ? '0' + (i +1) : (i + 1)
    let newUrl = 'piano-keys' + number + '.mp3'
    pianoKey.addEventListener('click', () => playSound(newUrl))
})