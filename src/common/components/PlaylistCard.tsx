/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import styled from "@emotion/styled";

const CardBox = styled.div`
  position: relative;
  border-radius: 12px;
  min-height: 170px;
  min-width: 170px;
`;

function PlaylistCard() {
  return (
    <CardBox>
      <div
        css={{
          position: "absolute",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
          color: "white",
          padding: "18px",
          fontSize: "18px",
          fontWeight: "600",
        }}
      >
        <span>Deja Vu</span>
        <span>30 Tracks</span>
      </div>
      <img
        src="/J.jpg"
        css={{
          borderRadius: "12px",
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </CardBox>
  );
}

export default PlaylistCard;
