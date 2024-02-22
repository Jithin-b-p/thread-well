/* eslint-disable react/prop-types */
import styled from "styled-components";
import Label from "./Label";

const StyledFormRow = styled.div`
  position: relative;
  display: flex;
  flex-direction: ${(props) => props.$direction || "column"};
  gap: 1rem;
`;

function FormRow({ label, children, inputValue, direction }) {
  return (
    <StyledFormRow $direction={direction}>
      {children}
      {label && (
        <Label htmlFor={children.props.id} $input={inputValue}>
          {label.toUpperCase()}
        </Label>
      )}
    </StyledFormRow>
  );
}

export default FormRow;
