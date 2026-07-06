import styled from "styled-components";

export const FollowersContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

export const FollowerCard = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 20px;
  cursor: pointer;
  transition: 0.3s;
`;

export const FollowerImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const FollowerInfo = styled.div`
  flex: 1;
`;

export const FollowerName = styled.h3`
  margin: 0;
  color: #24292f;
`;

export const FollowerBio = styled.p`
  margin-top: 6px;
  color: #666;
`;

export const Arrow = styled.span`
  font-size:    24px;
`;