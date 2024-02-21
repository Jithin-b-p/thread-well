import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.5rem;
  font: inherit;
  font-size: 1.125rem;
  background: none;
  border: none;
  border-bottom: 1px solid #222;

  &:focus {
    outline: none;
  }

  &:focus + label {
    position: absolute;
    top: -0.56rem;
    left: 0.3rem;
    font-size: 0.8rem;
    letter-spacing: 0.1rem;
    color: #222222bb;
  }
`;

export default Input;
