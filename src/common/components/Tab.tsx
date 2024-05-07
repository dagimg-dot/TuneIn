/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../styles/colors";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface TabProps {
  title: String;
  icon: IconProp;
  isActive: boolean;
}

const StyledButton = styled.button`
  cursor: pointer;
  font-size: 22px;
  text-align: left;
  border: none;
  color: ${Light.textColor};
  background-color: transparent;
  display: flex;
  gap: 20px;
  align-items: center;
`;

function Tab({ title, icon, isActive }: TabProps) {
  return (
    <StyledButton>
      <FontAwesomeIcon icon={icon} />
      <span
        css={{
          fontWeight: isActive ? "bold" : "normal",
        }}
      >
        {title}
      </span>
    </StyledButton>
  );
}

export default Tab;
