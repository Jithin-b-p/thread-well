/* eslint-disable react/prop-types */
import styled from "styled-components";

import Collection from "../ui/Collection";

const StyledShoppage = styled.main`
  padding-inline: 3rem;
`;

function Shoppage() {
  return (
    <StyledShoppage>
      <Collection />
    </StyledShoppage>
  );
}

export default Shoppage;
