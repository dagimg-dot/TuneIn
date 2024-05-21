/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../shared/styles/colors";
import Tab from "./Tab";
import Logo from "./Logo";
import { Globe, Heart, List, Music4 } from "lucide-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Light.primary};
  background: linear-gradient(to bottom, #111111, #211f18);
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  height: 100dvh;
  overflow-y: auto;
`;

const LeftSidebar = () => {
  return (
    <Container>
      <Logo />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "30px",
        }}
      >
        <Tab title={"Browse"} navigateTo={"/"} icon={<Globe />} />
        <Tab title={"Tracks"} navigateTo={"/tracks"} icon={<Music4 />} />
        <Tab title={"Playlists"} navigateTo={"/playlists"} icon={<List />} />
        <Tab title={"Favorites"} navigateTo={"/favorites"} icon={<Heart />} />
      </div>
      <div css={{ height: "100px" }}></div>
    </Container>
  );
};

export default LeftSidebar;
