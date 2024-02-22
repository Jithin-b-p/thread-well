import styled, { css } from "styled-components";

const Label = styled.label`
  ${(props) => {
    switch (props.$input) {
      case "true":
        return css`
          position: absolute;
          bottom: 2rem;
          font-size: 0.8rem;
          letter-spacing: 0.1rem;
          color: #222222bb;
        `;
      default:
        return css`
          font-size: 1.2rem;
          position: absolute;
          top: 0.5rem;
          left: 0.3rem;
        `;
    }
  }}
  left: 0.3rem;
  transition: 300ms ease all;
  /* display: block;
  font-size: 1.2rem;
  position: absolute;
  top: 0.5rem;
  left: 0.3rem;
   */
  /* font-size: 0.8rem;
  letter-spacing: 0.1rem;
  color: #222222bb; */
  font-size: 0.9rem;
  letter-spacing: 0.1rem;
`;
export default Label;
