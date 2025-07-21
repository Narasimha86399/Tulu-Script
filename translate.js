function transliterate(input) {
  let output = '';
  for (const char of input) {
    output += baseMap[char] || char;
  }
  return output;
}

document.addEventListener('DOMContentLoaded', () => {
  const inputField = document.getElementById('kannadaInput');
  const outputBox = document.getElementById('tuluOutput');
  const glyphGrid = document.getElementById('glyphGrid');

  inputField.addEventListener('input', () => {
    const inputText = inputField.value;
    const transliterated = transliterate(inputText);
    outputBox.textContent = transliterated;
  });

  // Show all glyphs with Kannada
  Object.entries(baseMap).forEach(([kannada, translit]) => {
    const box = document.createElement('div');
    box.className = 'glyph-box';
    box.textContent = translit;

    const kanDiv = document.createElement('div');
    kanDiv.className = 'kannada';
    kanDiv.textContent = kannada;

    box.appendChild(kanDiv);
    glyphGrid.appendChild(box);
  });
});
