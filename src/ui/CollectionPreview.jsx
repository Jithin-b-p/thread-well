/* eslint-disable react/prop-types */
import styled from "styled-components";

import PreviewItem from "./PreviewItem";

const StyledCollectionPreview = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

function CollectionPreview({ items }) {
  return (
    <StyledCollectionPreview>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <PreviewItem key={item.key} details={item} />
        ))}
    </StyledCollectionPreview>
  );
}

export default CollectionPreview;
