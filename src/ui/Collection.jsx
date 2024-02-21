import styled from "styled-components";
import CollectionPreview from "./CollectionPreview";
import SHOP_DATA from "../pages/shop/shop.data";

const StyledCollection = styled.section``;

function Collection() {
  return (
    <StyledCollection>
      {SHOP_DATA.map((collection) => {
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
