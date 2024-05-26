import styled from "@emotion/styled";
import { Light } from "../../../shared/styles/colors";
import { X } from "lucide-react";
import { FormButton } from "../../../shared/styles/style";
import { Playlist } from "../../../shared/types";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Status } from "../../../redux/reducers/trackReducer";
import randomIdGenerator from "../../../utils/idGenerator";
import {
  EditPlaylist,
  createPlaylist,
} from "../../../redux/reducers/playlistReducer";
import toast from "react-hot-toast";
import { GlobalState } from "../../../redux/reducers/rootReducer";

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

interface PlaylistFormProps {
  onClose: () => void;
  _formData?: Playlist;
}

const PlaylistForm = ({ onClose, _formData }: PlaylistFormProps) => {
  const [formData, setFormData] = useState({
    name: _formData?.name || "",
  });

  const isEditMode = _formData?.id !== undefined;

  const status = useSelector((state: GlobalState) => state.playlist.status);
  const dispatch = useDispatch();

  const handleChange = (ev: { target: HTMLInputElement }) => {
    const { name, value } = ev.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();

    const newTrack = formData;
    if (isEditMode) {
      dispatch(EditPlaylist({ ..._formData, ...newTrack }));
    } else {
      dispatch(
        createPlaylist({
          id: randomIdGenerator(),
          ...formData,
          tracks: [],
        })
      );
    }

    if (status === Status.SUCCEEDED && isEditMode) {
      toast.success("Playlist Updated Successfully");
    } else if (status === Status.SUCCEEDED) {
      toast.success("Playlist Added Successfully");
    }

    onClose();
  };

  return (
    <FormContainer>
      <FormHeader>
        <span
          css={{
            fontSize: "24px",
          }}
        >
          {isEditMode ? "Update Playlist" : "Add New Playlist"}
        </span>
        <CloseButton onClick={onClose}>
          <X color="#aaa" />
        </CloseButton>
      </FormHeader>
      <form
        onSubmit={handleSubmit}
        css={{
          maxWidth: "500px",
        }}
      >
        <TextField
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <FormButton>
          {isEditMode
            ? status === Status.LOADING
              ? "Updating Playlist"
              : "Update Playlist"
            : status === Status.LOADING
            ? "Adding Playlist"
            : "Add Playlist"}
        </FormButton>
      </form>
    </FormContainer>
  );
};

export default PlaylistForm;
