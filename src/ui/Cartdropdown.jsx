import styled from "styled-components";
import Button from "./Button";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Styledcartdropdown = styled.div`
  position: absolute;
  left: -16rem;
  top: 3rem;
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
  margin-block-start: auto;
`;
function Cartdropdown() {
  // const cartClicked = useSelector((state) => state.cart.hidden);
  const cartItemsQuantity = useSelector((state) => state.cart.cartItems).length;
  return (
    // <Styledcartdropdown $cartClick={cartClicked}>
    <Styledcartdropdown>
      {cartItemsQuantity ? <CartItems /> : null}
      <StyledButton $variation="tertiary">GO TO CHECKOUT</StyledButton>
    </Styledcartdropdown>
  );
}

export default Cartdropdown;
