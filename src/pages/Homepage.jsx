import styled from "styled-components";
import HomeLayout from "../ui/HomeLayout";

const StyledHomepage = styled.main`
  width: min(80%, 75rem);
  margin-inline: auto;
`;
function Homepage() {
  return (
    <StyledHomepage>
      <HomeLayout />
    </StyledHomepage>
  );
}

export default Homepage;
