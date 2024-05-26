/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../../common/components/Heading";
import { Light } from "../../../shared/styles/colors";
import {
  setCurrentPlaying,
  setFeaturedTrack,
} from "../../../redux/reducers/trackReducer";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../../redux/reducers/rootReducer";
import { useEffect, useState } from "react";

const ListenBtn = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: ${Light.textColor};
  color: ${Light.primary};
  font-size: 24px;
  cursor: pointer;
`;

const FeaturedContainer = styled.div`
  border-radius: 20px;
  min-height: 300px;
  background: linear-gradient(to right, #3b5c39, #456842);
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: -5px 5px 64px -7px #0f1111;
`;

function Featured() {
  const { featuredTrack, tracks } = useSelector(
    (state: GlobalState) => state.track
  );
  const [featuredTrackState, setFeaturedTrackState] = useState(featuredTrack);
  const dispatch = useDispatch();

  useEffect(() => {
    if (featuredTrack == null) {
      const randomIndex = Math.floor(Math.random() * tracks.length);
      setFeaturedTrack(tracks[randomIndex]);
      setFeaturedTrackState(tracks[randomIndex]);
    }
  }, [tracks]);

  const handlePlay = () => {
    dispatch(setCurrentPlaying(featuredTrackState));
  };

  return (
    <div>
      <Heading title="Featured" />
      <FeaturedContainer>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            css={{
              fontSize: "24px",
            }}
          >
            {featuredTrackState?.artist}
          </span>
          <span
            css={{
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            {featuredTrackState?.title}
          </span>
        </div>
        <div>
          <ListenBtn onClick={handlePlay}>
            <FontAwesomeIcon icon={faPlay} size="xs" />
            <span>Listen now</span>
          </ListenBtn>
        </div>
      </FeaturedContainer>
    </div>
  );
}

export default Featured;
