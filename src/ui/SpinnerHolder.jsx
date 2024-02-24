import styled, { keyframes } from "styled-components";
import { BiLoaderAlt } from "react-icons/bi";

const rotate = keyframes`
  to {
    transform: rotate(1turn)
  }
`;

const Spinner = styled(BiLoaderAlt)`
  width: 5rem;
  height: 5rem;
  animation: ${rotate} 1.5s infinite linear;
`;
const StyledspinnerHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function SpinnerHolder() {
  return (
    <StyledspinnerHolder>
      <Spinner />
    </StyledspinnerHolder>
  );
}

export default SpinnerHolder;
