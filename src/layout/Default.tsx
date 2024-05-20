import styled from "@emotion/styled";
import LeftSidebar from "../common/components/LeftSidebar";
import { Outlet } from "react-router";
import Player from "../common/components/Player";
import RightSidebar from "../common/components/RightSidebar";

const HomeLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 5.5fr;
  background: linear-gradient(to bottom, #111111, #211f18);
  height: 100dvh;
  overflow-y: auto;
`;

function Default() {
  return (
    <HomeLayout>
      <LeftSidebar />
      <div
        css={{
          display: "grid",
          gridTemplateColumns: "4fr 1.5fr",
          background: "linear-gradient(to top right, #2D2C25, #2F2723)",
          borderRadius: "40px 0 0 40px",
          height: "100dvh",
          overflowY: "hidden",
        }}
      >
        <Outlet />
        <RightSidebar />
        <Player />
      </div>
    </HomeLayout>
  );
}

export default Default;
