/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import Heading from "../../../common/components/Heading";
import PlaylistCard from "../../../common/components/PlaylistCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchPlaylists } from "../../../redux/reducers/playlistReducer";
import { Status } from "../../../redux/reducers/trackReducer";
import { Playlist } from "../../../shared/types";

function PlaylistsSection() {
  //@ts-ignore
  const { playlists, status, error } = useSelector((state) => state.playlist);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
    console.log(playlists);
  }, [dispatch]);

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
        {status === Status.LOADING && "Loading"}
        {status === Status.FAILED && "Can not fetch Playlists"}
        {!error
          ? playlists.map(
              (playlist: Playlist) =>
                playlist &&
                playlist.id && (
                  <PlaylistCard playlist={playlist} key={playlist.id} />
                )
            )
          : "Something went wrong"}
      </div>
    </div>
  );
}

export default PlaylistsSection;
