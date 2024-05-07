/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import { Light } from "../../styles/colors";
import styled from "@emotion/styled";
import { Song } from "../../shared/types";

const Tile = styled.div`
  display: flex;
  padding: 5px;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${Light.tileHover};
    border-radius: 5px;
  }
`;

function SongTile({ artist, title, duration, image }: Song) {
  return (
    <Tile>
      <div
        css={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          css={{
            width: "80px",
            height: "80px",
            borderRadius: "12px",
          }}
        />
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span>{title}</span>
          <span>{artist}</span>
        </div>
      </div>
      <div>{duration}</div>
    </Tile>
  );
}

export default SongTile;
