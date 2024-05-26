/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { Heart } from "lucide-react";
import { DecorationBox } from "../../../shared/styles/style";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../redux/reducers/rootReducer";

const GradientContainer = styled.div`
  background: linear-gradient(to bottom, #20acfb, transparent);
  padding: 20px 30px 0 30px;
  height: 25%;
  position: sticky;
  top: 0;
  z-index: 2;
`;

const LeftFlexItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

function FavoriteHeader() {
  const { tracks } = useSelector((state: GlobalState) => state.track);
  const [favoriteTracks] = useState(tracks.filter((track) => track.isLiked));
  const [trackCount, setTrackCount] = useState(tracks.length);

  useMemo(() => {
    setTrackCount(favoriteTracks.length);
  }, [tracks.length]);

  return (
    <GradientContainer>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <LeftFlexItem>
          <DecorationBox>
            <Heart size={50} fill="white" stroke="white" />
          </DecorationBox>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span
              css={{
                fontSize: "38px",
                fontWeight: "700",
              }}
            >
              Your Favorites
            </span>
            <span>
              {trackCount +
                `${
                  trackCount == 1 || trackCount == 0 ? " track" : " tracks"
                }`}{" "}
            </span>
          </div>
        </LeftFlexItem>
      </div>
    </GradientContainer>
  );
}

export default FavoriteHeader;
