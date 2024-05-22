/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import Modal from "../../../common/components/Modal";
import { useMemo, useState } from "react";
import { List, PlusIcon } from "lucide-react";
import { DecorationBox } from "../../../shared/styles/style";
import PlaylistForm from "./PlaylistForm";
import { GlobalState } from "../../../redux/reducers/rootReducer";
import { useSelector } from "react-redux";

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
  gap: 30px;
`;

function PlaylistsHeader() {
  const [isOpen, setIsOpen] = useState(false);
  const { playlists } = useSelector((state: GlobalState) => state.playlist);
  const [playlistCount, setPlaylistCount] = useState(playlists.length);

  useMemo(() => {
    setPlaylistCount(playlists.length);
  }, [playlists.length]);

  return (
    <GradientContainer>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PlaylistForm onClose={() => setIsOpen(false)} />
      </Modal>
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
            <List size={50} />
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
                fontSize: "34px",
                fontWeight: "700",
              }}
            >
              Your Playlists
            </span>
            <span>
              {playlistCount +
                `${playlistCount == 1 || playlistCount == 0 ? " playlist" : " playlists"}`}{" "}
            </span>
          </div>
        </LeftFlexItem>
        <button
          css={{
            outline: "none",
            border: "none",
            backgroundColor: "#87a784",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "15px",
            borderRadius: "50%",
            cursor: "pointer",
            transition: "all 0.2s ease-in-out",
            "&:hover": {
              scale: "1.1",
            },
          }}
          onClick={() => setIsOpen(true)}
        >
          <PlusIcon strokeWidth={3} size={28} />
        </button>
      </div>
    </GradientContainer>
  );
}

export default PlaylistsHeader;
