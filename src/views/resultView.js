import { findElementsWithIds } from '../helpers/findElementsWithIds.js';

/**
 * Create the result screen
 * @returns {Element}
 */
export const createResultView = (props) => {
  const { data, onRestartClick } = props;
  const element = document.createElement('div');
  let resultText = '';
  let index = 0;
  data.questions.forEach((question) => {
    index++;
    const className =
      question.correct === question.selected ? 'correct' : 'wrong';
    let answerText = '';
    if (question.selected === null) {
      answerText = `No answer given should be "${
        question.answers[question.correct]
      }"`;
    } else if (question.selected !== question.correct) {
      answerText = `Selected "${
        question.answers[question.selected]
      }" should be "${question.answers[question.correct]}"`;
    } else {
      answerText = question.answers[question.selected];
    }
    resultText += String.raw`
      <p>
        <cite><span>${index}</span>${question.text}</cite>
        <br>
        <answer class=${className}>${answerText}</answer>
      </p>
    `;
  });
  element.innerHTML = String.raw`
    <h1 class="results"> Well done, here is your scores ${data.score} of ${data.questions.length}</h1>
    <div class="results">${resultText}</div>
    
    <button id="btnRestart">Go<span>again</span></button>
  `;

  const { btnRestart } = findElementsWithIds(element);
  btnRestart.addEventListener('click', onRestartClick);
  return { element };
};
