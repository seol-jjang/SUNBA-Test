const qnaList = [
    {
        q: "1. 유행",
        a: [
            {answer: 'a. 굳이 따라가야 해?', score: 6},
            {answer: 'b. 이미 알고 있어', score: 2},
            {answer: 'c. 그런게 유행이야?', score: 4}
        ]
    },
    {
        q: "2. 영상을 볼 때 중요하게 여기는 것은?",
        a: [
            {answer: 'a. 영상미가 중요하지!', score: 2},
            {answer: 'b. 재밌으면 장땡이야!', score: 6}
        ]
    },
    {
        q: "3. 나의 게임 스타일은?",
        a: [
            {answer: 'a. 솔로플레이', score: 6},
            {answer: 'b. 파티플레이', score: 2}
        ]
    },
    {
        q: "4. 영상 길이",
        a: [
            {answer: 'a. 최대한 오래 봐야 해! 긴 영상이 좋아', score: 3},
            {answer: 'b. 짧게 짧게 여러 개를 보는 게 좋아', score: 5}
        ]
    },
    {
        q: "5. 편의점에서 특이한 젤리를 발견했다",
        a: [
            {answer: 'a. 호기심으로 구매한다', score: 6},
            {answer: 'b. 으 먹던 거 먹자', score: 2}
        ]
    },
    {
        q: "10. 혹시.. 롤에 미치셨나요?",
        a: [
            {answer: 'a. I LOVE YOU RIOT', score: 9999},
            {answer: 'b. 아니요?', score: 1}
        ]
    }
];
const resultList = [
    {
        title: "쌉소리 하는 선바",
        info: "오옹?",
        link: 'https://www.youtube.com/embed/lSFFvWYWkW8'
    },
    {
        title: "똥겜스트리머 선바",
        info: "와장창 우당탕 똥겜",
        link: 'https://www.youtube.com/embed/1uxqDFV84sw'
    },
    {
        title: "겁쟁이 선바",
        info: "흠믐므...",
        link: 'https://www.youtube.com/embed/dF7CDsgK5Ek'
    },
    {
        title: "월드컵 중독 선바",
        info: "치료가 필요할 정도로 심각한 '월드컵 중독증' 입니다",
        link: 'https://www.youtube.com/embed/lSFFvWYWkW8'
    },
    {
        title: "괴식 유튜버 선바",
        info: "혹시 고통을 즐기나요?",
        link: 'https://www.youtube.com/embed/Co-xDH3nhuo'
    },
    {
        title: "안 씹고 먹방하는 선바",
        info: "음↗ 으음~ 음→↗",
        link: 'https://www.youtube.com/embed/57Xl2PyuX8M'
    },
    {
        title: "동심파괴 유튜버 선바",
        info: "딱선준",
        link: 'https://www.youtube.com/embed/jTyhuEQfTK0'
    },
    {
        title: "음악 유튜버 선바",
        info: "사실 본업은 음악 유튜버",
        link: 'https://www.youtube.com/embed/VQSBHFF0_-A'
    },
    {
        title: "롤과 연애하는 선바",
        info: "롤과 지독하게 연애 중인 당신.. 롤낀선을 추천합니다",
        link: 'https://www.youtube.com/embed/Wr6IoEmpCrY'
    }
];

/*
롤 -> 답정너롤낀선
홍대병, -> 식섭이, 지코, 딸기라면.. 등등 유행 따라가야한다 -> 따라간다 or 안따라가도됨
옴닉방송, -> 규칙? 기계같은 사람? 
헛소리, -> 토크좋아함, 예상하지 못한 일이 생겼을 때 -> 당황하지 않고 아무말 (슬라임가지고노는거)
월드컵, -> 순위매기기
공포게임 -> 게임좋아함, 고통받는거 좋아함 흠믐므...
플래시게임 -> 재미 중요, 헛소리
키덜트(장난감리뷰) -> 쌉소리좋아함, 재밌으면장땡
먹방 -> 먹방 + 쌉소리 좋아함, 이상한 먹방..
춤방 -> 저댄, 활동적인거 좋아함
음악 -> 영상미? 일단 훈수송
친구 -> 여러명과 두루두루 / 적은 인원과 깊게
*/

/* 
계산 로딩화면에 명언+쌉소리넣기
*/