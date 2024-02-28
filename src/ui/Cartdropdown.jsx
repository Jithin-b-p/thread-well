import styled from "styled-components";
import Button from "./Button";
import CartItems from "./CartItems";
import { useSelector } from "react-redux";

const Styledcartdropdown = styled.div`
  position: absolute;
  left: -13rem;
  top: 3rem;
  z-index: 10;

  width: 15rem;
  height: 18rem;
  padding: 1.5rem;

  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  border: 1px solid #222;
  transition: opacity 0.3s;

  opacity: ${(props) => props.$cartClick || "0"};
`;

const StyledButton = styled(Button)`
  margin-block-start: auto;
`;
function Cartdropdown() {
  const userCartClick = useSelector((state) => state.user.userCartClick);
  return (
    <Styledcartdropdown $cartClick={userCartClick}>
      <CartItems />
      <StyledButton $variation="tertiary">GO TO CHECKOUT</StyledButton>
    </Styledcartdropdown>
  );
}

export default Cartdropdown;
