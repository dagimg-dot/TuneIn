/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { currentSong } from "../../shared/data/songs";
import Heading from "./Heading";
import SongTile from "./SongTile";
import { Light } from "../../shared/styles/colors";

const Container = styled.div`
  padding: 10px;
  color: ${Light.textColor};
  height: 100dvh;
  overflow-y: auto;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 80px;
`;

function RightSidebar() {
  return (
    <Container>
      <div css={{ height: "100px" }}></div>
      <Heading title="Now playing" />
      <SongList>
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
      </SongList>
    </Container>
  );
}

export default RightSidebar;
