/*******PRINTS STYLED ALERT MESSAGE IN THE CONSOLE ONCE THE USER CLICKS F12(tries to open console or devtool *******/

document.addEventListener('keydown', function(event) {
    if (event.keyCode === 123) { // Check if the key pressed is F12 (code 123)
        console.log('%cCLOSE THE CONSOLE', 'color: red; font-weight: bold; font-size: 50px; background-color: black');
    }
});
