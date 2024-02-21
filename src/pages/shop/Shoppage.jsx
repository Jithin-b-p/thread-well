import styled from "styled-components";

import Collection from "../../ui/Collection";

const StyledShoppage = styled.main`
  padding-inline: 3rem;
`;

function Shoppage() {
  return (
    <StyledShoppage>
      <h2>Collections</h2>
      <Collection />
    </StyledShoppage>
  );
}

export default Shoppage;
