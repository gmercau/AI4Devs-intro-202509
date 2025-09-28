// Obtener elementos
const input = document.getElementById('textInput');
const result = document.getElementById('result');
const copyBtn = document.getElementById('copyBtn');

// Escuchar cuando el usuario escribe
input.addEventListener('input', () => {
  const text = input.value;
  const reversed = text.split('').reverse().join('');
  result.textContent = reversed;
});

// Botón para copiar al portapapeles
copyBtn.addEventListener('click', () => {
  if (result.textContent.trim() !== "") {
    navigator.clipboard.writeText(result.textContent)
      .then(() => alert('Copied!'))
      .catch(err => console.error('Error copying text: ', err));
  }
});
