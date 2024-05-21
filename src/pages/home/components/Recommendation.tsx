/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import SongTile from "../../../common/components/SongTile";
import styled from "@emotion/styled";
import Heading from "../../../common/components/Heading";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { Status, fetchTracks } from "../../../redux/reducers/trackReducer";
import { Track } from "../../../shared/types";

const SongGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 10px;
  row-gap: 5px;
  padding-bottom: 70px;
`;

function Recommendation() {
  //@ts-ignore
  let { tracks, status, error, currentPlaying } = useSelector<GlobalState>(
    (state) => state.track
  );
  const [recommendedTracks, setRecommendedTracks] = useState<Track[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks());
    if (currentPlaying) {
      setRecommendedTracks(
        tracks.filter((track: Track) => track.genre === currentPlaying.genre)
      );
    } else {
      setRecommendedTracks(tracks);
    }
  }, [dispatch, currentPlaying?.genre]);

  return (
    <div>
      <Heading title="You may also like" />
      <SongGrid>
        {status === Status.LOADING && "Loading"}
        {status === Status.FAILED && "Can not fetch Tracks"}
        {!error
          ? currentPlaying
            ? recommendedTracks.map(
                (track: Track) =>
                  track && track.id && <SongTile track={track} key={track.id} />
              )
            : tracks.map(
                (track: Track) =>
                  track && track.id && <SongTile track={track} key={track.id} />
              )
          : "Something went wrong"}
      </SongGrid>
    </div>
  );
}

export default Recommendation;
