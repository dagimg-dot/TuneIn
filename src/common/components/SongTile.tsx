/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import { Light } from "../../styles/colors";
import styled from "@emotion/styled";
import { Song } from "../../shared/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

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

const AlbumArt = styled.img`
  opacity: 1;
  width: 80px;
  height: 80px;
  border-radius: 12px;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

const AlbumArtContainer = styled.div`
  position: relative;
  cursor: pointer;
  &:hover img {
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
`;

const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.5s ease;
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
        <AlbumArtContainer>
          <AlbumArt src={image} alt="album art" />
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
