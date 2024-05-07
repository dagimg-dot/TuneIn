/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../styles/colors";

export const HeadingContainer = styled.span`
  color: ${Light.textColor};
  font-weight: 500;
  display: block;
  margin-bottom: 30px;
  font-size: 28px;
`;

interface HeadingProps {
  title: string;
}

function Heading({ title }: HeadingProps) {
  return <HeadingContainer>{title}</HeadingContainer>;
}

export default Heading;
