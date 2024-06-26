import styled from "@emotion/styled";
import {
  NextSongIcon,
  PlayPauseIcon,
  PreviousSongIcon,
} from "../../common/components/CustomIcons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { Heart } from "lucide-react";
import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducers/rootReducer";

const Container = styled.div`
  color: white;
  grid-column-start: 1;
  grid-column-end: -1;
  border-radius: 0 0 0 40px;
  backdrop-filter: blur(20px);
  position: sticky;
  width: 100%;
  bottom: 0;
  height: 80px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px 0px 30px;
`;

function MainControl() {
  return (
    <div
      css={{
        display: "flex",
        gap: "10px",
      }}
    >
      <PreviousSongIcon />
      <PlayPauseIcon isPlaying={false} />
      <NextSongIcon />
    </div>
  );
}

interface SecondaryControlProps {
  duration: string;
  isLiked: boolean;
}

function SecondaryControl({ duration, isLiked }: SecondaryControlProps) {
  return (
    <div css={{ display: "flex", gap: "15px", alignItems: "center" }}>
      <div>{duration}</div>
      <div>
        <Heart size={22} fill={isLiked ? "white" : "transparent"} />
      </div>
      <div>
        <FontAwesomeIcon icon={faVolumeHigh} size="lg" />
      </div>
      <input
        type="range"
        css={{
          accentColor: "white",
          outline: "none",
          border: "none",
        }}
      />
    </div>
  );
}

function Player() {
  let songDetail = useSelector(
    (state: GlobalState) => state.track.currentPlaying
  );
  3;

  if (songDetail == null) {
    return <div></div>;
  }

  return (
    <Container>
      <input
        type="range"
        css={{
          width: "100%",
          accentColor: "#20ACFB",
        }}
      />
      <InnerContainer>
        <div
          css={{
            display: "flex",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <img
            src={songDetail.image == undefined ? "/J.jpg" : songDetail.image}
            css={{
              width: "45px",
              height: "45px",
              borderRadius: "10px",
            }}
          />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span
              css={{
                fontWeight: "600",
              }}
            >
              {songDetail.title}
            </span>
            <span>{songDetail.artist}</span>
          </div>
        </div>
        <div>
          <MainControl />
        </div>
        <div>
          <SecondaryControl
            duration={songDetail.duration}
            isLiked={songDetail.isLiked}
          />
        </div>
      </InnerContainer>
    </Container>
  );
}

export default Player;
