import styled from "styled-components";

export const ReposContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

export const RepoCard = styled.div`
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 20px;
  margin-bottom: 20px;
  transition: 0.3s;

  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const RepoInfo = styled.div``;

export const RepoTitle = styled.h3`
  margin: 0;
  color: #24292f;
`;

export const RepoDescription = styled.p`
  margin: 12px 0;
  color: #555;
`;

export const RepoDetails = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
  color: #666;
  font-size: 15px;
`;

export const RepoLink = styled.a`
  text-decoration: none;
  color: #0969da;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;