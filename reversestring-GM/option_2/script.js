const input = document.getElementById("inputText");
const reverseBtn = document.getElementById("reverseBtn");
const result = document.getElementById("result");
const copyBtn = document.getElementById("copyBtn");

// Mostrar el botón solo si hay más de 3 caracteres
input.addEventListener("input", () => {
  if (input.value.length > 3) {
    reverseBtn.style.display = "inline-block";
  } else {
    reverseBtn.style.display = "none";
    result.textContent = ""; // limpiar resultado
  }
});

// Función para invertir el string
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Al hacer click en "Reverse"
reverseBtn.addEventListener("click", () => {
  const text = input.value;
  result.textContent = reverseString(text);
});

// Botón para copiar el resultado
copyBtn.addEventListener("click", () => {
  const textToCopy = result.textContent;
  if (textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Texto copiado al portapapeles ✅");
    });
  }
});
