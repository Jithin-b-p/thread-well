import { FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Cartdropdown from "./Cartdropdown";
import { useDispatch, useSelector } from "react-redux";
import { cartClicked } from "../redux/cart/cartSlice";

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
  border: 1px solid #7b0404;
  border-radius: 50%;
`;

function CartIcon() {
  const dispatch = useDispatch();
  const hidden = useSelector((state) => state.cart.hidden);
  const totalQuntity = useSelector((state) => state.cart.cartItems).reduce(
    (acc, item) => acc + item.quantity,
    0
  );
  return (
    <>
      <StyledLink onClick={(e) => dispatch(cartClicked())}>
        <FaShoppingCart />
        {totalQuntity ? (
          <StyledNotification>
            <span>{totalQuntity}</span>
          </StyledNotification>
        ) : null}
      </StyledLink>
      {!hidden && <Cartdropdown />}
    </>
  );
}

export default CartIcon;
