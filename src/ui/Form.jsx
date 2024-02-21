/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledForm = styled.form`
  padding-block-start: 3rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

function Form({ children }) {
  return <StyledForm>{children}</StyledForm>;
}

export default Form;
