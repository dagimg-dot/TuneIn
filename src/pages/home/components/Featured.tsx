/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { Light } from "../../../styles/colors";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import Heading from "../../../common/components/Heading";

const ListenBtn = styled.button`
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: center;
  padding: 12px 24px;
  border-radius: 25px;
  outline: none;
  border: none;
  background-color: ${Light.textColor};
  color: ${Light.primary};
  font-size: 24px;
  cursor: pointer;
`;

function Featured() {
  return (
    <div>
      <Heading title="Featured" />
      <div
        css={{
          borderRadius: "20px",
          minHeight: "300px",
          background: "linear-gradient(to right, #3B5C39, #456842)",
          padding: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <div
          css={{
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          <span
            css={{
              fontSize: "24px",
            }}
          >
            Billie Eilish
          </span>
          <span
            css={{
              fontSize: "32px",
              fontWeight: "600",
            }}
          >
            What Was I Made For?
          </span>
        </div>
        <div>
          <ListenBtn>
            <FontAwesomeIcon icon={faPlay} size="xs" />
            <span>Listen now</span>
          </ListenBtn>
        </div>
      </div>
    </div>
  );
}

export default Featured;
