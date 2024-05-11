import { Song } from "../../../shared/types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AlbumArt,
  AlbumArtContainer,
  PlayIcon,
  TableRow,
  Tile,
} from "../../../shared/styles/style";

function DynamicTrackRow({
  artist,
  title,
  duration,
  genre,
  image,
  releasedDate,
}: Song) {
  return (
    <TableRow>
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
              <FontAwesomeIcon icon={faPlay} />
            </PlayIcon>
          </AlbumArtContainer>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span>{title}</span>
            <span>{artist}</span>
          </div>
        </div>
      </Tile>
      <div>{genre}</div>
      <div>{releasedDate}</div>
      <div
        css={{
          textAlign: "center",
        }}
      >
        {duration}
      </div>
    </TableRow>
  );
}

export default DynamicTrackRow;
