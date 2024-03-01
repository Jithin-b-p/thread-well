import styled from "styled-components";
import MenuItem from "./MenuItem";
import SpinnerHolder from "./SpinnerHolder";
import { useSelector } from "react-redux";

const StyledHomeLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-block-end: 3rem;
`;

function HomeLayout() {
  // const { loading } = useAuth();
  const sections = useSelector((state) => state.directory.sections);

  const loading = false;
  return (
    <>
      {loading ? (
        <SpinnerHolder />
      ) : (
        <StyledHomeLayout>
          {sections.map((item) => (
            <MenuItem
              key={item.id}
              title={item.title}
              color={item.color}
              bgurl={item.imageUrl}
            />
          ))}
        </StyledHomeLayout>
      )}
    </>
  );
}

export default HomeLayout;
