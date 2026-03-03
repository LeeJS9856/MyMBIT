import { useMemo } from 'react'; // 1. useMemo 추가
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import PageLayout from '@/components/layout/PageLayout';
import { COLORS } from '@/constants/colors';

// 2. 모든 이미지들을 import 합니다.
import backIcon from '@/assets/back.svg';
import frontIcon from '@/assets/front.svg';
import designerIcon from '@/assets/designer.svg';
import gameIcon from '@/assets/game.svg';
import aiIcon from '@/assets/ai.svg';
import pmIcon from '@/assets/pm.svg';

const Main = () => {
  const navigate = useNavigate();

  // 3. 이미지 배열 생성
  const images = [backIcon, frontIcon, designerIcon, gameIcon, aiIcon, pmIcon];

  // 4. 새로고침 시 랜덤으로 하나 선택 (useMemo로 고정)
  const randomImage = useMemo(() => {
    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  }, []);

  const handleStart = () => {
    navigate('/question');
  };

  const footer = (
    <FullButton onClick={handleStart}>시작하기</FullButton>
  );

  return (
    <PageLayout footer={footer}>
      <ContentWrapper>
        <IntroTextContainer>
          <FirstLine>
            <SmallText>내</SmallText>
            <BigText>MBIT</BigText>
          </FirstLine>
          <SecondLine>알아보기</SecondLine>
        </IntroTextContainer>

        {/* 5. 선택된 랜덤 이미지 표시 */}
      </ContentWrapper>
    </PageLayout>
  );
};

// --- 스타일드 컴포넌트 (동일) ---

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 40px;
  margin-top: 40px;
`;

const MainImage = styled.img`
  width: 100%; /* 아이콘들이니 적절한 크기로 조정 */
  height: auto;
  display: block;
`;

const IntroTextContainer = styled.div` 
  display: flex; 
  flex-direction: column; 
  gap: 8px; 
  align-items: center;
`;

const FirstLine = styled.div` display: flex; align-items: baseline; gap: 10px; `;
const BigText = styled.span` font-size: 4rem; color: ${COLORS.primary}; line-height: 1; margin-bottom: -8px; `;
const SmallText = styled.span` font-size: 1.8rem; line-height: 1; `;
const SecondLine = styled.div` font-size: 1.8rem; `;

const FullButton = styled.button`
  width: 100%;
  padding: 15px;
  border-radius: 10px;
  background: ${COLORS.primary};
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  border: none;
  cursor: pointer;
`;

export default Main;