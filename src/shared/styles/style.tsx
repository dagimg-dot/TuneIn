import { Light } from "./colors";
import styled from "@emotion/styled";

export const TableRow = styled.th`
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 0.5fr;
  text-align: left;
  align-items: center;
  padding: 5px;
  font-weight: 400;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${Light.tileHover};
    border-radius: 5px;
  }
`;

export const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
`;

export const AlbumArt = styled.img`
  opacity: 1;
  width: 55px;
  height: 55px;
  border-radius: 6px;
  transition: 0.5s ease;
  backface-visibility: hidden;
`;

export const AlbumArtContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  &:hover img {
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
`;

export const PlayIcon = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: 0.5s ease;
`;
