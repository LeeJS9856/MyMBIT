import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '@/components/layout/PageLayout';
import { COLORS } from '@/constants/colors';
import { QUESTIONS } from '@/constants/questions';

const Question = () => {
  const navigate = useNavigate();
  
  // 현재 질문의 인덱스 (0부터 시작)
  const [currentIndex, setCurrentIndex] = useState(0);
  // 사용자의 선택 결과 저장
  const [answers, setAnswers] = useState<string[]>([]);

  // 현재 보여줄 질문 데이터
  const currentQuestion = QUESTIONS[currentIndex];

  const handleAnswer = (value: string) => {
    // 1. 답변 저장
    const newAnswers = [...answers, value];
    setAnswers(newAnswers);

    // 2. 다음 질문으로 넘어가거나 결과창으로 이동
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      // 모든 질문이 끝났을 때 결과 페이지로 이동 (데이터를 가지고 이동 가능)
      console.log("최종 답변 모음:", newAnswers);
      navigate('/result', { state: { answers: newAnswers } });
    }
  };

  const footer = (
    <ButtonGroup>
      <HalfButton 
        $bgColor={COLORS.primary} 
        $textColor={COLORS.white}
        onClick={() => handleAnswer(currentQuestion.options.yes.value)}
      >
        YES
      </HalfButton>

      <HalfButton 
        $bgColor={COLORS.white} 
        $textColor={COLORS.black}
        onClick={() => handleAnswer(currentQuestion.options.no.value)}
      >
        NO
      </HalfButton>
    </ButtonGroup>
  );

  return (
    <PageLayout footer={footer}>
      <QuestionWrapper>
        {/* 질문 번호 표시 (선택사항) */}
        <StepText>Q{currentQuestion.id}.</StepText>
        <QuestionText>
          {currentQuestion.content.split('\n').map((line, i) => (
            <React.Fragment key={i}>{line}<br/></React.Fragment>
          ))}
        </QuestionText>
      </QuestionWrapper>
    </PageLayout>
  );
};

// --- 스타일 컴포넌트 ---

const QuestionWrapper = styled.div`
  text-align: center;
`;

const StepText = styled.p`
  color: ${COLORS.primary};
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

const QuestionText = styled.h2`
  font-size: 1.6rem;
  line-height: 1.5;
  word-break: keep-all;
  color: ${COLORS.black};
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px; 
  width: 100%;
`;

const HalfButton = styled.button<{ $bgColor?: string; $textColor?: string }>`
  flex: 1;
  padding: 15px 10px;
  border-radius: 10px;
  background-color: ${props => props.$bgColor || '#000000'};
  color: ${props => props.$textColor || '#ffffff'};
  border: 1px solid rgba(0, 0, 0, 0.05);
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: all 0.2s;

  &:active { transform: scale(0.95); }
`;

export default Question;