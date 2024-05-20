import { Track } from "../../../shared/types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  AlbumArt,
  AlbumArtContainer,
  PlayIcon,
  TableRow,
  Tile,
} from "../../../shared/styles/style";
import { Edit2Icon, Heart, Plus, TrashIcon } from "lucide-react";
import { useState } from "react";
import ContextMenu from "../../../common/components/ContextMenu";
import styled from "@emotion/styled";

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

const HeartIcon = () => {
  return (
    <div
      css={{
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
      }}
    >
      <Heart />
    </div>
  );
};

function DynamicTrackRow({
  id,
  artist,
  title,
  duration,
  genre,
  image,
  releasedDate,
}: Track) {
  const [isHovered, setIsHovered] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [cordinate, setCordinate] = useState({ x: 0, y: 0 });

  const handleContextMenu = (ev: MouseEvent) => {
    ev.preventDefault();
    setIsOpen(true);
    console.log(id);
    console.log(cordinate);
  };

  const trackMouse = (ev: MouseEvent) => {
    if (!isOpen) {
      setCordinate({ x: ev.clientX, y: ev.clientY });
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
      <ContextMenu
        isOpen={isOpen}
        mouseCordinates={cordinate}
        onClose={() => {
          setIsOpen(false);
          setIsHovered(false);
        }}
      >
        <UtilityContextContainer>
          <UtilityContextItem>
            <Edit2Icon size={18} />
            <span>Edit</span>
          </UtilityContextItem>
          <UtilityContextItem>
            <TrashIcon size={18} />
            <span>Delete</span>
          </UtilityContextItem>
          <UtilityContextItem>
            <Plus size={18} />
            <span>Add to playlist</span>
          </UtilityContextItem>
        </UtilityContextContainer>
      </ContextMenu>
      <Tile>
        <div
          css={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <AlbumArtContainer>
            <AlbumArt
              src={image == undefined ? "/J.jpg" : image}
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
            <span>{title}</span>
            <span>{artist}</span>
          </div>
        </div>
      </Tile>
      <div>{genre}</div>
      <div>{releasedDate}</div>
      {!isHovered ? <div></div> : <HeartIcon />}
      <div
        css={{
          textAlign: "center",
        }}
      >
        {duration}
      </div>
    </TableRow>
  );
}

export default DynamicTrackRow;
