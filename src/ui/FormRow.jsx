/* eslint-disable react/prop-types */
import styled from "styled-components";
import Label from "./Label";

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  gap: 1rem;
`;

const Error = styled.p`
  font-size: 0.8rem;
  color: #890303;
  font-style: italic;
  position: absolute;
  top: 2rem;
  left: 0.7rem;
`;

function FormRow({
  label,
  children,
  inputValue,
  direction,
  error,
  emailError,
}) {
  return (
    <StyledFormRow $direction={direction}>
      {children}
      {label && (
        <Label htmlFor={children.props.id} $input={inputValue}>
          {label.toUpperCase()}
        </Label>
      )}
      {(error && <Error>{error}</Error>) ||
        (emailError && <Error>{emailError}</Error>)}
    </StyledFormRow>
  );
}

export default FormRow;
