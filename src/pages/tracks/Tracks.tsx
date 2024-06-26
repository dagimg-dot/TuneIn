import styled from "@emotion/styled";
import TrackHeader from "./components/TracksHeader";
import Utilities from "./components/Utilities";
import { DurationIcon } from "../../common/components/CustomIcons";
import { Light } from "../../shared/styles/colors";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Status, fetchTracks } from "../../redux/reducers/trackReducer";
import DynamicTrackRow from "./components/DynamicTrackRow";
import { Track } from "../../shared/types";
import { GlobalState } from "../../redux/reducers/rootReducer";
import { MainContainer } from "../../shared/styles/style";

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

function Tracks() {
  const { tracks, status, error } = useSelector(
    (state: GlobalState) => state.track
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  return (
    <MainContainer>
      <TrackHeader />
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
              {status === Status.FAILED && "Can not fetch Tracks"}
              {!error ? (
                tracks.length == 0 ? (
                  <span
                    css={{
                      fontSize: "18px",
                      margin: "0 auto",
                    }}
                  >
                    There are no tracks to be shown
                  </span>
                ) : (
                  tracks.map((track: Track) => (
                    <DynamicTrackRow track={track} key={track.id} />
                  ))
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

export default Tracks;
