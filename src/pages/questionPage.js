import { loadPage } from '../helpers/loadPage.js';
import { createQuestionView } from '../views/questionView.js';
import { initResultPage } from './resultPage.js';

export const initQuestionPage = (data) => {
  const currentQuestion = data.questions[data.currentQuestionIndex];
  const { score, currentQuestionIndex, questions } = data;

  const onNextClick = () => {
    if (data.currentQuestionIndex === data.questions.length - 1) {
      loadPage(initResultPage, data);
    } else {
      data.currentQuestionIndex += 1;
      loadPage(initQuestionPage, data);
    }
  };

  const handleAnswer = (currentQuestion, selected) => {
    clearInterval(intervalId);
    currentQuestion.selected = selected;
    if (currentQuestion.correct === selected) {
      data.score++; // if the user choose right option score increases
    }
    view.showAnswer(currentQuestion, data.score); // data.score sended to showAnswer function
  };

  const onSkipClick = () => {
    currentQuestion.selected = null;
    view.showAnswer(currentQuestion, score);
    setTimeout(onNextClick, 1000);
  };

  let count = 10;
  let intervalId = null;
  const counterRender = () => {
    if (count > 0) {
      count--;
      view.showCount(count);
    } else {
      count = 5;
      currentQuestion.selected = null;
      view.showAnswer(currentQuestion, score);
      clearInterval(intervalId);
    }
  };

  intervalId = setInterval(counterRender, 1000);

  const props = {
    currentQuestion,
    onNextClick,
    onSkipClick,
    handleAnswer,
    score,
    currentQuestionIndex,
    questionLength: questions.length,
    count,
  }; // data added to questionView. Because we want to reach data.score in questionView

  const view = createQuestionView(props);

  return view;
};
