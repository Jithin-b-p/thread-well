/* eslint-disable react/prop-types */
import styled from "styled-components";
import Button from "./Button";
import { Link } from "react-router-dom";

const StyledSection = styled.div`
  background-color: #f2f2f2a8;
  width: fit-content;
  padding-inline: 1rem;
`;

function Section({ title }) {
  return (
    <StyledSection>
      <h1>{title}</h1>
      <Link to={`/${title}`}>
        <Button>shop now</Button>
      </Link>
    </StyledSection>
  );
}

export default Section;
