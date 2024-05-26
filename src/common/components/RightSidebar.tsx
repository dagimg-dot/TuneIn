/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Heading from "./Heading";
import SongTile from "./SongTile";
import { Light } from "../../shared/styles/colors";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Status, fetchTracks } from "../../redux/reducers/trackReducer";
import { Track } from "../../shared/types";
import { GlobalState } from "../../redux/reducers/rootReducer";
import UserSection from "./UserSection";

const Container = styled.div`
  padding: 10px;
  color: ${Light.textColor};
  height: 100dvh;
  overflow-y: auto;
`;

const SongList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding-bottom: 80px;
`;

function RightSidebar() {
  const { tracks, status, error } = useSelector(
    (state: GlobalState) => state.track
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTracks());
  }, [dispatch]);

  return (
    <Container>
      <UserSection />
      <Heading title="Now playing" />
      <SongList>
        {status === Status.LOADING && "Loading"}
        {status === Status.FAILED && "Can not fetch Tracks"}
        {!error
          ? tracks.map((track: Track) => (
              <SongTile track={track} key={track.id} />
            ))
          : "Something went wrong"}
      </SongList>
    </Container>
  );
}

export default RightSidebar;
