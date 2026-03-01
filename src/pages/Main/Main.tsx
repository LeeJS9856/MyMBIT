import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';

const Main = (): React.JSX.Element => {
  return (
    <MainContainer>
      <HelloWorldText>helloworld</HelloWorldText>
    </MainContainer>
  );
};

// 앱의 흰색 도화지 영역
const MainContainer = styled.div`
  width: 100%;
  max-width: 500px; /* 모바일 너비 제한 */
  height: 100vh;    /* 전체 높이 */
  background-color: ${COLORS.white || '#ffffff'};
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
`;

const HelloWorldText = styled.h1`
  color: ${COLORS.text?.yellow || '#ffff00'};
  font-size: 3rem;
  /* GlobalStyle에서 폰트를 지정했으므로 별도로 안 써도 적용됩니다! */
`;

export default Main;