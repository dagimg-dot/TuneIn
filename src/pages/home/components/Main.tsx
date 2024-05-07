/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Search from "./Search";
import Featured from "./Featured";
import { Light } from "../../../styles/colors";
import PlaylistsSection from "./PlaylistsSection";
import Recommendation from "./Recommendation";

const Browse = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 30px;
  color: ${Light.textColor};
  height: 100dvh;
  overflow-y: auto;
`;

function Main() {
  return (
    <Browse>
      <Search />
      <Featured />
      <PlaylistsSection />
      <Recommendation />
    </Browse>
  );
}

export default Main;
