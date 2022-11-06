const nombre = 'Kristy';
const edad = 39;
const likesMusic = true;

const nombreElement = document.querySelector('span#name');
const edadElement = document.querySelector('span#age');
const likesMusicElement = document.querySelector('span#likesMusic');

nombreElement.textContent = nombre;
edadElement.textContent = edad;
if (likesMusic === true) {
    likesMusicElement.textContent = 'me encanta la musica';
} else{
    likesMusicElement.textContent = 'odio la musica';
}

const WHITE_KEYS = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];
const BLACK_KEYS = ['s', 'd', 'f', 'g', 'h', 'j'];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');


const playNote = (key) => {
    const noteAudio = document.getElementById(key.dataset.not);

    noteAudio.play();
}

document.addEventListener('keydown', (e) => {
    if (e.repeat) return;

    const key = e.key;
    const whiteKeyIndex = WHITE_KEYS.index0f(key);
    const blackKeyIndex = BLACK_KEYS.index0f(key);

    if (whiteKeyIndex > -1) {
        playNote(whiteKeys[whiteKeyIndex]);
    }

    if (blackKeyIndex > -1) {
        playNote(blackKeys[blackKeyIndex]);
    }
})