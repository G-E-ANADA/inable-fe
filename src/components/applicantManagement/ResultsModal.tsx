import { useState } from "react";
import styled from "styled-components";

interface ResultsModalProps {
  onClose: () => void;
}

const ResultsModal = ({ onClose }: ResultsModalProps) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  return (
    // 버튼 클릭시 모달 창 닫기

    <ModalContainer>
      <TitleContainer>
        <Title>합격 발표</Title>
      </TitleContainer>
      <Section>
        <InfoContainer flag={"true"}>
          <InfoRow flag={"true"}>
            <Label flag={"true"}>🎉</Label>
            <Value>합격 발표 처리되었습니다.</Value>
          </InfoRow>
        </InfoContainer>
      </Section>
      <div>
        <ActionButton onClick={onClose}>확인</ActionButton>
      </div>
    </ModalContainer>
  );
};

export default ResultsModal;

const ModalContainer = styled.div`
  width: 460px;
  position: relative;
  border-radius: 12px;
  background-color: #fff;
  height: 460px;
  text-align: center;
  font-size: 18px;
  color: #191919;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const TitleContainer = styled.div`
  position: relative;
  height: 47px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px;
  box-sizing: border-box;
  text-align: center;
  font-size: 18px;
  color: #191919;
  margin-bottom: 20px;
`;

const Title = styled.div`
  line-height: 150%;
  font-weight: 500;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`;

const InfoContainer = styled.div<{ flag?: string }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-right: ${(props) => (props.flag ? "0" : "135px")};
`;

const InfoRow = styled.div<{ flag?: string }>`
  display: flex;
  justify-content: ${(props) => (props.flag ? "center" : "space-between")};
  flex-direction: ${(props) => (props.flag ? "column" : "row")};
  align-items: center;
`;

const Label = styled.div<{ flag?: string }>`
  font-size: ${(props) => (props.flag ? "40px" : "16px")};
  font-weight: 500;
  color: #494949;
  width: 80px;
`;

const Value = styled.div<{ flag?: boolean }>`
  flex-grow: 1; /* Value가 남은 공간을 채우도록 설정 */
  text-align: ${(props) =>
    props.flag ? "center" : "left "} /* Value를 왼쪽 정렬 */
  font-size: 16px;
  color: #191919;
`;

const ActionButton = styled.button`
  width: 100%;
  border-radius: 6px;
  background-color: #224a99;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 60px;
  box-sizing: border-box;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  border: none;
  margin-top: 12px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #1a397a;
  }

  &:active {
    background-color: #112856;
  }
`;
