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
import { GlobalState } from "../../../redux/reducers/rootReducer";

function PlaylistsSection() {
  const { playlists, status, error } = useSelector(
    (state: GlobalState) => state.playlist
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
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
          padding: "5px",
          // justifyContent: "center",
          alignItems: "center",
        }}
      >
        {status === Status.LOADING && "Loading"}
        {status === Status.FAILED && "Can not fetch Playlists"}
        {!error ? (
          playlists.length == 0 ? (
            <span
              css={{
                fontSize: "18px",
                margin: "0 auto",
              }}
            >
              There are no playlists to be shown
            </span>
          ) : (
            playlists.map(
              (playlist: Playlist) =>
                playlist &&
                playlist.id && (
                  <PlaylistCard playlist={playlist} key={playlist.id} />
                )
            )
          )
        ) : (
          "Something went wrong"
        )}
      </div>
    </div>
  );
}

export default PlaylistsSection;
