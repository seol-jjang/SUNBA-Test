const qnaList = [
  {
    q: "혹시.. 롤에 미치셨나요?",
    a: [
      { answer: "a. I LOVE YOU RIOT", score: 9999 },
      { answer: "b. 미치진 않았습니다", score: 1 }
    ]
  },
  {
    q: "선호하는 영상 길이는?",
    a: [
      { answer: "a. 짧은 영상", score: 0 },
      { answer: "b. 24시간이 모자른 엄청 긴 영상", score: 10000 },
      { answer: "c. 둘 다 좋아한다", score: 0 }
    ]
  },
  {
    q: "게임을 할 때 중요하게 여기는 것은?",
    a: [
      { answer: "a. 스토리가 중요해!", score: 5 },
      { answer: "b. 재미만 있으면 돼!", score: 30 }
    ]
  },
  {
    q: "친구가 무엇을 물어볼 때",
    a: [
      { answer: "a. (아는 척한다)", score: 5 },
      { answer: "b. 그거~ (설명함)", score: 13 },
      { answer: "c. 그게 뭔데?(모름)", score: 30 }
    ]
  },
  {
    q: "좋아하는 유튜버의 흑역사를 볼 때",
    a: [
      { answer: "a. 아유 부끄러...", score: 3 },
      { answer: "b. ㅋㅋㅋㅋㅋ열심히 놀린다", score: 30 }
    ]
  },
  {
    q: "노래방에서 나의 포지션은?",
    a: [
      { answer: "a. 노래에 맞춰서 춤추기", score: 17 },
      { answer: "b. 열심히 노래 부르기", score: 30 },
      { answer: "c. 춤추고 노래부르는 거 구경하기", score: 3 }
    ]
  },
  {
    q: "다른 사람과 의견이 대립할 때",
    a: [
      { answer: "a. 내 주장을 강하게 내세운다", score: 22 },
      { answer: "b. 다른 사람의 의견을 수용한다", score: 4 }
    ]
  },
  {
    q: "가장 끌리는 것은?",
    a: [
      { answer: "a. 10만원", score: 22 },
      { answer: "b. 노래방기계", score: 5 },
      { answer: "c. 치킨", score: 13 }
    ]
  },
  {
    q: "편의점에서 특이한 젤리를 발견했다면?",
    a: [
      { answer: "a. 호기심으로 구매한다", score: 15 },
      { answer: "b. 으.. 싫어.", score: 5 }
    ]
  },
  {
    q: "나는 이런 사람이 좋아요",
    a: [
      { answer: "a. 말을 재미있게 하는 사람", score: 30 },
      { answer: "b. 말을 조리있게 하는 사람", score: 5 }
    ]
  }
];
const resultList = [
  {
    title: "롤과 연애하는 선바",
    info: "롤과 지독하게 연애 중인 당신.. 롤낀선을 추천합니다",
    video: "https://www.youtube.com/embed/Wr6IoEmpCrY" //롤낀선
  },
  {
    title: "추리게임하는 선바",
    info: "상당히 잘 맞춤",
    video: "https://www.youtube.com/embed/s0BcV1GXcnU" //페인스크릭
  },
  {
    title: "음악 유튜버 선바",
    info: "사실 본업은 음악 유튜버",
    video: "https://www.youtube.com/embed/VQSBHFF0_-A" //훈수송
  },
  {
    title: "겁쟁이 선바",
    info: "흠믐므...",
    video: "https://www.youtube.com/embed/anhZ824Zcug" //파스모포비아
  },
  {
    title: "동심파괴 유튜버 선바",
    info: "딱선준",
    video: "https://www.youtube.com/embed/jTyhuEQfTK0" //미용실
  },
  {
    title: "자낳괴 선바",
    info: "(투더문)",
    video: "https://www.youtube.com/embed/z-ir_IWu9EM" //웃으면 10만원
  },
  {
    title: "괴식 유튜버 선바",
    info: "혹시 고통을 즐기나요?",
    video: "https://www.youtube.com/embed/Co-xDH3nhuo" //딸기라면
  },
  {
    title: "3분먹방 선바",
    info: "음↗ 으음~ 음→↗",
    video: "https://www.youtube.com/embed/57Xl2PyuX8M" //치즈곱창
  },
  {
    title: "춤 신 춤 왕 선바",
    info: "자매품 바리아나구란데",
    video: "https://www.youtube.com/embed/4Ib48YX_Qno" //라스푸틴
  },
  {
    title: "똥겜스트리머 선바",
    info: "와장창 우당탕 똥겜",
    video: "https://www.youtube.com/embed/1uxqDFV84sw" //핸드시뮬서바
  },
  {
    title: "75바",
    info: "75kg 선바는 없습니다. 보는 즉시 도망치십시오",
    video: "https://www.youtube.com/embed/F1_icS8jgY8" //75바
  },
  {
    title: "월드컵 중독 선바",
    info: "치료가 필요할 정도로 심각한 '월드컵 중독증' 입니다",
    video: "https://www.youtube.com/embed/K2F7gPtd0Ew" //순정만화월드컵
  },
  {
    title: "쌉소리 하는 선바",
    info: "오옹?",
    video: "https://www.youtube.com/embed/5XJcx83MNY4" //기묘캠
  },
  {
    title: "선바와 24시간을 함께",
    info: "놓친 생방송은 다시보기 채널에서 볼 수 있어요!",
    video: "https://www.youtube.com/embed/88CIlx4uMNk" //다시보기빡빡바
  }
];

/*
-롤 -> 답정너롤낀선
-홍대병, -> 식섭이, 지코, 딸기라면.. 등등 유행 따라가야한다 -> 따라간다 or 안따라가도됨
-옴닉방송, -> 규칙? 기계같은 사람? 
-헛소리, -> 토크좋아함, 예상하지 못한 일이 생겼을 때 -> 당황하지 않고 아무말 (슬라임가지고노는거)
-월드컵, -> 순위매기기, 헛소리
-공포게임 -> 게임좋아함, 고통받는거 좋아함 흠믐므...
-플래시게임 -> 재미 중요, 헛소리
-키덜트(장난감리뷰) -> 쌉소리좋아함, 재밌으면장땡
-먹방 -> 먹방 + 쌉소리 좋아함, 이상한 먹방..
춤방 -> 저댄, 활동적인거 좋아함
-음악 -> 영상미? 일단 훈수송
친구 -> 여러명과 두루두루 / 적은 인원과 깊게
*/

/* 
계산 로딩화면에 명언+쌉소리넣기
*/
