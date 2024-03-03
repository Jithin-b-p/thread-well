/* eslint-disable react/prop-types */
import styled from "styled-components";

import PreviewItem from "./PreviewItem";

const StyledCollectionPreview = styled.div`
  max-width: 70rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 3rem;
`;

function CollectionPreview({ items }) {
  return (
    <StyledCollectionPreview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <PreviewItem key={item.id} details={item} />
        ))}
    </StyledCollectionPreview>
  );
}

export default CollectionPreview;
