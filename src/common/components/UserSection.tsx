import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { GlobalState } from "../../redux/reducers/rootReducer";
import UserForm from "./UserForm";
import { fetchUser } from "../../redux/reducers/userReducer";

const UserContainer = styled.div`
  display: flex;
  padding: 15px 0 45px 0;
  justify-content: end;
  align-items: center;
  gap: 10px;
`;

const Avatar = styled.img`
  cursor: pointer;
  border-radius: 100%;
  width: 60px;
  height: 60px;
  object-fit: cover;
`;

function UserSection() {
  const [isOpen, setIsOpen] = useState(false);
  const { users } = useSelector((state: GlobalState) => state.user);
  const dispatch = useDispatch();

  const handleAvatarClick = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <UserContainer>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <UserForm onClose={() => setIsOpen(false)} _formData={users[0]} />
      </Modal>
      <span
        css={{
          fontWeight: "700",
        }}
      >
        {users[0].userName}
      </span>
      <Avatar
        src={users[0].image == "" ? "/J.jpg" : users[0].image}
        onClick={handleAvatarClick}
      />
    </UserContainer>
  );
}

export default UserSection;
