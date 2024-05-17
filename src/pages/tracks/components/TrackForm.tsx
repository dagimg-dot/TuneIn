import styled from "@emotion/styled";
import { Light } from "../../../shared/styles/colors";
import { X } from "lucide-react";
import { FormButton } from "../../../shared/styles/style";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(to right, #282828, #212121);
  padding: 20px;
  border-radius: 15px;
  color: ${Light.textColor};
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
  min-width: 500px;
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
}

const TrackForm = ({ onClose }: TrackFormProps) => {
  return (
    <FormContainer>
      <FormHeader>
        <span
          css={{
            fontSize: "24px",
          }}
        >
          Add New Track
        </span>
        <CloseButton onClick={onClose}>
          <X color="#aaa" />
        </CloseButton>
      </FormHeader>
      <TextField placeholder="Title" />
      <TextField placeholder="Artist" />
      <TextField placeholder="Genre" />
      <TextField placeholder="Duration" />
      <FormButton>Add Track</FormButton>
    </FormContainer>
  );
};

export default TrackForm;
