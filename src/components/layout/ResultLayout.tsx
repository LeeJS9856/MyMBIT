import React from 'react';
import styled from 'styled-components';
import { COLORS } from '@/constants/colors';
import LogoBtn from '@/assets/logo.svg';
import { JOB_MATCH_DETAILS, type JobType } from '@/constants/types';
import InstaIcon from '@/assets/insta.svg';
import EconoIcon from '@/assets/econo.svg';

interface ResultLayoutProps {
  jobType: JobType;
  children: React.ReactNode; // 결과 이미지
}

const ResultLayout = ({ jobType, children }: ResultLayoutProps) => {
  const matchData = JOB_MATCH_DETAILS[jobType];
  return (
    <MainContainer>

      <BackgroundLogo src={LogoBtn} alt="Background" />
      
      <Body>
      <ResultHeader>
        <ResultTitle>
          당신은 <Highlight>{jobType}</Highlight> 성향이에요
        </ResultTitle>
      </ResultHeader>
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
      <FooterContainer>
        <FooterTitle>에코노베이션이 궁금하다면?</FooterTitle>
        
        <LinkCard as="a" href="https://www.instagram.com/cnu_econovation/" target="_blank">
          <Icon src={InstaIcon} alt="Instagram" />
          <TextGroup>
            <SubLabel>에코노베이션 활동 / 문의</SubLabel>
            <LinkName>Instagram</LinkName>
          </TextGroup>
        </LinkCard>

        <LinkCard as="a" href="https://econovation.kr" target="_blank">
          <Icon src={EconoIcon} alt="EconoSite" />
          <TextGroup>
            <SubLabel>에코노베이션 사이트</SubLabel>
            <LinkName>econovation.kr</LinkName>
          </TextGroup>
        </LinkCard>
      </FooterContainer>
    </MainContainer>
  );
};

// --- 스타일 컴포넌트 (InfoContainer 등은 위와 동일하지만 가독성을 위해 배치) ---
const MainContainer = styled.div` position: relative; width: 100%; max-width: 500px; height: 100vh; background-color: ${COLORS.white}; display: flex; flex-direction: column; margin: 0 auto; `;
const BackgroundLogo = styled.img` position: absolute; top: 35%; left: 50%; transform: translate(-50%, -50%); width: 95%; z-index: 0; pointer-events: none; `;
const ResultHeader = styled.header` z-index: 1; text-align: center; `;
const ResultTitle = styled.h2` font-size: 1.8rem; font-weight: 700; `;
const Highlight = styled.span` color: ${COLORS.primary}; `;
const Body = styled.main` z-index: 1; flex: 1; display: flex; flex-direction: column; align-items: center; padding: 0 30px;justify-content: center;`;

const InfoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding-bottom: 30px;
`;

const LeftSection = styled.div` display: flex; flex-direction: column; gap: 5px; `;
const InfoGroup = styled.div` display: flex; flex-direction: column;`;
const Label = styled.span` font-size: 1.3rem; font-weight: 600; color: ${COLORS.brand.secondary}; `;
const Value = styled.span` font-family: 'Ownglyph', sans-serif; font-size: 1.1rem; color: ${COLORS.primary}; font-weight: 100; `;

const RightSection = styled.div` text-align: right; `;
const RecruitText = styled.p`font-family: 'Ownglyph', sans-serif; font-size: 1.3rem; font-weight: 700;`;
const DateText = styled.p`font-family: 'Ownglyph', sans-serif; font-size: 1.3rem; font-weight: 800; `;
const FooterContainer = styled.footer`
  z-index: 1;
  background-color: #f5f5f5; /* 이미지처럼 연한 회색 배경 */
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const FooterTitle = styled.h3`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.2rem;
  font-weight: 500;

  color: #000;
`;

const LinkCard = styled.div`
  background: #fff;
  border-radius: 20px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  gap: 15px;
  text-decoration: none; /* a 태그 기본 밑줄 제거 */
  box-shadow: 0 2px 10px rgba(0,0,0,0.03);
  transition: transform 0.2s;

  &:active { transform: scale(0.98); }
`;

const Icon = styled.img`
  width: 35px;
  height: 35px;
`;

const TextGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const SubLabel = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
  color: #767676;
`;

const LinkName = styled.span`
  font-family: 'Pretendard', sans-serif;
  font-size: 1.0rem;
  font-weight: 500;
  color: #000;
`;
export default ResultLayout;