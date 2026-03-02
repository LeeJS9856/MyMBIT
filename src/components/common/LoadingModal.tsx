import styled from 'styled-components';
import { COLORS } from '@/constants/colors';

interface LoadingModalProps {
  onConfirm: () => void;
}

const LoadingModal = ({ onConfirm }: LoadingModalProps) => {
  return (
    <Overlay>
      <ModalContainer>
        <DateRange>3/1 ~ 3/10</DateRange>
        <ModalTitle>에코노베이션 신입모집</ModalTitle>
        <Divider />
        <Description>
          전공무관 전남대학교 개발 동아리 에코노베이션에서
          열정있는 당신👊 을 기다려요!
        </Description>
        <ConfirmButton onClick={onConfirm}>결과 확인하기</ConfirmButton>
      </ModalContainer>
    </Overlay>
  );
};

// --- 스타일 컴포넌트 ---

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* 배경 어둡게 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

const ModalContainer = styled.div`
  font-family: 'Pretendard', sans-serif !important;
  width: 85%;
  max-width: 320px;
  background-color: white;
  border-radius: 25px;
  padding: 30px 35px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const DateRange = styled.h3`
  font-family: 'Pretendard', sans-serif;
  color: ${COLORS.primary};
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 2px;
`;

const ModalTitle = styled.h3`
font-family: 'Pretendard', sans-serif;
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 10px;
`;

const Divider = styled.div`
  width: 100%;
  height: 2px;
  background-color: #eee;
  margin-bottom: 20px;
`;

const Description = styled.p`
  font-family: 'Pretendard', sans-serif;
  font-size: 1rem;
  color: ${COLORS.text.grey};
  line-height: 1.6;
  margin-bottom: 30px;
`;

const ConfirmButton = styled.button`
  font-family: 'Pretendard', sans-serif;
  width: 100%;
  padding: 15px;
  background-color: #f5f5f5; /* 연한 회색 */
  border: none;
  border-radius: 100px; /* 둥근 캡슐 모양 */
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:active {
    background-color: #e0e0e0;
  }
`;

export default LoadingModal;