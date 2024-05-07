/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../styles/colors";
import Logo from "../../pages/home/components/Logo";
import Tab from "./Tab";
import { faGlobe, faHeart, faMusic } from "@fortawesome/free-solid-svg-icons";
import { faHamburger } from "@fortawesome/free-solid-svg-icons/faHamburger";

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
        <Tab title={"Browse"} icon={faGlobe} isActive />
        <Tab title={"Tracks"} icon={faMusic} isActive={false} />
        <Tab title={"Playlists"} icon={faHamburger} isActive={false} />
        <Tab title={"Favorites"} icon={faHeart} isActive={false} />
      </div>
      <div css={{ height: "100px" }}></div>
    </Container>
  );
};

export default LeftSidebar;