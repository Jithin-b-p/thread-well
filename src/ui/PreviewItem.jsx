/* eslint-disable react/prop-types */
import styled from "styled-components";

const StyledPreviewItem = styled.div``;

const ImageContainer = styled.div`
  width: 17rem;
  height: 20rem;
  overflow: hidden;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${(props) => props.$imgurl});
  background-repeat: no-repeat;
  background-size: cover;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

const ProductDetails = styled.div`
  & > span {
    display: inline-block;
  }

  display: flex;
  justify-content: space-between;
`;

function PreviewItem({ details }) {
  return (
    <StyledPreviewItem>
      <ImageContainer>
        <Image $imgurl={details.imageUrl}></Image>
      </ImageContainer>
      <ProductDetails>
        <span>{details.name}</span>
        <span>{`$${details.price}`}</span>
      </ProductDetails>
    </StyledPreviewItem>
  );
}

export default PreviewItem;
