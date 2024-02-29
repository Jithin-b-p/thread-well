/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import styled from "styled-components";

import {
  itemAdded,
  itemRemoved,
  quantityReduced,
} from "../redux/cart/cartSlice";

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
const StyledButton = styled.button`
  padding-block: 0.2rem;
  font-size: 1rem;
  font-weight: bold;
  background: none;
  border: 0;
  cursor: pointer;
`;

function CheckoutItemDetails({ item }) {
  const dispatch = useDispatch();

  return (
    <StyledCheckoutItemDetails>
      <StyledImage src={item.imageUrl} alt="product image" />
      <StyledDescription>{item.name}</StyledDescription>
      <StyledQuantity>
        <StyledButton onClick={() => dispatch(quantityReduced({ ...item }))}>
          &lang;
        </StyledButton>
        {item.quantity}
        <StyledButton onClick={() => dispatch(itemAdded({ ...item }))}>
          &rang;
        </StyledButton>
      </StyledQuantity>
      <StyledPrice>${item.price}</StyledPrice>
      <StyledRemove>
        <StyledRemoveButton onClick={() => dispatch(itemRemoved({ ...item }))}>
          &#10005;
        </StyledRemoveButton>
      </StyledRemove>
    </StyledCheckoutItemDetails>
  );
}

export default CheckoutItemDetails;
