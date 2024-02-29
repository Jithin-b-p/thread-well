/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledImage = styled.img`
  width: 8.5rem;
`;

const StyledDescription = styled.span`
  font-weight: 700;
  width: 8.5rem;
`;
const StyledQuantity = styled.span`
  width: 8.5rem;
`;
const StyledPrice = styled.span`
  width: 8.5rem;
`;
const StyledRemove = styled.div`
  width: 8.5rem;
`;
const StyledRemoveButton = styled.span`
  cursor: pointer;
`;

const StyledCheckoutItemDetails = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding-block: 1.2rem;

  text-align: center;
`;

function CheckoutItemDetails({ item }) {
  return (
    <StyledCheckoutItemDetails>
      <StyledImage src={item.imageUrl} alt="" />
      <StyledDescription>{item.name}</StyledDescription>
      <StyledQuantity>{item.quantity}</StyledQuantity>
      <StyledPrice>${item.price}</StyledPrice>
      <StyledRemove>
        <StyledRemoveButton>&Chi;</StyledRemoveButton>
      </StyledRemove>
    </StyledCheckoutItemDetails>
  );
}

export default CheckoutItemDetails;
