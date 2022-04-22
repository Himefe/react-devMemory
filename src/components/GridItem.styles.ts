import styled from "styled-components";

interface ContainerProps {
  backgroundColor: boolean;
}

export const Container = styled.div<ContainerProps>`
  background-color: #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 5px;
  height: 100px;
  background-color: ${(props) =>
    props.backgroundColor ? "#1550FF" : "#E2E3E3"};
`;

interface IconeProps {
  opacity: number | undefined;
}

export const Icon = styled.img<IconeProps>`
  width: 50px;
  height: 50px;
  opacity: ${(props) => (props.opacity ? props.opacity : 1)};
`;
