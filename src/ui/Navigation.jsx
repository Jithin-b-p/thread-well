import styled from "styled-components";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
// import { useAuth } from "../contexts/authContext/AuthContext";
import { doSignOut } from "../firebase/Auth";
import { useSelector } from "react-redux";

const StyledNavigation = styled.nav``;

const UList = styled.ul`
  font-weight: 400;
  display: flex;
  align-items: center;
  /* gap: 2rem; */
`;

const ListItem = styled.li`
  padding: 1rem 1rem;
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
  // const { userLoggedIn } = useAuth();

  const currentUser = useSelector((state) => state.user.currentUser);

  return (
    <StyledNavigation>
      <UList>
        <ListItem>
          <Link to="/shop">SHOP</Link>
        </ListItem>
        <ListItem>
          <Link to="/contact">CONTACT</Link>
        </ListItem>
        <ListItem>
          {currentUser ? (
            <span onClick={doSignOut}>SIGN OUT</span>
          ) : (
            <Link to="/signin">SIGN IN</Link>
          )}
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
