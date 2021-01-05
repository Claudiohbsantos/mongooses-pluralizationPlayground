import pluralize from 'mongoose-legacy-pluralize';

showResults()
const textInput = document.getElementById('modelinput');
textInput.addEventListener('input', ({target: inputEl}) => {
  showResults(inputEl.value)
})

function showResults(modelName) {
  const defaultStr = 'type a model name above to see mongoose inferred collection name';
  const collectionName = modelName ? pluralize(modelName) : defaultStr;

  const resultEl = document.getElementById('result');
  resultEl.innerHTML = collectionName
  resultEl.style.color = modelName ? 'black' : '#888'
}

