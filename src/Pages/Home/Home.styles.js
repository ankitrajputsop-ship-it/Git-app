import styled from "styled-components";

export const HomeContainer = styled.div`
  text-align: center;
  padding:100px 24px 0;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 60px 16px 0;
  }
`;

export const HomeContent = styled.div``;

export const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  margin-bottom: 25px;
`;

export const Description = styled.p`
  font-size: 22px;
  color: #666;
  margin-top: 20px;
`;