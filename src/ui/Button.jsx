/* eslint-disable react/prop-types */

import styled from "styled-components";

const StyledButton = styled.button`
  padding: 0.5rem 0.5rem;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background-color: #000;
    color: #f2f2f2;
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
