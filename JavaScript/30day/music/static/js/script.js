
window.addEventListener('keydown', function(e){
    const audio = this.document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = this.document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if(!audio) return
    audio.currentTime = 0;

    audio.play()
key.classList.add('play');
});

function removeTransiton(e) {
    console.log(e)
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitonend', removeTransiton));