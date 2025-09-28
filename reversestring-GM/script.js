// Referencias a elementos
const input = document.getElementById('textInput');
const reverseBtn = document.getElementById('reverseBtn');
const copyBtn = document.getElementById('copyBtn');
const output = document.getElementById('output');

// Función para invertir la cadena
function reverseString(str) {
  return str.split('').reverse().join('');
}

// Evento para invertir
reverseBtn.addEventListener('click', () => {
  const text = input.value;
  const reversed = reverseString(text);
  output.textContent = reversed;
});

// Evento para copiar
copyBtn.addEventListener('click', () => {
  const textToCopy = output.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy)
      .then(() => alert("Copied to clipboard!"))
      .catch(err => console.error("Error copying: ", err));
  }
});
