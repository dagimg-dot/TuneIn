import PlaylistCard from "../../common/components/PlaylistCard";
import { MainContainer } from "../../shared/styles/style";
import Utilities from "../tracks/components/Utilities";
import PlaylistsHeader from "./components/PlaylistsHeader";
import styled from "@emotion/styled";

const PlayListContainer = styled.div`
  padding: 0 30px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 40px;
`;

function Playlists() {
  return (
    <MainContainer>
      <PlaylistsHeader />
      <div
        css={{
          height: "75%",
        }}
      >
        <Utilities />
        <PlayListContainer>
          {/* This is where playlists are displayed */}
          <PlaylistCard
            playlist={{ name: "DejaVu", count: 30 }}
            isContextMenuEnabled={true}
          />
        </PlayListContainer>
      </div>
    </MainContainer>
  );
}

export default Playlists;
