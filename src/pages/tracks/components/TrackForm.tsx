import styled from "@emotion/styled";
import { Light } from "../../../shared/styles/colors";
import { X } from "lucide-react";
import { FormButton } from "../../../shared/styles/style";
import { Track } from "../../../shared/types";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  EditTrack,
  Status,
  createTrack,
} from "../../../redux/reducers/trackReducer";
import { GlobalState } from "../../../redux/reducers/rootReducer";
import toast from "react-hot-toast";
import randomIdGenerator from "../../../utils/idGenerator";

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

interface TrackFormProps {
  onClose: () => void;
  _formData?: Track;
}

const TrackForm = ({ onClose, _formData }: TrackFormProps) => {
  const [formData, setFormData] = useState<Track>({
    title: _formData?.title || "",
    artist: _formData?.artist || "",
    genre: _formData?.genre || "",
    releasedDate: _formData?.releasedDate || "",
    duration: _formData?.duration || "",
    isLiked: _formData?.isLiked || false,
  });
  const isEditMode = _formData?.id !== undefined;

  const status = useSelector((state: GlobalState) => state.track.status);
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
      dispatch(EditTrack({ id: _formData.id, ...newTrack }));
    } else {
      dispatch(createTrack({ id: randomIdGenerator(), ...newTrack }));
    }

    if (status === Status.SUCCEEDED && isEditMode) {
      toast.success("Track Updated Successfully ");
    } else if (status === Status.SUCCEEDED) {
      toast.success("Track added successfully");
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
          {isEditMode ? "Update Track" : "Add New Track"}
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
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Title"
          required
        />
        <TextField
          type="text"
          name="artist"
          value={formData.artist}
          onChange={handleChange}
          placeholder="Artist"
          required
        />
        <TextField
          type="text"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          placeholder="Genre"
        />
        <TextField
          type="text"
          name="releasedDate"
          value={formData.releasedDate}
          onChange={handleChange}
          placeholder="Released Date"
        />
        <TextField
          type="text"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Duration"
          required
        />
        <FormButton>
          {isEditMode
            ? status === Status.LOADING
              ? "Updating Track"
              : "Update Track"
            : status === Status.LOADING
            ? "Adding Track"
            : "Add Track"}
        </FormButton>
      </form>
    </FormContainer>
  );
};

export default TrackForm;
