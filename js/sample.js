const start_btn = document.querySelector(".start-btn");
const hero = document.querySelector(".hero");
const qna = document.querySelector(".qna");
const page = document.querySelector(".qna__page");
const pageNum = document.createElement("span");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");

const END = 7;
const SELECT = [];
let questionIndex = -1;

const sortResult = (score) => {
  let num = 0;
  if (score >= 9999) {
    num = 9;
  } else {
    num = 0;
  }
  return num;
};

const calcScore = () => {
  let score = 0;
  for (let i = 0; i < END; i++) {
    score += qnaList[i].a[SELECT[i]].score;
  }
  return score;
};

const resultCalc = () => {
  const score = calcScore();
  const resultNum = sortResult(score);

  const resultTitle = document.querySelector(".result__name");
  const resultInfo = document.querySelector(".result__info");
  const video = document.querySelector(".video iframe");

  resultTitle.innerText = resultList[resultNum].title;
  resultInfo.innerText = resultList[resultNum].info;
  video.src = resultList[resultNum].link;
};

const end = () => {
  qna.style.animation = "fade-out 0.3s forwards";
  qna.style.display = "none";
  result.style.animation = "fade-in 0.3s forwards";
  setTimeout(() => {
    result.style.display = "block";
    resultCalc();
  }, 500);
};

const chooseAnswer = (answerText, index) => {
  const choiceBtn = document.createElement("button");
  const choiceContainer = document.querySelector(".qna__choice");

  choiceBtn.textContent = answerText;
  choiceContainer.appendChild(choiceBtn);

  choiceBtn.addEventListener("click", () => {
    const parent = choiceContainer.parentNode;
    const childrens = parent.childNodes;
    for (let i in childrens) {
      childrens[i].disabled = true;
    }
    parent.style.animation = "fade-out 0.3s forwards";
    setTimeout(() => {
      SELECT[questionIndex] = index; //anwser 번호
      choiceContainer.textContent = "";
      parent.style.animation = "fade-in 0.3s forwards";
      NextQuestion();
    }, 300);
  });
};

const NextQuestion = () => {
  if (questionIndex++ === qnaList.length - 1) {
    end();
    return;
  }

  pageNum.textContent = `${questionIndex + 1} / 10`;
  page.appendChild(pageNum);

  const questionNum = qnaList[questionIndex];
  const questionTitle = document.querySelector(".qna__title");
  questionTitle.textContent = questionNum.q;

  for (let i in questionNum.a) {
    chooseAnswer(questionNum.a[i].answer, i);
  }
};

const handleStart = () => {
  hero.style.animation = "fade-out 0.3s forwards";
  qna.style.animation = "fade-in 0.3s forwards";
  setTimeout(() => {
    hero.style.display = "none";
    qna.style.display = "block";
  }, 400);
  NextQuestion();
};

function init() {
  start_btn.addEventListener("click", handleStart);
}

init();
