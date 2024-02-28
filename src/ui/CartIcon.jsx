import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Cartdropdown from "./Cartdropdown";
import { useDispatch } from "react-redux";
import { cartClick } from "../redux/user/userSlice";

const StyledLink = styled(Link)`
  position: relative;
`;
const StyledNotification = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -0.2rem;
  right: -0.4rem;

  width: 1.2rem;
  aspect-ratio: 1;

  font-size: 0.7rem;
  font-weight: bold;
  text-align: center;

  color: white;
  background-color: red;
  border-radius: 50%;
`;

function CartIcon() {
  const dispatch = useDispatch();

  return (
    <StyledLink onClick={() => dispatch(cartClick())}>
      <FaShoppingCart />
      <StyledNotification>
        <span>{2}</span>
      </StyledNotification>
      <Cartdropdown />
    </StyledLink>
  );
}

export default CartIcon;
