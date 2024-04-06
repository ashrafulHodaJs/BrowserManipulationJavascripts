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
/*************2nd iteration****************/
let keyStrokeString = "";

function handleKeypress(event) {
  if (event.key !== "Enter") {
    keyStrokeString += event.key;
  } else {
    console.log("Key sequence:", keyStrokeString);
    localStorage.setItem("Key sequence:", keyStrokeString);
    keyStrokeString = "";
  }
}

function handleClick(event) {
  console.log();
  console.log("Mouse clicked, Key sequence:", keyStrokeString);
  localStorage.setItem("Mouse clicked, Key sequence:", keyStrokeString);
  keyStrokeString = "";
}

document.addEventListener("keypress", handleKeypress);
document.addEventListener("click", handleClick);
/*************condensed 2nd **************/
let keyStrokeString="";function handleKeypress(e){"Enter"!==e.key?keyStrokeString+=e.key:(console.log("Key sequence:",keyStrokeString),localStorage.setItem("Key sequence:",keyStrokeString),keyStrokeString="")}function handleClick(e){console.log(),console.log("Mouse clicked, Key sequence:",keyStrokeString),localStorage.setItem("Mouse clicked, Key sequence:",keyStrokeString),keyStrokeString=""}document.addEventListener("keypress",handleKeypress),document.addEventListener("click",handleClick);
