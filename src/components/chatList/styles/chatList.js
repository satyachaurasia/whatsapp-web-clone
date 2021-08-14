import styled from "styled-components/macro";

export const Pane = styled.div`
  flex: 30%;
  height: 100%;
  width: 100%;
  background-color: #ffffff;
  border-right: 1px solid #dddbd1;
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

  &:nth-of-type(1) {
    padding: 0;
    margin-right: auto;
  }

  & + & {
    margin-left: 10px;
  }
`;

export const SearchContainer = styled.div`
  padding: 10px 16px;
  width: 100%;
  background-color: #f6f6f6;
`;

export const SearchBar = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-radius: 20px;
  background-color: #ffffff;
  width: 100%;
  padding: 5px 10px;
`;

export const SearchIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  border: none;
  outline: none;
  ::placeholder {
    color: #a5a5a5;
  }
`;

export const ContactCard = styled.div`
  width: 100%;
  padding: 10px 16px;
  display: flex;
  align-items: center;
  cursor: pointer;
  height: 70px;
  background-color: ${({ active }) => (active ? "#e6e6e6" : "#ffffff")};

  &:hover {
    background-color: ${({ active }) => (active ? "#e6e6e6" : "#f7f7f7")};
  }

  ${({ online }) =>
    online &&
    `&::after {
    content: "";
    background-color: #06d755;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
  }`}
`;

export const CardImage = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  object-fit: contain;
  cursor: pointer;
  margin-right: 16px;
`;

export const CardTitle = styled.div`
  text-overflow: ellipsis;
  font-weight: 500;
  font-size: 1rem;
  width: 100%;
  position: relative;
  padding-right: 8px;

  &::after {
    content: "";
    background-color: #dddbd1;
    height: 1px;
    display: block;
    position: absolute;
    width: calc(100% + 7px);
    bottom: -22px;
    left: 2px;
  }
`;

export const Inner = styled.div`
  height: 100%;
  overflow-y: scroll;
  height: calc(100vh - 114px);
`;
