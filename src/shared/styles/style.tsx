import { Light } from "./colors";
import styled from "@emotion/styled";

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: ${Light.textColor};
  overflow-y: auto;
  height: 100dvh;
`;

export const DecorationBox = styled.div`
  box-shadow: 0px 30px 64px -7px #0f1111;
  background: linear-gradient(to bottom right, #0f72ac, white);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 50px;
  border-radius: 5px;
`;

export const TableRow = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 0.3fr 0.5fr;
  text-align: left;
  align-items: center;
  font-weight: 400;
  margin-bottom: 10px;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${Light.tileHover};
    border-radius: 10px;
  }
`;

export const Tile = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: all 0.3s ease-in-out;
  padding: 5px;
  &:hover {
    background-color: ${Light.tileHover};
    border-radius: 10px;
    padding-left: 5px;
    padding-bottom: 5px;
  }
`;

export const AlbumArt = styled.img`
  opacity: 1;
  width: 55px;
  height: 55px;
  border-radius: 6px;
  transition: 0.5s ease;
  backface-visibility: hidden;
  z-index: 0;
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

export const FormButton = styled.button`
  cursor: pointer;
  margin-top: 20px;
  outline: none;
  border: none;
  padding: 12px 24px;
  border-radius: 5px;
  font-weight: bold;
  font-size: 18px;
  width: 100%;
`;
