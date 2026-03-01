import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import LogoBtn from '@/assets/logo.svg';

const Main = (): React.JSX.Element => {
  return (
    <MainContainer>
      <BackgroundLogo src={LogoBtn} alt="Background Logo" />

      <Header>
        <Title>ECONOVATION</Title>
      </Header>

      <Body>
        <IntroTextContainer>
          {/* 첫 번째 줄: 내 MBIT (글자 아래 기준 정렬) */}
          <FirstLine>
            <SmallBlackText>내</SmallBlackText>
            <BigPrimaryText>MBIT</BigPrimaryText>
          </FirstLine>
          
          {/* 두 번째 줄: 알아보기 */}
          <SecondLine>
            <SmallBlackText>알아보기</SmallBlackText>
          </SecondLine>
        </IntroTextContainer>
      </Body>

      <Footer>
        <StartButton onClick={() => alert('테스트 시작!')}>시작</StartButton>
      </Footer>
    </MainContainer>
  );
};

// --- 스타일 컴포넌트 ---

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-color: ${COLORS.white || '#ffffff'};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const BackgroundLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: auto;
  z-index: 0;
  pointer-events: none;
`;

/* 레이아웃 구조 */
const Header = styled.header`
  z-index: 1;
  padding: 30px 20px;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  color: ${COLORS.primary};
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 4px;
`;

const Body = styled.main`
  z-index: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center; /* 화면 정중앙 배치 */
  text-align: center;
`;

const IntroTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end; /* 핵심: 서로 다른 크기의 글자를 아래 라인에 맞춤 */
  gap: 10px; /* '내'와 'MBIT' 사이 간격 */
  line-height: 0.8;
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
`;

const SmallBlackText = styled.span`
  color: ${COLORS.black};
  font-size: 2.5rem; /* 작은 글씨 크기 */
  font-weight: 500;
  padding-bottom: 4px; /* 기준선을 더 세밀하게 맞추고 싶을 때 미세조정용 */
`;

const BigPrimaryText = styled.span`
  color: ${COLORS.primary}; /* 노란색 상점 */
  font-size: 4rem; /* 큰 글씨 크기 */
  font-weight: 900;
  line-height: 1; /* 글자 주변 기본 여백 제거해서 정렬 더 정확하게 */
`;

const Footer = styled.footer`
  z-index: 1;
  padding: 40px 20px;
`;

const StartButton = styled.button`
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 10px;
  background-color: ${COLORS.primary};
  color: ${COLORS.white};
  font-size: 1.5rem;
  font-weight: bold;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

export default Main;