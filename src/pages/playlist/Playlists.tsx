import { useEffect } from "react";
import PlaylistCard from "../../common/components/PlaylistCard";
import { MainContainer } from "../../shared/styles/style";
import Utilities from "../tracks/components/Utilities";
import PlaylistsHeader from "./components/PlaylistsHeader";
import styled from "@emotion/styled";
import { Playlist } from "../../shared/types";
import { useDispatch, useSelector } from "react-redux";
import { Status, fetchPlaylists } from "../../redux/reducers/playlistReducer";

const PlayListContainer = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 80px;
  display: flex;
  justify-content: safe;
  flex-wrap: wrap;
  gap: 40px;
`;

function Playlists() {
  //@ts-ignore
  const { playlists, status, error } = useSelector((state) => state.playlist);
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
          {!error
            ? playlists.map(
                (playlist: Playlist) =>
                  playlist &&
                  playlist.id && (
                    <PlaylistCard
                      playlist={playlist}
                      isContextMenuEnabled={true}
                      key={playlist.id}
                    />
                  )
              )
            : "Something went wrong"}
        </PlayListContainer>
      </div>
    </MainContainer>
  );
}

export default Playlists;
