/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import { Track } from "../../shared/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import {
  AlbumArt,
  AlbumArtContainer,
  PlayIcon,
  Tile,
} from "../../shared/styles/style";
import { useDispatch } from "react-redux";
import { setCurrentPlaying } from "../../redux/reducers/trackReducer";

interface SongTileProps {
  track: Track;
}

function SongTile({ track }: SongTileProps) {
  const dispatch = useDispatch();

  const handlePlay = () => {
    dispatch(setCurrentPlaying(track));
  };

  return (
    <Tile>
      <div
        css={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <AlbumArtContainer onClick={handlePlay}>
          <AlbumArt
            src={track.image == undefined ? "J.jpg" : track.image}
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
          <span>{track.title}</span>
          <span>{track.artist}</span>
        </div>
      </div>
      <div>{track.duration}</div>
    </Tile>
  );
}

export default SongTile;
