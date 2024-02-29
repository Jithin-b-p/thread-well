import { useSelector } from "react-redux";
import styled from "styled-components";
import CartItemPreview from "./CartItemPreview";

const StyledCartItems = styled.div`
  height: 14rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  overflow: scroll;
`;

function CartItems() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  return (
    <StyledCartItems>
      {cartItems.map((item) => {
        return <CartItemPreview key={item.id} item={item} />;
      })}
    </StyledCartItems>
  );
}

export default CartItems;
