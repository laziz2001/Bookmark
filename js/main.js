const elQuestionAnswer = document.querySelector(".question__answer");
const elQuestion = document.querySelector(".question");
const elQuestionTopImg = document.querySelector(".question__top-img");

if (elQuestion) {
  elQuestion.addEventListener("click", function () {
    elQuestionAnswer.classList.toggle("question__answer-open");
    elQuestionTopImg.classList.toggle("js-question__top-img");
  });
}
