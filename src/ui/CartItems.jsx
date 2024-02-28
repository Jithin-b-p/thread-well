import styled from "styled-components";

const StyledCartItems = styled.div`
  height: 12rem;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

function CartItems() {
  return <StyledCartItems>CartItems</StyledCartItems>;
}

export default CartItems;
