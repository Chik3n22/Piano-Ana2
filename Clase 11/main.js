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