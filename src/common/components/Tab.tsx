/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../shared/styles/colors";
import { Link, useLocation } from "react-router-dom";

interface TabProps {
  title: string;
  navigateTo: string;
  icon: React.ReactNode;
}

const StyledLink = styled(Link)`
  cursor: pointer;
  font-size: 22px;
  text-align: left;
  border: none;
  color: ${Light.textColor};
  background-color: transparent;
  display: flex;
  gap: 20px;
  align-items: center;
  text-decoration: none;
`;

function Tab({ title, navigateTo, icon }: TabProps) {
  const { pathname } = useLocation();
  const isActive = (path: string) => {
    return pathname == path;
  };
  return (
    <StyledLink to={navigateTo}>
      {icon}
      <span
        css={{
          fontWeight: isActive(navigateTo) ? "bold" : "normal",
        }}
      >
        {title}
      </span>
    </StyledLink>
  );
}

export default Tab;
