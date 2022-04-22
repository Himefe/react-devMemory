import styled from "styled-components";

export const Main = styled.main`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  place-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 750px;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  padding: 80px;
  box-shadow: 0 0 5px 1px #ccc;
  border-radius: 5px;
  margin-top: 80px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  width: auto;
  justify-content: space-between;
`;

export const InfoArea = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const LogoLink = styled.a`
  display: block;
`;

export const GameArea = styled.div`
  flex: 1;

  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  margin-left: 80px;
`;

export const Button = styled.button`
  display: block;
  padding: 10px 70px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  width: 100%;
`;
