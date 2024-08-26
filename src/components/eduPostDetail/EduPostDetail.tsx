import styled from "styled-components";
import IconScrap from "../../asset/ic_scrap.svg";
import { EduPostListData } from "../../types/PostDataType";

const EduPostDetail = ({ eduPost }: { eduPost: EduPostListData }) => {
  return (
    <DetailContainer>
      <HeadContainer>
        <FrameParent>
          <Parent>
            <Text>{eduPost.category}</Text>
          </Parent>
          <Title>{eduPost.title}</Title>
          <Group>
            <Text>{eduPost.organization}</Text>
            <Text>{eduPost.date}</Text>
          </Group>
        </FrameParent>
        <BtnParent>
          <Icon src={IconScrap} />
          <ColoredText>링크 복사</ColoredText>
        </BtnParent>
      </HeadContainer>
      <hr />
      <Section title="교육 상세">
        <InfoGroup>
          <InfoItem>
            <Label>내용</Label>
            <Value>{eduPost.content}</Value>
          </InfoItem>
        </InfoGroup>
      </Section>
    </DetailContainer>
  );
};

export default EduPostDetail;

const DetailContainer = styled.div`
  background: white;
  border-radius: 12px;
  border: 1px solid #c5c5c5;
  padding: 60px;
  margin-top: 20px;
`;

const Section = styled.div`
  margin-top: 20px;
`;

const HeadContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  font-size: 18px;
  color: #000;
  padding-bottom: 60px;
`;

const FrameParent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  font-size: 18px;
`;

const Parent = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 21px;
  font-weight: 500;
  text-align: left;
`;

const Group = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
`;

const BtnParent = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  color: #fff;
`;

const Text = styled.div`
  line-height: 150%;
  font-weight: 500;
`;

const ColoredText = styled.div`
  width: 140px;
  font-size: 18px;
  line-height: 150%;
  font-weight: 500;
  color: #224a99;
  text-align: center;
  display: inline-block;
`;

const Icon = styled.img<{ small?: string }>`
  width: ${(props) => (props.small ? "24px" : "40px")};
  height: ${(props) => (props.small ? "24px" : "40px")};
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  width: 100%;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 100%;
`;

const Label = styled.div`
  font-size: 16px;
  line-height: 150%;
  font-weight: 500;
  align-self: stretch;
`;

const Value = styled.div`
  font-size: 16px;
  line-height: 150%;
  align-self: stretch;
  position: relative;
`;

const JobPostDetailMapContainer = styled.div`
  width: 500px;
  height: 300px;
  border-radius: 12px;
`;
