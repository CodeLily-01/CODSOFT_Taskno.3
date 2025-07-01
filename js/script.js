let currentInput = '';
let display = document.getElementById('display');

function press(key) {
  if (key === '=') {
    try {
      currentInput = eval(currentInput.replace(/x/g, '*'));
    } catch {
      currentInput = 'Error';
    }
  } else {
    if (currentInput === '0' || currentInput === 'Error') currentInput = '';
    currentInput += key;
  }
  display.textContent = currentInput;
}

function clearDisplay() {
  currentInput = '';
  display.textContent = '0';
}
