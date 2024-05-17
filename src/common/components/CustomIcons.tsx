/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";
import { faPause, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Light } from "../../shared/styles/colors";

export function PreviousSongIcon() {
  return (
    <svg
      fill="#fff"
      height="40px"
      width="40px"
      version="1.1"
      id="Icons"
      viewBox="0 0 32 32"
      transform="rotate(180)"
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M23,8h-5c-0.6,0-1,0.4-1,1v5L9.6,8.2C9.3,8,8.9,7.9,8.6,8.1C8.2,8.3,8,8.6,8,9v14c0,0.4,0.2,0.7,0.6,0.9C8.7,24,8.9,24,9,24 c0.2,0,0.4-0.1,0.6-0.2L17,18v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V9C24,8.4,23.6,8,23,8z"></path>{" "}
      </g>
    </svg>
  );
}

export function NextSongIcon() {
  return (
    <svg
      fill="#fff"
      height="35px"
      width="35px"
      version="1.1"
      id="Icons"
      viewBox="0 0 32 32"
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g id="SVGRepo_tracerCarrier"></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <path d="M23,8h-5c-0.6,0-1,0.4-1,1v5L9.6,8.2C9.3,8,8.9,7.9,8.6,8.1C8.2,8.3,8,8.6,8,9v14c0,0.4,0.2,0.7,0.6,0.9C8.7,24,8.9,24,9,24 c0.2,0,0.4-0.1,0.6-0.2L17,18v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V9C24,8.4,23.6,8,23,8z"></path>{" "}
      </g>
    </svg>
  );
}

export function PlayPauseIcon({ isPlaying }: { isPlaying: boolean }) {
  return (
    <div
      css={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "100%",
        backgroundColor: "white",
        width: "40px",
        height: "40px",
      }}
    >
      {isPlaying ? (
        <FontAwesomeIcon icon={faPause} color={Light.primary} />
      ) : (
        <FontAwesomeIcon icon={faPlay} color={Light.primary} />
      )}
    </div>
  );
}

export function DurationIcon() {
  return (
    <svg
      fill={Light.textSecondary}
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="SVGRepo_bgCarrier"></g>
      <g
        id="SVGRepo_tracerCarrier"
      ></g>
      <g id="SVGRepo_iconCarrier">
        <path d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm0-2a8 8 0 1 0 0-16 8 8 0 0 0 0 16zm-1-7.59V4h2v5.59l3.95 3.95-1.41 1.41L9 10.41z"></path>
      </g>
    </svg>
  );
}
