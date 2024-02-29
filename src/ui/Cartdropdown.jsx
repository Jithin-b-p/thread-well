import styled from "styled-components";
import Button from "./Button";
import CartItems from "./CartItems";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { cartClicked } from "../redux/cart/cartSlice";

const Styledcartdropdown = styled.div`
  position: absolute;
  right: 1rem;
  top: 6rem;
  z-index: 10;

  width: 18rem;
  /* height: 20rem; */
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #f2f2f2;
  border: 1px solid #222;
  transition: opacity 0.3s;

  /* opacity: ${(props) => props.$cartClicked || "0"}; */
`;

const StyledButton = styled(Button)`
  width: 100%;
  margin-block-start: auto;
`;

const StyledEmptyMessage = styled.p`
  font-size: 1rem;
  text-align: center;
`;
const StyledLink = styled(Link)`
  display: block;
`;

function Cartdropdown() {
  const dispatch = useDispatch();

  const cartItemsQuantity = useSelector((state) => state.cart.cartItems).length;
  return (
    // <Styledcartdropdown $cartClick={cartClicked}>
    <Styledcartdropdown>
      {cartItemsQuantity ? (
        <CartItems />
      ) : (
        <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
      )}
      <StyledLink onClick={() => dispatch(cartClicked())} to="/checkout">
        <StyledButton $variation="tertiary">GO TO CHECKOUT</StyledButton>
      </StyledLink>
    </Styledcartdropdown>
  );
}

export default Cartdropdown;
