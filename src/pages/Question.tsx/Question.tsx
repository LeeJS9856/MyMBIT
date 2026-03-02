import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '@/components/layout/PageLayout';
import { COLORS } from '@/constants/colors';
import { QUESTIONS, type JobType, PRIORITY } from '@/constants/questions';

const Question = () => {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 모든 직무의 초기 점수를 0으로 설정
  const [totalScores, setTotalScores] = useState<Record<JobType, number>>({
    백엔드: 0, 프론트: 0, 게임: 0, AI: 0, 디자이너: 0, PM: 0
  });

  const currentQuestion = QUESTIONS[currentIndex];

  const handleAnswer = (choice: 'yes' | 'no') => {
    // 1. 점수 계산
    const questionScores = currentQuestion.scores[choice];
    const newScores = { ...totalScores };

    Object.entries(questionScores).forEach(([job, score]) => {
      newScores[job as JobType] += score;
    });

    setTotalScores(newScores);

    // 2. 페이지 이동 로직
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 3. 결과 도출 (최고점 및 우선순위 반영)
      const finalResult = calculateResult(newScores);
      navigate('/result', { state: { result: finalResult } });
    }
  };

  const calculateResult = (scores: Record<JobType, number>): JobType => {
    // 최고 점수 찾기
    const maxScore = Math.max(...Object.values(scores));
    // 최고 점수를 가진 직무들 추출
    const winners = Object.keys(scores).filter(
      (job) => scores[job as JobType] === maxScore
    ) as JobType[];

    // 동점자 처리: PRIORITY 순서에서 가장 먼저 나오는 직무 반환
    return PRIORITY.find((job) => winners.includes(job))!;
  };

  const footer = (
    <ButtonGroup>
      <HalfButton $bgColor={COLORS.primary} $textColor={COLORS.white} onClick={() => handleAnswer('yes')}>YES</HalfButton>
      <HalfButton $bgColor={COLORS.white} $textColor={COLORS.black} onClick={() => handleAnswer('no')}>NO</HalfButton>
    </ButtonGroup>
  );

  return (
    <PageLayout footer={footer}>
      <QuestionWrapper>
        <StepText>{currentIndex + 1} / {QUESTIONS.length}</StepText>
        <QuestionText>
          {currentQuestion.content.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br/></React.Fragment>
          ))}
        </QuestionText>
      </QuestionWrapper>
    </PageLayout>
  );
};

// 스타일 컴포넌트 생략 (이전과 동일)
const QuestionWrapper = styled.div` text-align: center; `;
const StepText = styled.p` color: ${COLORS.primary}; font-weight: bold; margin-bottom: 20px; `;
const QuestionText = styled.h2` font-size: 1.6rem; line-height: 1.5; word-break: keep-all; `;
const ButtonGroup = styled.div` display: flex; gap: 15px; width: 100%; `;
const HalfButton = styled.button<{ $bgColor?: string; $textColor?: string }>`
  flex: 1; padding: 15px; border-radius: 10px; font-size: 1.5rem; font-weight: bold;
  background-color: ${props => props.$bgColor}; color: ${props => props.$textColor};
  border: 1px solid rgba(0,0,0,0.05); cursor: pointer;
`;

export default Question;