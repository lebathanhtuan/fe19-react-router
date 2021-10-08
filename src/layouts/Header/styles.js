import styled from "styled-components";

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 56px;
  background-color: ${(props) => props.theme.header};
`;
