/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";
import { faAdd, faMusic } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const GradientContainer = styled.div`
  background: linear-gradient(to bottom, #20acfb, transparent);
  padding: 20px 30px 0 30px;
  height: 25%;
  position: sticky;
  top: 0;
  z-index: 99;
`;

const LeftFlexItem = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
`;

function Header() {
  return (
    <GradientContainer>
      <div
        css={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: "100%",
        }}
      >
        <LeftFlexItem>
          <FontAwesomeIcon icon={faMusic} size="6x" />
          <div
            css={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
            }}
          >
            <span
              css={{
                fontSize: "38px",
                fontWeight: "700",
              }}
            >
              All Tracks
            </span>
            <span>24 songs, 2hr and 4min</span>
          </div>
        </LeftFlexItem>
        <button
          css={{
            outline: "none",
            border: "none",
            backgroundColor: "#87a784",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        >
          <FontAwesomeIcon icon={faAdd} color="black" size="lg" scale={1.1} />
        </button>
      </div>
    </GradientContainer>
  );
}

export default Header;
