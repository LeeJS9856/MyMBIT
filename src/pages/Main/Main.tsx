import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import LogoBtn from '@/assets/logo.svg';

const Main = (): React.JSX.Element => {
  return (
    <MainContainer>
      {/* 배경으로 깔리는 로고 */}
      <BackgroundLogo src={LogoBtn} alt="Background Logo" />

      {/* 여기에 다른 컴포넌트들이 들어와도 로고는 뒤에 고정됩니다 */}
      <ContentWrapper>
        <HelloWorldText>helloworld</HelloWorldText>
        {/* 추가 컴포넌트 예시 */}
        {/* <Button>시작하기</Button> */}
      </ContentWrapper>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative; /* 로고 배치의 기준점 */
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  overflow: hidden; /* 로고가 영역을 벗어나도 스크롤 방지 */
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const BackgroundLogo = styled.img`
  /* 핵심 설정: 레이아웃에서 제외하고 배경으로 고정 */
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 정확히 정중앙 배치 */
  
  width: 100%;             /* 가로 꽉 차게 */
  height: auto;            /* 비율 유지 */
  pointer-events: none;    /* 클릭 이벤트가 로고를 통과하게 함 (뒤에 버튼 클릭 방해 방지) */
`;

const ContentWrapper = styled.div`
  position: relative;
  z-index: 1;              /* 로고보다 앞에 오도록 설정 */
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HelloWorldText = styled.h1`
  color: ${COLORS.primary};
  font-size: 3rem;
  /* GlobalStyle의 제주돌담체가 적용됨 */
`;

export default Main;