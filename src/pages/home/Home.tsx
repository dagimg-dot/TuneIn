import LeftSidebar from "./components/LeftSidebar";
import Main from "./components/Main";
import RightSidebar from "./components/RightSidebar";
import styled from "@emotion/styled";

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  background-color: blue;
  height: 100dvh;
`;

function Home() {
  return (
    <HomeLayout>
      <LeftSidebar />
      <Main />
      <RightSidebar />
    </HomeLayout>
  );
}

export default Home;
