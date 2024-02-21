import styled from "styled-components";
import Signin from "../ui/Signin";
import Signup from "../ui/Signup";

const StyledSigninpage = styled.main`
  display: flex;
  gap: 2rem;
  justify-content: center;
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
