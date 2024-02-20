/* eslint-disable react/prop-types */
import styled from "styled-components";
import Section from "./Section";

const StyledMenuItem = styled.div`
  flex: 1 1 15rem;
  height: 15rem;
  padding: 4rem 2rem;
  background-image: url(${(props) => props.$bgurl});
  background-position: center;
  background-size: cover;
  border: 1.5px solid #222;
  text-align: center;
  text-transform: uppercase;

  display: flex;
  justify-content: center;
`;

function MenuItem({ title, color, bgurl }) {
  return (
    <StyledMenuItem $colorBg={color} $bgurl={bgurl}>
      <Section title={title} />
    </StyledMenuItem>
  );
}

export default MenuItem;
