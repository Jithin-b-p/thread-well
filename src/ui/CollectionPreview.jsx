/* eslint-disable react/prop-types */
import styled from "styled-components";

import PreviewItem from "./PreviewItem";

const StyledCollectionPreview = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
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
