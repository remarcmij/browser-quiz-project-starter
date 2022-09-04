/**
 * Create an Answer element
 * @returns {Element}
 */
export const createAnswerElement = (props) => {
  const { key, answerText } = props;
  const element = document.createElement('li');
  // added class name to each li element (answer-item)
  element.classList.add('answer-item');
  element.innerHTML = String.raw`
    <span>${key}</span> ${answerText}
  `;
  // added id for matching key with correct and selected
  element.setAttribute('id', `${key}`);
  return { element };
};
