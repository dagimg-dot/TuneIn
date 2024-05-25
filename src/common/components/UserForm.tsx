import { X } from "lucide-react";
import { Status } from "../../redux/reducers/trackReducer";
import { Light } from "../../shared/styles/colors";
import { FormButton } from "../../shared/styles/style";
import { User } from "../../shared/types";
import styled from "@emotion/styled";
import { FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducers/rootReducer";
import toast from "react-hot-toast";
import { EditUser, createUser } from "../../redux/reducers/userReducer";
import randomIdGenerator from "../../utils/idGenerator";

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

interface UserFormProps {
  onClose: () => void;
  _formData?: User;
}

function UserForm({ onClose, _formData }: UserFormProps) {
  const [formData, setFormData] = useState<User>({
    userName: _formData?.userName || "",
    image: _formData?.image || "",
  });

  const isEditMode = _formData?.id !== undefined;

  const status = useSelector((state: GlobalState) => state.user.status);
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

    const newUser = formData;
    if (isEditMode) {
      dispatch(EditUser({ id: _formData?.id, ...newUser }));
    } else {
      dispatch(createUser({ id: randomIdGenerator(), ...newUser }));
    }

    if (status === Status.SUCCEEDED && isEditMode) {
      toast.success("User Updated Successfully ");
    } else if (status === Status.SUCCEEDED) {
      toast.success("User added successfully");
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
          {isEditMode ? "Update User" : "Add New User"}
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
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="username"
          required
        />
        <FormButton>
          {isEditMode
            ? status === Status.LOADING
              ? "Updating User"
              : "Update User"
            : status === Status.LOADING
            ? "Adding User"
            : "Add User"}
        </FormButton>
      </form>
    </FormContainer>
  );
}

export default UserForm;
