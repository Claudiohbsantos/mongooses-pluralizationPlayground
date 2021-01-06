import pluralize from 'mongoose-legacy-pluralize';

showResults()
const textInput = document.getElementById('modelinput');
textInput.addEventListener('input', ({target: inputEl}) => {
  showResults(inputEl.value)
})

function showResults(modelName) {
  // const collectionName = modelName ? pluralize(modelName) : makeHint();

  const resultEl = document.getElementById('result');
  resultEl.innerHTML = '';
  resultEl.appendChild(modelName ? document.createTextNode(pluralize(modelName)) : makeHint());
  resultEl.style.color = modelName ? 'black' : '#888'
}

function makeHint() {
  // const defaultStr = 'type a model name above to see mongoose inferred collection name';

  const modelLink = document.createElement('a');
  modelLink.innerText = 'model';
  modelLink.href = 'https://mongoosejs.com/docs/models.html';

  const collectionLink = document.createElement('a');
  collectionLink.innerText = 'collection';
  collectionLink.href = 'https://docs.mongodb.com/manual/core/databases-and-collections/#collections';

  const hint = document.createElement('span');
  hint.appendChild(document.createTextNode('type a '));
  hint.appendChild(modelLink);
  hint.appendChild(document.createTextNode(' name above to see mongoose\'s inferred '));
  hint.appendChild(collectionLink);
  hint.appendChild(document.createTextNode(' name'));

  return hint
}