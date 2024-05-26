import { Playlist, Track } from "../../../shared/types";
import { AlbumArt, Tile } from "../../../shared/styles/style";
import { Check } from "lucide-react";

interface PlaylistTileProps {
  playlist: Playlist;
  track: Track;
  onClick: (playlist: Playlist) => void;
}

function PlaylistTile({ playlist, track, onClick }: PlaylistTileProps) {
  const isAlreadyInPlaylist = playlist.tracks?.some(
    (t: Track) => t.id == track.id
  );

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
      <div
        css={{
          display: "flex",
          gap: "10px",
        }}
      >
        <div>{isAlreadyInPlaylist && <Check color="#87a784" />}</div>
        <div>
          {playlist.tracks?.length == 1 || playlist.tracks?.length == 0
            ? `${playlist.tracks.length} track`
            : `${playlist.tracks?.length} tracks`}{" "}
        </div>
      </div>
    </Tile>
  );
}

export default PlaylistTile;
