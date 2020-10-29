const startBtn = document.querySelector(".start-btn");
const hero = document.querySelector(".hero");
const qna = document.querySelector(".qna");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");

const SELECTED = [];
let questionIndex = 0;

const FADE_OUT = "fade-out 0.3s forwards";
const FADE_IN = "fade-in 0.3s forwards";

function selectResult(score) {
  let num = 0;
  if (9999 <= score) {
    num = 0;
  } else if (score <= 70) {
    num = 1;
  } else if (score <= 80) {
    num = 2;
  } else if (score <= 105) {
    num = 3;
  } else if (score <= 115) {
    num = 4;
  } else if (score <= 135) {
    num = 5;
  } else if (score <= 145) {
    num = 6;
  } else if (score <= 150) {
    num = 7;
  } else if (score <= 155) {
    num = 8;
  } else if (score <= 165) {
    num = 9;
  } else if (score <= 175) {
    num = 10;
  } else if (score <= 185) {
    num = 11;
  } else if (185 < score < 9999) {
    num = 12;
  } else if (score <= 10000) {
    num = 13;
  }
  return num;
}

function calcScore() {
  let value = 0;
  for (let i = 0; i < SELECTED.length; i++) {
    value += qnaList[i].a[SELECTED[i].aIndex].score;
  }
  return value;
}

function resultCalc() {
  const resultTitle = document.querySelector(".result__name");
  const resultInfo = document.querySelector(".result__info");
  const video = document.querySelector(".video iframe");
  const score = calcScore();
  const resultIndex = selectResult(score);
  if (SELECTED[0].aIndex === "0") {
    resultTitle.innerText = resultList[0].title;
    resultInfo.innerText = resultList[0].info;
    video.src = resultList[0].video;
  } else if (SELECTED[1].aIndex === "1") {
    resultTitle.innerText = resultList[13].title;
    resultInfo.innerText = resultList[13].info;
    video.src = resultList[13].video;
  } else {
    resultTitle.innerText = resultList[resultIndex].title;
    resultInfo.innerText = resultList[resultIndex].info;
    video.src = resultList[resultIndex].video;
  }
}

function goResult() {
  qna.style.animation = FADE_OUT;
  result.style.animation = FADE_IN;

  console.log(SELECTED);
  setTimeout(() => {
    result.style.display = "block";
    qna.style.display = "none";
    resultCalc();
  }, 300);
}

function printAnswerBtn(answerText, index) {
  const choiceBtn = document.createElement("button");
  const qnaWrap = document.querySelector(".qna-wrap");
  const choiceContainer = qnaWrap.querySelector(".qna__choice");

  choiceBtn.innerText = answerText;
  choiceContainer.append(choiceBtn);

  choiceBtn.addEventListener("click", () => {
    qnaWrap.style.animation = FADE_OUT;
    const selectObj = {
      qIndex: questionIndex - 1,
      aIndex: index
    };

    const { qIndex, aIndex } = selectObj;
    SELECTED.push(selectObj);

    if (qIndex === 0 && aIndex === "0") {
      goResult();
    } else if (qIndex === 1 && aIndex === "1") {
      goResult();
    }
    setTimeout(() => {
      choiceContainer.innerText = "";
      qnaWrap.style.animation = FADE_IN;
      questionTime();
    }, 300);
  });
}

function questionTime() {
  const qnaPage = document.querySelector(".qna__page");
  const questionTitle = document.querySelector(".qna__title");

  if (questionIndex === qnaList.length) {
    goResult();
    return;
  }

  qnaPage.innerText = `${questionIndex + 1} / 10`;
  const question = qnaList[questionIndex];
  questionTitle.innerText = question.q;

  for (let i in question.a) {
    printAnswerBtn(question.a[i].answer, i);
  }
  questionIndex++;
}

function handleStart() {
  hero.style.animation = FADE_OUT;
  qna.style.animation = FADE_IN;
  setTimeout(() => {
    hero.style.display = "none";
    qna.style.display = "block";
    questionTime();
  }, 400);
}

function init() {
  startBtn.addEventListener("click", handleStart);
}

init();
