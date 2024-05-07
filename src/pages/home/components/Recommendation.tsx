/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import SongTile from "../../../common/components/SongTile";
import styled from "@emotion/styled";
import Heading from "../../../common/components/Heading";
import { currentSong } from "../../../shared/data/songs";

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 5px;
`;

function Recommendation() {
  return (
    <div>
      <Heading title="You may also like" />
      <SongGrid>
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
        <SongTile {...currentSong} />
      </SongGrid>
    </div>
  );
}

export default Recommendation;
