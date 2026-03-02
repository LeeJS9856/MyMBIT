import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import LogoBtn from '@/assets/logo.svg';
import { JOB_MATCH_DETAILS, type JobType } from '@/constants/types';
import { useNavigate } from 'react-router-dom';

interface ResultLayoutProps {
  jobType: JobType;
  children: React.ReactNode; // 결과 이미지
}

const ResultLayout = ({ jobType, children }: ResultLayoutProps) => {
  const matchData = JOB_MATCH_DETAILS[jobType];
  const navigate = useNavigate();
  const handleClick = () => {
      navigate('/');
    };
  return (
    <MainContainer>
      <BackgroundLogo src={LogoBtn} alt="Background" />
      
      <ResultHeader>
        <Title onClick={handleClick}>ECONOVATION</Title>
        <ResultTitle>
          당신은 <Highlight>{jobType}</Highlight> 성향이에요
        </ResultTitle>
      </ResultHeader>

      <Body>
        {children} {/* 여기에 이미지가 들어옵니다 */}

        <InfoContainer>
          <LeftSection>
            <InfoGroup>
              <Label>비슷한 성향</Label>
              <Value>- {matchData.similar}</Value>
            </InfoGroup>
            <InfoGroup>
              <Label>잘 지내봐요</Label>
              <Value>- {matchData.compatible}</Value>
            </InfoGroup>
          </LeftSection>

          <RightSection>
            <RecruitText>31기 신입모집</RecruitText>
            <DateText>~3/10</DateText>
          </RightSection>
        </InfoContainer>
      </Body>
    </MainContainer>
  );
};

// --- 스타일 컴포넌트 (InfoContainer 등은 위와 동일하지만 가독성을 위해 배치) ---
const MainContainer = styled.div` position: relative; width: 100%; max-width: 500px; height: 100vh; background-color: ${COLORS.white}; display: flex; flex-direction: column; margin: 0 auto; `;
const BackgroundLogo = styled.img` position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); width: 95%; z-index: 0; pointer-events: none; `;
const ResultHeader = styled.header` z-index: 1; padding: 60px 20px 20px; text-align: center; `;
const ResultTitle = styled.h2` font-size: 1.8rem; font-weight: 700; `;
const Highlight = styled.span` color: ${COLORS.primary}; `;
const Body = styled.main` z-index: 1; flex: 1; display: flex; flex-direction: column; align-items: center; padding: 0 30px; `;

const Title = styled.h2`
  font-size: 1.2rem;
  letter-spacing: 4px;
  color : ${COLORS.primary};
`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-top: auto; /* 이미지 아래쪽 바닥에 붙도록 조절 */
  padding-bottom: 50px;
`;

const LeftSection = styled.div` display: flex; flex-direction: column; gap: 20px; `;
const InfoGroup = styled.div` display: flex; flex-direction: column; gap: 5px; `;
const Label = styled.span` font-size: 1.3rem; font-weight: 600; color: ${COLORS.brand.secondary}; `;
const Value = styled.span` font-family: 'Ownglyph', sans-serif; font-size: 1.1rem; color: ${COLORS.primary}; font-weight: 100; `;

const RightSection = styled.div` text-align: right; `;
const RecruitText = styled.p`font-family: 'Ownglyph', sans-serif; font-size: 1.3rem; font-weight: 700; margin-bottom: 5px; `;
const DateText = styled.p`font-family: 'Ownglyph', sans-serif; font-size: 1.7rem; font-weight: 800; `;

export default ResultLayout;