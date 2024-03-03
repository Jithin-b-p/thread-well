import styled from "styled-components";
import CollectionPreview from "./CollectionPreview";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const StyledCollection = styled.section`
  max-width: 70rem;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
`;

function Collection() {
  const collections = useSelector((state) => state.shop.collections);
  return (
    <StyledCollection>
      <h2>Collections</h2>

      {collections.map((collection) => {
        return (
          <>
            <Link to={`/shop/${collection.title.toLowerCase()}`}>
              <h2>{collection.title}</h2>
            </Link>
            <CollectionPreview key={collection.id} items={collection.items} />
          </>
        );
      })}
    </StyledCollection>
  );
}

export default Collection;
