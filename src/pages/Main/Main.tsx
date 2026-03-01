import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '@/components/layout/PageLayout';
import { COLORS } from '@/constants/colors';

const Main = () => {
  const navigate = useNavigate(); // 2. navigate 함수 선언

  const handleStart = () => {
    navigate('/question'); // 3. 클릭 시 이동할 경로 지정
  };
  const footer = (
    <FullButton onClick={handleStart}>시작하기</FullButton>
  );

  return (
    <PageLayout footer={footer}>
      <IntroTextContainer>
        <FirstLine>
          <SmallText>내</SmallText>
          <BigText>MBIT</BigText>
        </FirstLine>
        <SecondLine>알아보기</SecondLine>
      </IntroTextContainer>
    </PageLayout>
  );
};

// 스타일드 컴포넌트 (IntroTextContainer, SmallText, BigText 등은 기존과 동일)
const FullButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background: ${COLORS.primary};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
`;

const IntroTextContainer = styled.div` display: flex; flex-direction: column; gap: 8px; `;
const FirstLine = styled.div` display: flex; align-items: baseline; gap: 10px; `;
const BigText = styled.span` font-size: 4rem; color: ${COLORS.primary}; line-height: 1; margin-bottom: -8px; `;
const SmallText = styled.span` font-size: 1.8rem; line-height: 1; `;
const SecondLine = styled.div` font-size: 1.8rem; text-align: center; `;

export default Main;