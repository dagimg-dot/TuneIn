/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import { Song } from "../../shared/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  AlbumArt,
  AlbumArtContainer,
  PlayIcon,
  Tile,
} from "../../shared/styles/style";

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
        <AlbumArtContainer>
          <AlbumArt
            src={image}
            alt="album art"
            css={{
              width: "80px",
              height: "80px",
              gap: "20px",
            }}
          />
          <PlayIcon className="middle">
            <FontAwesomeIcon icon={faPlay} size="2x" />
          </PlayIcon>
        </AlbumArtContainer>
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
