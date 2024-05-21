/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import Heading from "../../../common/components/Heading";
import PlaylistCard from "../../../common/components/PlaylistCard";

function PlaylistsSection() {
  return (
    <div>
      <Heading title="Playlists for you" />
      <div
        css={{
          display: "flex",
          gap: "20px",
          overflowX: "auto",
          overflowY: "hidden",
        }}
      >
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
        <PlaylistCard playlist={{ name: "DejaVu", count: 30 }} />
      </div>
    </div>
  );
}

export default PlaylistsSection;
