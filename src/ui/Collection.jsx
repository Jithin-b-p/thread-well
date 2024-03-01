import styled from "styled-components";
import CollectionPreview from "./CollectionPreview";
import { useSelector } from "react-redux";

const StyledCollection = styled.section``;

function Collection() {
  const collections = useSelector((state) => state.shop.collections);
  return (
    <StyledCollection>
      {collections.map((collection) => {
        return (
          <>
            <h2>{collection.title}</h2>
            <CollectionPreview key={collection.id} items={collection.items} />
          </>
        );
      })}
    </StyledCollection>
  );
}

export default Collection;
