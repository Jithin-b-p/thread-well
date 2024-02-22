/* eslint-disable react/prop-types */

import styled, { css } from "styled-components";

const variations = {
  primary: css`
    background-color: #222;
    color: #f2f2f2;

    &:hover {
      background-color: #fff;
      color: #000;
    }
  `,
  secondary: css`
    background-color: #276afb;
    color: #fff;
    border: none;

    &:hover {
      background-color: #1f52c1;
      color: #f2f2f2;
    }
  `,

  tertiary: css`
    &:hover {
      background-color: #000;
      color: #f2f2f2;
    }
  `,
};

const Button = styled.button`
  display: block;
  padding: 0.5rem 0.5rem;
  font-size: 0.74rem;
  font-weight: 700;
  text-transform: uppercase;
  border: 1px solid #000;
  cursor: pointer;
  transition: all 0.2s;

  ${(props) => variations[props.$variation]}
`;

Button.defaultProps = {
  variations: "tertiary",
};

export default Button;
