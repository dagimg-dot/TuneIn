import styled from "@emotion/styled";
import { useState } from "react";
import Modal from "./Modal";
import { useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducers/rootReducer";
import UserForm from "./UserForm";

const UserContainer = styled.div`
  display: flex;
  padding: 15px 0 45px 0;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  border-radius: 100%;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

function UserSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useSelector((state: GlobalState) => state.user);

  const handleAvatarClick = () => {
    setIsOpen(true);
  };

  return (
    <UserContainer>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UserForm onClose={() => setIsOpen(false)} _formData={user} />
      </Modal>
      <span
        css={{
          fontWeight: "700",
        }}
      >
        {user.userName}
      </span>
      <Avatar
        src={user.image == "" ? "/J.jpg" : user.image}
        onClick={handleAvatarClick}
      />
    </UserContainer>
  );
}

export default UserSection;
