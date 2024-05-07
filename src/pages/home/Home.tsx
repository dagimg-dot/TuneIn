import LeftSidebar from "../../common/components/LeftSidebar";
import Main from "./components/Main";
import Player from "./components/Player";
import RightSidebar from "./components/RightSidebar";
import styled from "@emotion/styled";

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5.5fr;
  background: linear-gradient(to bottom, #111111, #211f18);
  height: 100dvh;
  overflow-y: auto;
`;

function Home() {
  return (
    <HomeLayout>
      <LeftSidebar />
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "4fr 1.5fr",
          gridTemplateRows: "11fr 1fr",
          background: "linear-gradient(to top right, #2D2C25, #2F2723)",
          borderRadius: "40px 0 0 40px",
          height: "100dvh",
          overflowY: "auto",
        }}
      >
        <Main />
        <RightSidebar />
        <div css={{ width: "100%" }}>
          <Player />
        </div>
      </div>
    </HomeLayout>
  );
}

export default Home;
