/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import PlaylistCard from "./PlaylistCard";
import Heading from "../../../common/components/Heading";

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
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
        <PlaylistCard />
      </div>
    </div>
  );
}

export default PlaylistsSection;
