import styled from "styled-components";
import { useState, useEffect } from "react";

interface ChatProps {
  //owner는 "ai" or "user"로 구분
  owner: "ai" | "user";
  chat: string;
}

const Chat = ({ owner, chat }: ChatProps) => {
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    if (chat) {
      let currentText = "";
      const typingInterval = setInterval(() => {
        if (currentText.length < chat.length) {
          // 한 글자씩 추가하여 displayedText를 갱신합니다.
          currentText = chat.slice(0, currentText.length + 1);
          setDisplayedText(currentText);
        } else {
          clearInterval(typingInterval); // 다 출력되면 interval을 정리합니다.
        }
      }, 50); // 100ms 간격으로 한 글자씩 추가 (필요에 따라 조절 가능)

      return () => clearInterval(typingInterval); // 컴포넌트가 언마운트될 때 interval을 정리합니다.
    }
  }, [chat]); // aiChat이 변경될 때마다 실행합니다.

  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  return (
    <>
      {owner === "user" ? (
        <ButtonContainer>
          <ButtonContainer1>
            <Div5>
              {hours}:{minutes}
            </Div5>
            <UserChatBox>
              <ChatBox>{chat}</ChatBox>
            </UserChatBox>
          </ButtonContainer1>
        </ButtonContainer>
      ) : (
        <HorizontalContainer3>
          <HorizontalContainer4>
            <HorizontalContainer5>
              <ChatBox
                dangerouslySetInnerHTML={{ __html: displayedText }}
              ></ChatBox>
            </HorizontalContainer5>
            <Div5>
              {hours}:{minutes}
            </Div5>
          </HorizontalContainer4>
        </HorizontalContainer3>
      )}
    </>
  );
};

const ChatBox = styled.div`
    position: relative;
    font-size: 16px;
    font-weight: 400;
    line-height: 19.2px;
    letter-spacing: 0.02em;
    text-align: left;
  }
    `;

const UserChatBox = styled.div`
  border-radius: 8px;
  background-color: #224a99;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
`;

const ButtonContainer1 = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 12px;
`;

const ButtonContainer = styled.div`
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
  width: 634px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 10px;
  box-sizing: border-box;
  font-size: 12px;
  color: #797979;
`;

const Div5 = styled.div`
  position: relative;
  color: #797979;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.4px;
  letter-spacing: 0.02em;
  text-align: left;
`;

const HorizontalContainer5 = styled.div`
  border-radius: 8px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 10px 20px;
`;

const HorizontalContainer4 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  justify-content: flex-end;
  gap: 12px;
  z-index: 1;
`;

const HorizontalContainer3 = styled.div`
  position: relative;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.05));
  width: 634px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 16px 10px;
  box-sizing: border-box;
  gap: 10px;
  color: #000;
`;

export default Chat;
