const start_btn = document.querySelector(".start-btn");
const hero = document.querySelector(".hero");
const qna = document.querySelector(".qna");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");

const SELECT = [];
const ENDPOINT = 3;
let qIndex = -1;

const end = () => {
    qna.style.animation = "fade-out 0.3s forwards";
    result.style.animation = "fade-in 0.3s forwards";
    setTimeout(()=> {
        qna.style.display = "none";
        result.style.display = "block";
    }, 500);
}

//다른 분 블로그 보고 일단은 따라 해봤지만 아직 코드가 제대로 이해되지 않음.
//천천히 뜯어보면서 이해하고 내가 편한 방법으로 새로 해보기

const qnaAnswer = (answerText, index) => {
    const choiceBtn = document.createElement("button");
    const choiceContainer = document.querySelector(".qna__choice");
    choiceBtn.innerText = answerText;
    choiceBtn.classList.add("choice-btn");
    choiceContainer.appendChild(choiceBtn);

    choiceBtn.addEventListener("click", () => {
        const parent = choiceContainer.parentNode;
        const children = parent.childNodes;
        for (let i in children) {
            children[i].disabled = true;
        }
        setTimeout(() => {
            SELECT[qIndex] = index; 
            choiceContainer.innerHTML = '';
            qnaTitle();
        }, 300);
    });
}

const qnaTitle = () => {
    if(qIndex++ === qnaList.length - 1) {
        end();
        return;
    }
    const qNum = qnaList[qIndex];
    const qTitle = document.querySelector(".qna__title");
    const currentPage = document.querySelector(".qna__page span:first-child");

    qTitle.innerText = qNum.q;

    for (let i in qNum.a) {
        qnaAnswer(qNum.a[i].answer, i);
    }
}

const handleStart = () => {
    hero.style.animation = "fade-out 0.3s forwards";
    qna.style.animation = "fade-in 0.3s forwards";
    setTimeout(()=> {
        hero.style.display = "none";
        qna.style.display = "block";
    }, 500);
    qnaTitle();
}

function init() {
    start_btn.addEventListener("click", handleStart);
}

init();