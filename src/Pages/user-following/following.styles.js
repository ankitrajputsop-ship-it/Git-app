import styled from "styled-components";

export const FollowingContainer = styled.div`
  width: 80%;
  margin: 30px auto;
`;

export const FollowingCard = styled.div`
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
  &:hover {
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transform: translateY(-2px);
  }
`;

export const FollowingImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  flex-shrink: 0;
`;

export const FollowingInfo = styled.div`
  flex: 1;
`;

export const Followinginfo3 = styled.h3`
  margin: 0;
  color: #24292f;
`;

export const Arrow = styled.span`
  font-size: 24px;
  font-weight: bold;
`;
