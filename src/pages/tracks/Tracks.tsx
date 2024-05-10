import styled from "@emotion/styled";
import Header from "./components/Header";
import Utilities from "./components/Utilities";
import { DurationIcon } from "../../common/components/CustomIcons";
import { Light } from "../../shared/styles/colors";

const TracksContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  color: ${Light.textColor};
  overflow-y: auto;
  height: 100dvh;
`;

const TrackListContainer = styled.div`
  margin-top: 30px;
  padding: 0 30px;
  padding-bottom: 80px;
`;

const TableRow = styled.th`
  display: grid;
  grid-template-columns: 2fr 1fr 1.4fr 0.5fr;
  text-align: left;
  padding: 10px;
  font-weight: 400;
`;

function Tracks() {
  return (
    <TracksContainer>
      <Header />
      <div
        css={{
          height: "75%",
        }}
      >
        <Utilities />
        <TrackListContainer>
          <table
            css={{
              width: "100%",
            }}
          >
            <TableRow
              css={{
                borderBottom: `2px solid ${Light.textSecondary}`,
                color: Light.textSecondary,
              }}
            >
              <td>Title</td>
              <td>Genre</td>
              <td>Released Date</td>
              <td>
                <DurationIcon />
              </td>
            </TableRow>
            <div
              css={{
                marginTop: "20px",
              }}
            >
              {/* All tracks are inserted here dynamically */}
            </div>
          </table>
        </TrackListContainer>
      </div>
    </TracksContainer>
  );
}

export default Tracks;
