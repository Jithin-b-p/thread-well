import { useSelector } from "react-redux";
import styled from "styled-components";
import CheckoutItemDetails from "../ui/CheckoutItemDetails";

const StyledCheckoutpage = styled.main`
  width: 45rem;
  margin-inline: auto;
  padding-block: 3rem;
`;

const StyledCheckoutDetailsTitles = styled.div`
  display: flex;
  gap: 1rem;
  text-align: center;
  padding-block-end: 1.2rem;
`;
const StyledCheckoutDetailsTitle = styled.span`
  flex-basis: 9rem;
`;

const StyledCheckoutDetails = styled.div`
  border: 0;
  border-block: 1px solid #222;
  font-size: 1.2rem;
`;

const StyledTotalAmount = styled.div`
  padding-block-start: 1.2rem;
  font-size: 1.5rem;
  text-align: right;
`;

const StyledEmptyMessage = styled.p`
  font-size: 2rem;
  text-align: center;
`;

function Checkoutpage() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <StyledCheckoutpage>
      {cartItems.length ? (
        <>
          <StyledCheckoutDetailsTitles>
            <StyledCheckoutDetailsTitle>Product</StyledCheckoutDetailsTitle>
            <StyledCheckoutDetailsTitle>Description</StyledCheckoutDetailsTitle>
            <StyledCheckoutDetailsTitle>Quantity</StyledCheckoutDetailsTitle>
            <StyledCheckoutDetailsTitle>Price</StyledCheckoutDetailsTitle>
            <StyledCheckoutDetailsTitle>Remove</StyledCheckoutDetailsTitle>
          </StyledCheckoutDetailsTitles>

          <StyledCheckoutDetails>
            {cartItems.map((item) => (
              <CheckoutItemDetails key={item.id} item={item} />
            ))}
          </StyledCheckoutDetails>
          <StyledTotalAmount>TOTAL: ${totalAmount}</StyledTotalAmount>
        </>
      ) : (
        <StyledEmptyMessage>Your cart is empty</StyledEmptyMessage>
      )}
    </StyledCheckoutpage>
  );
}

export default Checkoutpage;
