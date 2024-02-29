/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledCartItemPreview = styled.div`
  display: flex;
  gap: 1.2rem;
`;
const StyledName = styled.span`
  display: block;
  font-size: 0.9rem;
  font-weight: 700;
`;

const StyledPrice = styled.span`
  font-size: 0.8rem;
`;

const StyledDetails = styled.div`
  height: 7rem;
  padding-block-start: 2rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

const Image = styled.div`
  flex-basis: 35%;
  background-image: url(${(props) => props.$imageUrl});
  background-size: cover;
  background-repeat: no-repeat;
`;

function CartItemPreview({ item }) {
  return (
    <StyledCartItemPreview>
      <Image $imageUrl={item.imageUrl} />
      <StyledDetails>
        <StyledName>{item.name}</StyledName>
        <StyledPrice>
          {item.quantity} x ${item.price}
        </StyledPrice>
      </StyledDetails>
    </StyledCartItemPreview>
  );
}

export default CartItemPreview;
