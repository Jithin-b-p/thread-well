import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import CategoryPreview from "../ui/CategoryPreview";

const StyledCatergoryPage = styled.div``;

function CatergoryPage() {
  const { category } = useParams();
  const collections = useSelector((state) => state.shop.collections);

  const collection = collections.find(
    (collection) => collection.routeName === category
  );

  return (
    <StyledCatergoryPage>
      {collection ? <CategoryPreview collection={collection} /> : null}
    </StyledCatergoryPage>
  );
}

export default CatergoryPage;
