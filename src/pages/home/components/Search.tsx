/** @jsxRuntime classic */
/** @jsx jsx */

//@ts-ignore
import { jsx, css } from "@emotion/react";

import { faSearch } from "@fortawesome/free-solid-svg-icons/faSearch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Light } from "../../../shared/styles/colors";

function Search() {
  return (
    <div
      css={{
        display: "flex",
        gap: "15px",
        alignItems: "center",
        width: "100%",
        borderBottom: "1px solid #bbb",
        padding: "10px",
        marginBottom: "24px"
      }}
    >
      <FontAwesomeIcon icon={faSearch} color="white" size="xl" />
      <input
        type="text"
        placeholder="Search"
        css={{
          outline: "none",
          border: "none",
          backgroundColor: "transparent",
          color: Light.textColor,
          fontSize: "24px",
        }}
      />
    </div>
  );
}

export default Search;
