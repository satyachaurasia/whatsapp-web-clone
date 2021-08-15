import styled from "styled-components/macro";

export const Pane = styled.div`
  flex: 70%;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
`;

export const Header = styled.div`
  padding: 10px 16px;
  background-color: #ededed;
  display: flex;
  align-items: center;
`;

export const HeaderImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: contain;
  padding: 8px;
  cursor: pointer;

  & + & {
    margin-left: 10px;
  }

  &:nth-of-type(1) {
    padding: 0;
    margin-right: 1rem;
  }
`;

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 500;
  margin-right: auto;
`;

export const ChatBox = styled.div`
  width: 100%;
  height: calc(100vh - 120px);
  overflow-y: scroll;
  /* background-image: url(/images/scribbles.png);
  background-size: contain;
  background-repeat: repeat; */
  background-color: #dddbd1;

  padding: 1rem 5% 1rem 5%;
  display: flex;
  flex-direction: column;

  gap: 0.5rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  width: 100%;
  height: 60px;
  padding: 10px 16px;
`;

export const ChatInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  border-radius: 20px;
  height: 100%;
  padding: 5px 1rem;
`;

export const InputIcon = styled.img`
  width: 40px;
  height: 40px;
  padding: 8px;
  cursor: pointer;
`;

const Chat = styled.div`
  position: relative;
  max-width: 20rem;
  min-width: 50px;
  border-radius: 10px;
  font-size: 0.9rem;
`;

export const SentChat = styled(Chat)`
  background-color: #dcf8c6;
  align-self: flex-end;
  padding: 6px 1.5rem 8px 9px;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 7px solid #dcf8c6;
    border-right: 7px solid transparent;
    border-top: 7px solid #dcf8c6;
    border-bottom: 7px solid transparent;
    right: -11px;
    top: 10px;
  }

  &::after {
    content: url(${({ status }) =>
      status === "seen"
        ? "images/seenTick.svg"
        : status === "received"
        ? "images/doubleTick.svg"
        : "images/singleTick.svg"});
    position: absolute;
    bottom: -4px;
    right: 5px;
  }
`;

export const ReceivedChat = styled(Chat)`
  background-color: #ffffff;
  padding: 6px 7px 8px 9px;
  align-self: flex-start;

  &::before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute;
    border-left: 7px solid transparent;
    border-right: 7px solid #fff;
    border-top: 7px solid #fff;
    border-bottom: 7px solid transparent;
    left: -11px;
    top: 10px;
  }
`;
