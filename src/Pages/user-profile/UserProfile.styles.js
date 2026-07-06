import styled from "styled-components";

export const UserProfileContainer = styled.div`
  width: 100%;
  min-height: calc(100vh - 72px);
  padding: 24px 20px 32px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f6f8;

  @media (max-width: 768px) {
    padding: 16px 12px 20px;
  }
`;

export const UserCard = styled.div`
  width: 100%;
  max-width: 820px;
  margin: 0 auto;
  padding: 24px;
  border-radius: 24px;
  background: #fff;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid #e5e4e7;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 12px 24px -12px, rgba(0, 0, 0, 0.04) 0px 4px 6px -2px;

  @media (max-width: 768px) {
    padding: 18px;
  }
`;

export const Avatar = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  display: block;
  margin: 0 0 12px;
  object-fit: cover;

  @media (max-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const UserName = styled.h1`
  width: 100%;
  text-align: center;
  margin: 0 0 4px;
  font-size: 1.6rem;
`;

export const UserLogin = styled.h3`
  width: 100%;
  text-align: center;
  margin: 0 0 6px;
  color: #666;
`;

export const UserInfo = styled.p`
  width: 100%;
  text-align: center;
  margin: 0 0 6px;
`;

export const Divider = styled.hr`
  width: 100%;
  margin: 8px 0;
`;

export const WebsiteLink = styled.a`
  color: #0969da;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  width: 100%;
  margin-top: 10px;

  @media (max-width: 768px) {
    flex-direction: column;

    button {
      width: 100%;
    }
  }
`;