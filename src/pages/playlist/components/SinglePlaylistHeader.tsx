/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { useMemo, useState } from "react";
import { ChevronLeftCircle, ListChecksIcon } from "lucide-react";
import { DecorationBox } from "../../../shared/styles/style";
import { useSelector } from "react-redux";
import { GlobalState } from "../../../redux/reducers/rootReducer";
import { Playlist } from "../../../shared/types";
import { useNavigate } from "react-router";

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

const BackButton = styled.div`
  cursor: pointer;
`;

interface SinglePlaylistHeader {
  playlist: Playlist;
}

function SinglePlaylistHeader() {
  const { playlist } = useSelector((state: GlobalState) => state.playlist);
  const [trackCount, setTrackCount] = useState(playlist?.tracks?.length);

  useMemo(() => {
    setTrackCount(playlist?.tracks?.length);
  }, [playlist?.tracks]);

  const navigate = useNavigate();

  return (
    <GradientContainer>
      <BackButton onClick={() => navigate("/playlists")}>
        <ChevronLeftCircle size={30} />
      </BackButton>
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
            <ListChecksIcon size={50} fill="white" stroke="white" />
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
              {playlist?.name}
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

export default SinglePlaylistHeader;
