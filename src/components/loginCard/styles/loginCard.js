import styled from "styled-components/macro";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  height: 100vh;
`;

export const LoginCard = styled.div`
  background-color: #f8f9fa;
  padding: 3rem;
  border-radius: 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  box-shadow: 10px 10px 77px -21px rgba(0, 0, 0, 0.67);
  -webkit-box-shadow: 10px 10px 77px -21px rgba(0, 0, 0, 0.67);
  -moz-box-shadow: 10px 10px 77px -21px rgba(0, 0, 0, 0.67);
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-width: 320px;
`;

export const LoginBtn = styled.button`
  border: 0;
  padding: 0.5rem 1.5rem;
  border-radius: 20px;
  background-color: #06d755;
  color: #ffffff;
  font-weight: 700;
  font-size: 1rem;
  cursor: pointer;

  transition: transform 250ms ease-in-out;

  &:hover {
    transform: scale(110%);
  }
`;
