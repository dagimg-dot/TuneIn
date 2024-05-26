import { Playlist } from "../../../shared/types";
import { AlbumArt, Tile } from "../../../shared/styles/style";

interface PlaylistTileProps {
  playlist: Playlist;
  onClick: (playlist: Playlist) => void;
}

function PlaylistTile({ playlist, onClick }: PlaylistTileProps) {
  return (
    <Tile
      onClick={() => onClick(playlist)}
      css={{
        cursor: "pointer",
        paddingLeft: "0",
        paddingBottom: "0",
      }}
    >
      <div
        css={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <AlbumArt
          src={playlist.image == undefined ? "J.jpg" : playlist.image}
          alt="album art"
          css={{
            gap: "20px",
          }}
        />
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span>{playlist.name}</span>
        </div>
      </div>
      <div>
        {playlist.tracks?.length == 1 || playlist.tracks?.length == 0
          ? `${playlist.tracks.length} track`
          : `${playlist.tracks?.length} tracks`}{" "}
      </div>
    </Tile>
  );
}

export default PlaylistTile;
