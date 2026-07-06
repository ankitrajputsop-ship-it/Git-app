import styled from "styled-components";

export const Searchbox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 24px 0;
`;

export const Searchinput = styled.input`
  width: 360px;
  max-width: 80vw;
  height: 50px;
  padding: 0 14px;
  font-size: 16px;
  border: 1px solid #d0d7de;
  border-right: none;
  border-radius: 10px 0 0 10px;
  outline: none;
`;

export const Searchboxbtn = styled.button`
  width: 110px;
  height: 52px;
  border: none;
  border-radius: 0 10px 10px 0;
  background: #24292f;
  color: white;
  font-size: 16px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background: #000;
  }
`;
