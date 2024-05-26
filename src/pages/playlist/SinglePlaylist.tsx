import { useLocation } from "react-router";
import { DurationIcon } from "../../common/components/CustomIcons";
import { Status } from "../../redux/reducers/trackReducer";
import { Light } from "../../shared/styles/colors";
import { MainContainer } from "../../shared/styles/style";
import { Track } from "../../shared/types";
import DynamicTrackRow from "../tracks/components/DynamicTrackRow";
import Utilities from "../tracks/components/Utilities";
import styled from "@emotion/styled";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../redux/reducers/rootReducer";
import { fetchPlaylist } from "../../redux/reducers/playlistReducer";
import SinglePlaylistHeader from "./components/SinglePlaylistHeader";

const TrackListContainer = styled.div`
  margin-top: 30px;
  padding: 0 30px;
  padding-bottom: 80px;
`;

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 0.3fr 0.5fr;
  text-align: left;
  padding: 10px 0 10px 5px;
  font-weight: 400;
`;

function SinglePlaylist() {
  const { pathname } = useLocation();
  const { playlist, status, error, playlists } = useSelector(
    (state: GlobalState) => state.playlist
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const id = pathname.split("/").pop();
    dispatch(fetchPlaylist(id!));
  }, [dispatch, pathname, playlists]);

  return (
    <MainContainer>
      <SinglePlaylistHeader />
      <div
        css={{
          height: "75%",
        }}
      >
        <Utilities />
        <TrackListContainer>
          <div
            css={{
              width: "100%",
            }}
          >
            <TableRow
              css={{
                borderBottom: `2px solid ${Light.textSecondary}`,
                color: Light.textSecondary,
              }}
            >
              <div>Title</div>
              <div>Genre</div>
              <div>Released Date</div>
              <div></div>
              <div
                css={{
                  textAlign: "center",
                }}
              >
                <DurationIcon />
              </div>
            </TableRow>
            <div
              css={{
                marginTop: "20px",
              }}
            >
              {status === Status.LOADING && "Loading"}
              {status === Status.FAILED && "Can not fetch your favorite Tracks"}
              {!error ? (
                playlist?.tracks?.length != 0 ? (
                  playlist?.tracks?.map((track: Track) => (
                    <DynamicTrackRow
                      track={track}
                      key={track.id}
                      isSinglePlaylist={playlist}
                    />
                  ))
                ) : (
                  <span
                    css={{
                      fontSize: "18px",
                      margin: "0 auto",
                    }}
                  >
                    {playlist.name} doesn't have any tracks
                  </span>
                )
              ) : (
                "Something went wrong"
              )}
            </div>
          </div>
        </TrackListContainer>
      </div>
    </MainContainer>
  );
}

export default SinglePlaylist;
