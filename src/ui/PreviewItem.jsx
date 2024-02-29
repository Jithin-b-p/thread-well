/* eslint-disable react/prop-types */
import styled from "styled-components";

import Button from "./Button";
import { useDispatch } from "react-redux";
import { itemAdded } from "../redux/cart/cartSlice";

const StyledPreviewItem = styled.div`
  flex: 0 1 20%;
  height: 20rem;
`;

const ImageContainer = styled.div`
  width: 15rem;
  height: 100%;
  /* width: 15rem;
  height: 20rem; */
  overflow: hidden;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: end;

  padding-block-end: 2rem;

  background-image: url(${(props) => props.$imgurl});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    /* transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95); */
    opacity: 0.8;
  }
`;

const ProductDetails = styled.div`
  & > span {
    display: inline-block;
  }

  display: flex;
  justify-content: space-between;
`;

const StyledButton = styled(Button)`
  opacity: 0;

  ${ImageContainer}:hover & {
    opacity: 1;
  }
`;

function PreviewItem({ details }) {
  const dispatch = useDispatch();
  return (
    <StyledPreviewItem>
      <ImageContainer>
        <Image $imgurl={details.imageUrl}>
          <StyledButton
            onClick={() => dispatch(itemAdded({ ...details }))}
            $variation="tertiary"
          >
            Add to cart
          </StyledButton>
        </Image>
      </ImageContainer>
      <ProductDetails>
        <span>{details.name}</span>
        <span>{`$${details.price}`}</span>
      </ProductDetails>
    </StyledPreviewItem>
  );
}

export default PreviewItem;
