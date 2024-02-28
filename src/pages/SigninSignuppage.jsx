import styled from "styled-components";
import Signin from "../ui/Signin";
import Signup from "../ui/Signup";

const StyledSigninpage = styled.main`
  display: flex;
  gap: 5rem;
  justify-content: center;
  flex-wrap: wrap;
  padding-block-end: 3rem;
`;

function SigninSignuppage() {
  return (
    <StyledSigninpage>
      <Signin />
      <Signup />
    </StyledSigninpage>
  );
}

export default SigninSignuppage;
