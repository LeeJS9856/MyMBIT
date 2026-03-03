import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import ResultLayout from '@/components/layout/ResultLayout';
import frontImg from '@/assets/front.svg';
import backImg from '@/assets/back.svg';
import aiImg from '@/assets/ai.svg';
import gameImg from '@/assets/game.svg';
import designerImg from '@/assets/designer.svg';
import pmImg from '@/assets/pm.svg';
import LoadingModal from '@/components/common/LoadingModal';
import type { JobType } from '@/constants/types';

const Result = () => {
  const location = useLocation();
  const resultJob = (location.state?.result as JobType) || '백엔드';
  const [showModal, setShowModal] = useState(true);
  const jobImages: Record<JobType, string> = {
    '프론트': frontImg, '백엔드': backImg, 'AI': aiImg,
    '게임': gameImg, 'PM': pmImg, '디자이너': designerImg,
  };

  return (
    <>
      {/* 1. BlurContainer로 결과 레이아웃을 감쌉니다. */}
      <BlurContainer isBlur={showModal}>
        <ResultLayout jobType={resultJob}>
          <ImageWrapper>
            <ResultImage src={jobImages[resultJob]} alt={resultJob} />
          </ImageWrapper>
        </ResultLayout>
      </BlurContainer>

      {/* 2. 모달 표시 */}
      {showModal && (
        <LoadingModal onConfirm={() => setShowModal(false)} />
      )}
    </>
  );
};

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-15px); /* 위로 15px 이동 */
  }
  100% {
    transform: translateY(0px);
  }
`;

const BlurContainer = styled.div<{ isBlur: boolean }>`
  width: 100%;
  height: 100%;
  filter: ${({ isBlur }) => (isBlur ? 'blur(10px)' : 'none')};
  transition: filter 0.4s ease-in-out;
  overflow: hidden;
`;
const ImageWrapper = styled.div`display: flex; justify-content: center;`;
const ResultImage = styled.img`
  flex: 1;
  max-width: 100%;
  height: auto;
  
  animation: ${float} 3s ease-in-out infinite;
  
  /* 이미지 퀄리티 유지 */
  object-fit: contain;
`;

export default Result;