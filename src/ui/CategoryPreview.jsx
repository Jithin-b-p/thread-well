/* eslint-disable react/prop-types */
import styled from "styled-components";
import PreviewItem from "./PreviewItem";

const StyledCategoryPreview = styled.div`
  max-width: 70rem;
  margin-inline: auto;
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 3rem;
`;

const StyledHeading = styled.h1`
  text-transform: uppercase;
  text-align: center;
`;

function CategoryPreview({ collection }) {
  console.log(collection);
  return (
    <>
      <StyledHeading>{collection.title}</StyledHeading>
      <StyledCategoryPreview>
        {collection.items.map((item) => (
          <PreviewItem key={item.id} details={item} />
        ))}
      </StyledCategoryPreview>
    </>
  );
}

export default CategoryPreview;
