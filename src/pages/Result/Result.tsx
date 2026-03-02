import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ResultLayout from '@/components/layout/ResultLayout';
import frontImg from '@/assets/front.svg';
// ... 이미지들 import 생략
import type { JobType } from '@/constants/types';

const Result = () => {
  const location = useLocation();
  const resultJob = (location.state?.result as JobType) || '백엔드';

  const jobImages: Record<JobType, string> = {
    '프론트': frontImg, '백엔드': frontImg, 'AI': frontImg,
    '게임': frontImg, 'PM': frontImg, '디자이너': frontImg,
  };

  return (
    <ResultLayout jobType={resultJob}>
      <ImageWrapper>
        <ResultImage src={jobImages[resultJob]} alt={resultJob} />
      </ImageWrapper>
    </ResultLayout>
  );
};

const ImageWrapper = styled.div` width: 100%; display: flex; justify-content: center;`;
const ResultImage = styled.img` width: 100%; height: auto; `;

export default Result;