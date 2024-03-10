function calculateHandshake() {
  const inputNumber = parseInt(document.getElementById('numberinput').value);
  const binaryString = inputNumber.toString(2); // Convert to binary string

  const handshake = [];

  // Check each bit of the binary string
  for (let i = binaryString.length - 1; i >= 0; i--) {
    const bit = binaryString[i];
    const positionFromRight = binaryString.length - 1 - i;

    if (bit === '1') {
      if (positionFromRight === 0) {
        handshake.push('wink');
      } else if (positionFromRight === 1) {
        handshake.push('double blink');
      } else if (positionFromRight === 2) {
        handshake.push('close your eyes');
      } else if (positionFromRight === 3) {
        handshake.push('jump');
      } else if (positionFromRight === 4) {
        handshake.reverse(); // Reverse the handshake if the last bit is set
      }
    }
  }

  displayHandshake(handshake);
}

function displayHandshake(handshake) {
  const handshakeResult = document.getElementById('handshakeresult');
  handshakeResult.textContent = handshake.join(', ');
}
