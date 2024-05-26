import { Playlist, Track } from "../../../shared/types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AlbumArt,
  AlbumArtContainer,
  PlayIcon,
  TableRow,
} from "../../../shared/styles/style";
import { Edit2Icon, Heart, MinusCircle, Plus } from "lucide-react";
import { useEffect, useState } from "react";
import ContextMenu from "../../../common/components/ContextMenu";
import styled from "@emotion/styled";
import TrackForm from "./TrackForm";
import Modal from "../../../common/components/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  DeleteTrack,
  EditTrack,
  Status,
  setCurrentPlaying,
} from "../../../redux/reducers/trackReducer";
import toast from "react-hot-toast";
import { GlobalState } from "../../../redux/reducers/rootReducer";
import AddToPlaylistForm from "./AddToPlaylistForm";
import { EditPlaylist } from "../../../redux/reducers/playlistReducer";

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

const BasicInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 5px;
`;

interface HeartIconProps {
  isLiked: boolean;
  onClick: () => void;
}

const HeartIcon = ({ isLiked, onClick }: HeartIconProps) => {
  const [isLikedState, setIsLikedState] = useState(isLiked);

  useEffect(() => {
    setIsLikedState(isLiked);
  }, [isLiked]);

  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        transition: "all 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
      onClick={onClick}
    >
      <Heart fill={isLikedState ? "white" : "transparent"} />
    </div>
  );
};

interface TrackRowProps {
  track: Track;
  isSinglePlaylist?: Playlist;
}

function DynamicTrackRow({ track, isSinglePlaylist }: TrackRowProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });
  const [isAPModalOpen, setIsAPModalOpen] = useState(false);
  const [isATPModalOpen, setIsATPModalOpen] = useState(false);

  const status = useSelector((state: GlobalState) => state.track.status);

  const dispatch = useDispatch();

  const handleContextMenu = (ev: React.MouseEvent<HTMLDivElement>) => {
    ev.preventDefault();
    setIsOpen(true);
  };

  const trackMouse = (ev: React.MouseEvent<HTMLDivElement>) => {
    if (!isOpen) {
      setCordinate({ x: ev.clientX, y: ev.clientY });
    }
  };

  const handleDelete = () => {
    dispatch(DeleteTrack(track.id!));

    if (status == Status.SUCCEEDED) {
      toast.success("Track Deleted Successfully");
    }

    if (status == Status.FAILED) {
      toast.error("Failed to delete playlist");
    }
  };

  const handlePlay = () => {
    dispatch(setCurrentPlaying(track));
  };

  const handleModalClose = () => {
    setIsAPModalOpen(false);
    setIsATPModalOpen(false);
    setIsHovered(false);
  };

  const handleHeartClick = () => {
    const updatedTrack: Track = {
      ...track,
      isLiked: !track.isLiked,
    };

    dispatch(EditTrack(updatedTrack));
  };

  const handleRemoveFromPlaylist = (isSinglePlaylist: Playlist) => {
    const newPlaylist: Playlist = {
      ...isSinglePlaylist,
      tracks: isSinglePlaylist.tracks?.filter((t) => t.id !== track.id),
    };

    dispatch(EditPlaylist(newPlaylist));

    if (status === Status.SUCCEEDED) {
      toast.success(
        `${track.title} removed from playlist ${isSinglePlaylist.name} Successfully`
      );
    }
  };

  return (
    <TableRow
      onClick={() => setIsOpen(false)}
      onMouseMove={trackMouse}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onContextMenu={handleContextMenu}
    >
      {!isAPModalOpen && !isATPModalOpen && (
        <ContextMenu
          isOpen={isOpen}
          mouseCordinates={cordinate}
          onClose={() => {
            setIsOpen(false);
            setIsHovered(false);
          }}
        >
          <UtilityContextContainer>
            <UtilityContextItem onClick={() => setIsAPModalOpen(true)}>
              <Edit2Icon size={16} />
              <span>Edit</span>
            </UtilityContextItem>
            <UtilityContextItem onClick={handleDelete}>
              <MinusCircle size={18} />
              <span>Delete</span>
            </UtilityContextItem>
            <UtilityContextItem onClick={() => setIsATPModalOpen(true)}>
              <Plus size={18} />
              <span>Add to playlist</span>
            </UtilityContextItem>
            {isSinglePlaylist && (
              <UtilityContextItem
                onClick={() => handleRemoveFromPlaylist(isSinglePlaylist)}
              >
                <MinusCircle size={18} />
                <span>Remove from playlist</span>
              </UtilityContextItem>
            )}
          </UtilityContextContainer>
        </ContextMenu>
      )}

      <Modal isOpen={isAPModalOpen} onClose={handleModalClose}>
        <TrackForm onClose={handleModalClose} _formData={track} />
      </Modal>
      <Modal isOpen={isATPModalOpen} onClose={handleModalClose}>
        <AddToPlaylistForm onClose={handleModalClose} track={track} />
      </Modal>
      <BasicInfoContainer>
        <div
          css={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <AlbumArtContainer onClick={handlePlay}>
            <AlbumArt
              src={track.image == undefined ? "/J.jpg" : track.image}
              alt="album art"
            />
            <PlayIcon className="middle">
              <FontAwesomeIcon icon={faPlay} />
            </PlayIcon>
          </AlbumArtContainer>
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "5px",
            }}
          >
            <span>{track.title}</span>
            <span>{track.artist}</span>
          </div>
        </div>
      </BasicInfoContainer>
      <div>{track.genre}</div>
      <div>{track.releasedDate}</div>
      <div
        css={{
          opacity: isHovered ? 1 : 0,
          transition: "all 0.3s ease-in-out",
        }}
      >
        <HeartIcon isLiked={track.isLiked} onClick={handleHeartClick} />
      </div>
      <div
        css={{
          textAlign: "center",
        }}
      >
        {track.duration}
      </div>
    </TableRow>
  );
}

export default DynamicTrackRow;
