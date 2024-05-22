/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Edit2Icon, MinusCircle, Play } from "lucide-react";
import { useState } from "react";
import { Playlist } from "../../shared/types";
import ContextMenu from "./ContextMenu";
import Modal from "./Modal";
import PlaylistForm from "../../pages/playlist/components/PlaylistForm";
import { useDispatch, useSelector } from "react-redux";
import { DeletePlaylist, Status } from "../../redux/reducers/playlistReducer";
import { GlobalState } from "../../redux/reducers/rootReducer";
import toast from "react-hot-toast";

const CardBox = styled.div`
  position: relative;
  border-radius: 12px;
  min-height: 170px;
  min-width: 170px;
  height: 170px;
  width: 170px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    scale: 1.05;
  }
`;

const CardOverlay = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  color: white;
  padding: 15px;
  font-size: 18px;
  font-weight: "600";
  width: 100%;
`;

const UtilityContextContainer = styled.div`
  background: linear-gradient(to right, #282828, #202020);
  width: 200px;
  padding: 5px;
  box-shadow: -10px 30px 64px -7px #0f1111;
  border-radius: 9px;
`;

const UtilityContextItem = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border-radius: 4px;
  &:hover {
    background-color: #333333;
  }
`;

interface PlaylistCardProps {
  playlist: Playlist;
  isContextMenuEnabled?: boolean;
}

function PlaylistCard({
  playlist,
  isContextMenuEnabled = false,
}: PlaylistCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const [isModalOpen, setIsModalOpen] = useState(false);

  const status = useSelector((state: GlobalState) => state.playlist.status);
  const dispatch = useDispatch();

  const handleContextMenu = (ev: MouseEvent) => {
    ev.preventDefault();
    setIsOpen(true);
  };

  const trackMouse = (ev: MouseEvent) => {
    if (!isOpen) {
      setCordinate({ x: ev.clientX, y: ev.clientY });
    }
  };

  const handleDelete = () => {
    dispatch(DeletePlaylist(playlist.id!));

    if (status == Status.SUCCEEDED) {
      toast.success("Playlist Deleted Successfully");
    }

    if (status == Status.FAILED) {
      toast.error("Failed to delete playlist");
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsHovered(false);
  };

  return (
    <div>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <PlaylistForm onClose={handleModalClose} _formData={playlist} />
      </Modal>
      <CardBox
        onClick={() => setIsOpen(false)}
        //@ts-ignore
        onMouseMove={trackMouse}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        //@ts-ignore
        onContextMenu={handleContextMenu}
      >
        <CardOverlay>
          <span
            css={{
              fontWeight: "500",
            }}
          >
            {playlist.name}
          </span>
          <div
            css={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>
              <strong>{playlist.count}</strong> Tracks
            </span>
            <div
              css={{
                opacity: isHovered ? 1 : 0,
                transition: "all 0.3s ease-in-out",
                display: "flex",
                alignItems: "center",
                backgroundColor: "white",
                borderRadius: "100%",
                padding: "10px",
              }}
            >
              <Play fill="black" stroke="black" size={15} />
            </div>
          </div>
        </CardOverlay>
        <img
          src={playlist.image == undefined ? "/J.jpg" : playlist.image}
          css={{
            borderRadius: "12px",
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </CardBox>
      {isContextMenuEnabled && (
        <ContextMenu
          isOpen={isOpen}
          mouseCordinates={cordinate}
          onClose={() => {
            setIsOpen(false);
            setIsHovered(false);
          }}
        >
          <UtilityContextContainer>
            <UtilityContextItem onClick={() => setIsModalOpen(true)}>
              <Edit2Icon size={16} />
              <span>Edit</span>
            </UtilityContextItem>
            <UtilityContextItem onClick={handleDelete}>
              <MinusCircle size={18} />
              <span>Delete</span>
            </UtilityContextItem>
          </UtilityContextContainer>
        </ContextMenu>
      )}
    </div>
  );
}

export default PlaylistCard;
