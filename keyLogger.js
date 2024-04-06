let keyStrokeString = '';

document.addEventListener('keypress', function(event) {
    if (event.key !== 'Enter') {
        keyStrokeString += event.key;
    }
});

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        console.log('Key sequence:', keyStrokeString);
        keyStrokeString = '';
    }
});
