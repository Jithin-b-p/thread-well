import styled from "styled-components";
import Logo from "./Logo";
import Navigation from "./Navigation";

const StyledHeader = styled.header`
  width: min(80%, 80rem);
  height: 8rem;
  margin-inline: auto;
  padding-block: 2rem;

  font-size: 1.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Header() {
  return (
    <StyledHeader>
      <Logo />
      <Navigation />
    </StyledHeader>
  );
}

export default Header;
