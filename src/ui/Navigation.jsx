import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";

const StyledNavigation = styled.nav``;

const UList = styled.ul`
  font-weight: 400;
  display: flex;
  align-items: center;
  gap: 2rem;
`;

const ListItem = styled.li`
  padding: 1rem 0.5rem;
  transition: all 0.2s;

  &:hover:not(:last-child) {
    background: #222222;
    color: #f2f2f2;
  }
  &:hover,
  &:active {
    letter-spacing: 5px;
  }

  &:last-child {
    font-size: 2rem;
  }
`;

function Navigation() {
  return (
    <StyledNavigation>
      <UList>
        <ListItem>
          <a href="#">SHOP</a>
        </ListItem>
        <ListItem>
          <a href="#">CONTACT</a>
        </ListItem>
        <ListItem>
          <a href="#">SIGN IN</a>
        </ListItem>
        <ListItem>
          <a href="#">
            <FaShoppingCart />
          </a>
        </ListItem>
      </UList>
    </StyledNavigation>
  );
}

export default Navigation;
