import styled from "@emotion/styled";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Light } from "../../../shared/styles/colors";

const UtilityContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: end;
  align-items: center;
  padding: 0 30px;
`;
function Utilities() {
  return (
    <UtilityContainer>
      <div
        css={{
          padding: "10px",
          lineHeight: "0.5",
          borderRadius: "100%",
          cursor: "pointer",
          transition: "all 0.3s ease-in-out",
          "&:hover": {
            backgroundColor: Light.tileHover,
          },
          "&:hover .search-icon": {
            opacity: 1,
          },
        }}
      >
        <FontAwesomeIcon
          className="search-icon"
          icon={faSearch}
          css={{
            opacity: 0.7,
          }}
        />
      </div>
      <div
        css={{
          fontSize: "20px",
        }}
      >
        Sort By
      </div>
    </UtilityContainer>
  );
}

export default Utilities;
