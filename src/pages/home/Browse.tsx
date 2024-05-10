/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../shared/styles/colors";
import Featured from "./components/Featured";
import PlaylistsSection from "./components/PlaylistsSection";
import Recommendation from "./components/Recommendation";
import Search from "./components/Search";

const BrowseContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  padding: 20px 30px;
  color: ${Light.textColor};
  height: 100dvh;
  overflow-y: auto;
`;

function Browse() {
  return (
    <BrowseContainer>
      <Search />
      <Featured />
      <PlaylistsSection />
      <Recommendation />
    </BrowseContainer>
  );
}

export default Browse;
