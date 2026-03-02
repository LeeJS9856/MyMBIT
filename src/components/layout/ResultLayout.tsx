import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import LogoBtn from '@/assets/logo.svg';
import { useNavigate } from 'react-router-dom';

interface PageLayoutProps {
  children: React.ReactNode; // 중앙 내용
  footer?: React.ReactNode;   // 하단 버튼 영역
}

const PageLayout = ({ children, footer }: PageLayoutProps) => {
const navigate = useNavigate();
const handleClick = () => {
    navigate('/');
  };
  return (
    <MainContainer>
      <BackgroundLogo src={LogoBtn} alt="Background" />
      <Header>
        <Title onClick={handleClick}>ECONOVATION</Title>
      </Header>
      <Body>{children}</Body>
      {footer && <Footer>{footer}</Footer>}
    </MainContainer>
  );
};

const MainContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background-color: ${COLORS.white};
  display: flex;
  flex-direction: column;
  overflow: hidden;
  margin: 0 auto;
`;

const BackgroundLogo = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  z-index: 0;
  pointer-events: none;
`;

const Header = styled.header`
  z-index: 1;
  padding: 30px 20px;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 1.2rem;
  letter-spacing: 4px;
  color : ${COLORS.primary};
`;

const Body = styled.main`
  z-index: 1;
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

const Footer = styled.footer`
  z-index: 1;
  padding: 40px 20px;
`;

export default PageLayout;