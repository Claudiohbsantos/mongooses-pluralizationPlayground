import { showResults } from './pluralize';
import { toggleInfoVisibility } from './toggleInfoContent';

showResults();

const textInput = document.getElementById('modelinput');
textInput.addEventListener('input', ({ target: inputEl }) => {
  showResults(inputEl.value);
});

const infoHeader = document.getElementById('info-header');
infoHeader.addEventListener('click', toggleInfoVisibility);
