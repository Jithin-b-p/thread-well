/* eslint-disable react/prop-types */
import styled from "styled-components";
import Label from "./Label";

const StyledFormRow = styled.div`
  position: relative;
`;

function FormRow({ label, children, inputValue }) {
  return (
    <StyledFormRow>
      {children}
      <Label htmlFor={children.props.id} $input={inputValue}>
        {label.toUpperCase()}
      </Label>
    </StyledFormRow>
  );
}

export default FormRow;
