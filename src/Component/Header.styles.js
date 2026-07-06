import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1126px;
  margin: 0 auto;
  padding: 20px 42px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 14px 20px;
  }
`;

export const HeaderIcon = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 16px;
  margin-left: 8px;
`;

export const HeaderText = styled.div`
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  padding: 10px 16px;
  margin-right: 8px;
`;

export const Headersvg = styled.svg`
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: #24292f;
`;

export const Hometitle = styled.div`
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  margin-top: 70px;
  margin-bottom: 10px;
  color: #24292f;
`;