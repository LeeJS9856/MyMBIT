export const QUESTIONS = [
  {
    id: 1,
    content: "새로운 사람들과 만나는 자리가\n즐거우신가요?",
    type: "EI", // 외향(E) vs 내향(I)
    options: {
      yes: { text: "완전 즐거워!", value: "E" },
      no: { text: "혼자가 좋아...", value: "I" },
    },
  },
  {
    id: 2,
    content: "업무를 할 때 계획을 세우는 것이\n편하신가요?",
    type: "PJ", // 판단(J) vs 인식(P)
    options: {
      yes: { text: "계획은 필수지!", value: "J" },
      no: { text: "그때그때 달라요.", value: "P" },
    },
  },
  {
    id: 3,
    content: "친구가 우울하다고 할 때\n당신의 반응은?",
    type: "TF", // 사고(T) vs 감정(F)
    options: {
      yes: { text: "왜 우울해? 무슨 일이야?", value: "F" },
      no: { text: "헐 나도 우울해지려 해..", value: "T" },
    },
  },
];