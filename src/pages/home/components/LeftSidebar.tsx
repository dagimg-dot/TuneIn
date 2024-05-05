/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../../styles/colors";
import Logo from "./Logo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${Light.primary};
  justify-content: space-between;
  align-items: center;
  padding: 24px;
`;

const Tab = styled.button`
  font-family: inherit;
  font-size: 24px;
  text-align: center;
  border: none;
  width: 100%;
  padding: 8px 16px;
  background-color: ${Light.primary};
  color: ${Light.textColor};
  border-radius: 12px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${Light.hover};
    color: ${Light.primary};
  }
`;

const LeftSidebar = () => {
  return (
    <Container>
      <Logo />
      <div
        css={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          gap: "5px",
        }}
      >
        <Tab>Browse</Tab>
        <Tab>Favorites</Tab>
      </div>
      <div></div>
    </Container>
  );
};

export default LeftSidebar;
