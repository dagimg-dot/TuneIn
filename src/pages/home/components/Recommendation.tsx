/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import SongTile from "../../../common/components/SongTile";
import styled from "@emotion/styled";
import Heading from "../../../common/components/Heading";

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 5px;
`;

function Recommendation() {
  return (
    <div>
      <Heading title="You may also like"/>
      <SongGrid>
        <SongTile />
        <SongTile />
        <SongTile />
        <SongTile />
        <SongTile />
        <SongTile />
        <SongTile />
        <SongTile />
      </SongGrid>
    </div>
  );
}

export default Recommendation;
