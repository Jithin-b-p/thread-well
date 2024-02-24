import styled from "styled-components";
import MenuItem from "./MenuItem";
import { useAuth } from "../contexts/authContext/AuthContext";
import SpinnerHolder from "./SpinnerHolder";

const sections = [
  {
    title: "hats",
    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
    id: 1,
    linkUrl: "shop/hats",
  },
  {
    title: "jackets",
    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
    id: 2,
    linkUrl: "shop/jackets",
  },
  {
    title: "sneakers",
    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
    id: 3,
    linkUrl: "shop/sneakers",
  },
  {
    title: "womens",
    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
    size: "large",
    id: 4,
    linkUrl: "shop/womens",
  },
  {
    title: "mens",
    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
    size: "large",
    id: 5,
    linkUrl: "shop/mens",
  },
];

const StyledHomeLayout = styled.section`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  padding-block-end: 3rem;
`;
function HomeLayout() {
  const { loading, currentUser } = useAuth();
  console.log(currentUser);
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
