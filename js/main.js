const elQuestionAnswer = document.querySelector(".question__answer");
const elQuestionTop = document.querySelector(".question__top");

elQuestionTop.addEventListener("click", function () {
  elQuestionAnswer.classList.toggle("question__answer-open");
});
