/* eslint-disable react/prop-types */
import styled from "styled-components";
import Section from "./Section";

const StyledMenuItem = styled.div`
  flex: 1 1 15rem;
  height: 15rem;

  border: 1.5px solid #222;
  text-align: center;
  text-transform: uppercase;
  overflow: hidden;
`;

const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;
  padding: 4rem 2rem;
  background-image: url(${(props) => props.$bgurl});
  background-position: center;
  background-size: cover;
  display: flex;
  justify-content: center;

  &:hover {
    transform: scale(1.1);
    transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
  }
`;

function MenuItem({ title, bgurl }) {
  return (
    <StyledMenuItem>
      <BackgroundImage $bgurl={bgurl}>
        <Section title={title} />
      </BackgroundImage>
    </StyledMenuItem>
  );
}

export default MenuItem;
