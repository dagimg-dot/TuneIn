import { DurationIcon } from "../../common/components/CustomIcons";
import { Light } from "../../shared/styles/colors";
import { MainContainer } from "../../shared/styles/style";
import Utilities from "../tracks/components/Utilities";
import styled from "@emotion/styled";
import FavoriteHeader from "./components/FavoriteHeader";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GlobalState } from "../../redux/reducers/rootReducer";
import { fetchTracks, Status } from "../../redux/reducers/trackReducer";
import { Track } from "../../shared/types";
import DynamicTrackRow from "../tracks/components/DynamicTrackRow";

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

function Favorites() {
  const { tracks, status, error } = useSelector(
    (state: GlobalState) => state.track
  );
  const [favoriteTracks, setFavoriteTracks] = useState<Track[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks());
    setFavoriteTracks(tracks.filter((track) => track.isLiked));
  }, [dispatch, favoriteTracks]);
  return (
    <MainContainer>
      <FavoriteHeader />
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
                favoriteTracks.length != 0 ? (
                  favoriteTracks.map((track: Track) => (
                    <DynamicTrackRow track={track} key={track.id} />
                  ))
                ) : (
                  <span
                    css={{
                      fontSize: "18px",
                      margin: "0 auto",
                    }}
                  >
                    There are no favorite tracks to be shown
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

export default Favorites;
