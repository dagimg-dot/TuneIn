/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../styles/colors";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

interface TabProps {
  title: string;
  navigateTo: string;
  icon: IconProp;
  isActive: boolean;
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

function Tab({ title, navigateTo, icon, isActive }: TabProps) {
  return (
    <StyledLink to={navigateTo}>
      <FontAwesomeIcon icon={icon} />
      <span
        css={{
          fontWeight: isActive ? "bold" : "normal",
        }}
      >
        {title}
      </span>
    </StyledLink>
  );
}

export default Tab;
