export type JobType = '백엔드' | '프론트' | '게임' | 'AI' | '디자이너' | 'PM';

export const QUESTIONS = [
  {
    id: 1,
    content: "나는 개발하는 것에 흥미를 느낀다.",
    scores: {
      yes: { 백엔드: 5, 프론트: 5, 게임: 5, AI: 5 },
      no: { 디자이너: 5, PM: 5 }
    }
  },
  {
    id: 2,
    content: "나는 문제를 정의하는 것보다\n해결하는 것을 좋아한다.",
    scores: {
      yes: { 디자이너: 5, PM: 5 },
      no: { 백엔드: 5, 프론트: 5, 게임: 5, AI: 5 }
    }
  },
  {
    id: 3,
    content: "나는 사람들과 의견을 조율하는 것에\n자신이 있다.",
    scores: {
      yes: { 디자이너: 5, PM: 5 },
      no: { 백엔드: 5, 프론트: 5, 게임: 5, AI: 5 }
    }
  },
  {
    id: 4,
    content: "나는 계획, 규칙을 만들고\n설계하는 과정이 즐겁다.",
    scores: {
      yes: { PM: 6, 백엔드: 6 },
      no: {}
    }
  },
  {
    id: 5,
    content: "나는 내가 한 일이\n눈에 보이는 게 좋다.",
    scores: {
      yes: { 디자이너: 4, 프론트: 4 },
      no: {}
    }
  },
  {
    id: 6,
    content: "나는 게임을 즐겨한다.",
    scores: {
      yes: { 게임: 7 },
      no: {}
    }
  },
  {
    id: 7,
    content: "나는 수학에 자신이 있다.",
    scores: {
      yes: { AI: 8 },
      no: {}
    }
  }
];

// 동점 발생 시 우선순위
export const PRIORITY: JobType[] = ['백엔드', '프론트', 'AI', 'PM', '게임', '디자이너'];