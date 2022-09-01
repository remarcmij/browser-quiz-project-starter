import { createAnswerElement } from './answerView.js';
import { findElementsWithIds } from '../helpers/findElementsWithIds.js';

/*
 * Create a full question element
 * @returns {{Element}}
 */
export const createQuestionView = (props) => {
  const { currentQuestion, onNextClick, onPrevClick, handleAnswer } = props;
  const element = document.createElement('div');

  // I use String.raw just to get fancy colors for the HTML in VS Code.
  element.innerHTML = String.raw`
    <h1>${currentQuestion.text}</h1>

    <ul id="answerList">
    </ul>

    <button id="btnPrev">
      Prev question
    </button>

    <button id="btnNext">
      Next question
    </button>
  `;

  const { answerList, btnNext, btnPrev } = findElementsWithIds(element);

  for (const [key, answerText] of Object.entries(currentQuestion.answers)) {
    const { element: answerElement } = createAnswerElement({ key, answerText });
    answerList.appendChild(answerElement);
    //y - added addEventListener to each answer element and sended key, answerText, correctAnswer and selectedAnswer parameters to answerHandle function
    //y - used arrow function in addEventListener to send parameters. If we don't use arrow function, the function will invoked when the page is loaded,
    //not when user clicks
    answerElement.addEventListener('click', () => {
      handleAnswer(currentQuestion, key);
    });
  }

  btnPrev.addEventListener('click', onPrevClick);
  btnNext.addEventListener('click', onNextClick);

  const showAnswer = (currentQuestion) => {
    console.log({ currentQuestion });

    const answers = element.querySelectorAll('.answer-item');
    for (let i = 0; i < answers.length; i++) {
      answers[i].classList.add('disabled');
    }
  };

  return { element, showAnswer };
};
