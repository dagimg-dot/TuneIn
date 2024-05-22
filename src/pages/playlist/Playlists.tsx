import { useEffect } from "react";
import PlaylistCard from "../../common/components/PlaylistCard";
import { MainContainer } from "../../shared/styles/style";
import Utilities from "../tracks/components/Utilities";
import PlaylistsHeader from "./components/PlaylistsHeader";
import styled from "@emotion/styled";
import { Playlist } from "../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { Status, fetchPlaylists } from "../../redux/reducers/playlistReducer";
import { GlobalState } from "../../redux/reducers/rootReducer";

const PlayListContainer = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 80px;
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
`;

function Playlists() {
  const { playlists, status, error } = useSelector(
    (state: GlobalState) => state.playlist
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  return (
    <MainContainer>
      <PlaylistsHeader />
      <div
        css={{
          height: "75%",
        }}
      >
        <Utilities />
        <PlayListContainer>
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
                    <PlaylistCard
                      playlist={playlist}
                      key={playlist.id}
                      isContextMenuEnabled={true}
                    />
                  )
              )
            )
          ) : (
            "Something went wrong"
          )}
        </PlayListContainer>
      </div>
    </MainContainer>
  );
}

export default Playlists;
