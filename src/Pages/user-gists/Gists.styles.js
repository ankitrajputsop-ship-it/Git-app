import styled from "styled-components";

export const GistsContainer = styled.div`
  width: 80%;
  margin: 30px auto;

  h2 {
    text-align: center;
    margin-bottom: 25px;
  }
`;

export const GistCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const GistInfo = styled.div`
  flex: 1;
`;

export const GistTitle = styled.h3`
  margin: 0 0 10px;
  color: #24292f;
`;

export const GistText = styled.p`
  margin: 6px 0;
  color: #666;
`;

export const GistLink = styled.a`
  color: #0969da;
  text-decoration: none;
  font-weight: 500;

  &:hover {
    text-decoration: underline;
  }
`;

export const Arrow = styled.div`
  font-size: 28px;
  font-weight: bold;
  color: #24292f;
`;