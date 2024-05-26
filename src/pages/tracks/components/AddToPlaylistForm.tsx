import styled from "@emotion/styled";
import { Light } from "../../../shared/styles/colors";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  EditPlaylist,
  fetchPlaylists,
} from "../../../redux/reducers/playlistReducer";
import { GlobalState } from "../../../redux/reducers/rootReducer";
import { Status } from "../../../redux/reducers/trackReducer";
import { Playlist, Track } from "../../../shared/types";
import PlaylistTile from "./PlaylistTile";
import { Plus, X } from "lucide-react";
import toast from "react-hot-toast";
import Modal from "../../../common/components/Modal";
import PlaylistForm from "../../playlist/components/PlaylistForm";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #282828, #212121);
  padding: 20px;
  border-radius: 15px;
  color: ${Light.textColor};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
`;

const TextField = styled.input`
  font-size: 20px;
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  border: none;
  outline: none;
  border-radius: 5px;
  background-color: #333333;
  color: ${Light.textColor};
  &:focus {
    border-color: #535353;
  }
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

const CloseButton = styled.div`
  cursor: pointer;
  padding: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 100%;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333333;
  }
`;

const PlaylistContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 300px;
  overflow-y: auto;
  gap: 5px;
`;

const TextButton = styled.div`
  cursor: pointer;
  display: flex;
  gap: 20px;
  align-items: center;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  &:hover {
    background-color: #333333;
  }
`;

const Message = styled.span`
  font-size: 18px;
  margin: 0 auto;
  color: ${Light.textColor};
`;

interface ATPProps {
  onClose: () => void;
  track: Track;
}

function AddToPlaylistForm({ onClose, track }: ATPProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredPlaylists, setFilteredPlaylists] = useState<Playlist[]>([]);

  const { playlists, status, error } = useSelector(
    (state: GlobalState) => state.playlist
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPlaylists());
  }, [dispatch]);

  const handleAddToPlaylist = (playlist: Playlist) => {
    const updatedPlaylist: Playlist = {
      ...playlist,
      tracks: [...playlist.tracks!, track],
    };

    const isDuplicate = playlist.tracks?.some((t: Track) => t.id == track.id);

    if (isDuplicate) {
      toast.error(`The track is already in ${playlist.name}`);
      return;
    }

    dispatch(EditPlaylist(updatedPlaylist));

    if (status === Status.SUCCEEDED) {
      toast.success(`Track Added to ${playlist.name} Successfully`);
    }

    onClose();
  };

  function renderPlaylists(playlistToRender: Playlist[]) {
    return playlistToRender.map(
      (playlist: Playlist) =>
        playlist &&
        playlist.id && (
          <PlaylistTile
            playlist={playlist}
            key={playlist.id}
            onClick={handleAddToPlaylist}
          />
        )
    );
  }

  const handleSearchChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const query = ev.target.value;
    setSearchQuery(query);
    if (query === "") return setFilteredPlaylists(playlists);
    const filtered = playlists.filter((playlist) =>
      playlist.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredPlaylists(filtered);
  };

  return (
    <FormContainer>
      <FormHeader>
        <span
          css={{
            fontSize: "24px",
          }}
        >
          Add to Playlist
        </span>
        <CloseButton onClick={onClose}>
          <X color="#aaa" />
        </CloseButton>
      </FormHeader>
      <span>
        Add <strong>{track.title}</strong> by <strong>{track.artist}</strong> to
        a playlist{" "}
      </span>
      <TextField
        type="text"
        name="playlist"
        value={searchQuery}
        onChange={handleSearchChange}
        placeholder="Search playlist"
        disabled={playlists.length == 0}
        required
      />
      <TextButton onClick={() => setIsOpen(true)}>
        <Plus />
        <span>New Playlist</span>
      </TextButton>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <PlaylistForm onClose={() => setIsOpen(false)} />
      </Modal>
      <PlaylistContainer>
        {status === Status.LOADING && "Loading"}
        {status === Status.FAILED && "Can not fetch Playlists"}
        {!error ? (
          playlists.length == 0 ? (
            <Message>There are no playlists to be shown</Message>
          ) : filteredPlaylists.length > 0 ? (
            renderPlaylists(filteredPlaylists)
          ) : searchQuery !== "" ? (
            <Message>No playlists found containing "{searchQuery}"</Message>
          ) : (
            renderPlaylists(playlists)
          )
        ) : (
          "Something went wrong"
        )}
      </PlaylistContainer>
    </FormContainer>
  );
}

export default AddToPlaylistForm;
