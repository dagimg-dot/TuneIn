import styled from "@emotion/styled";

const Container = styled.div`
  color: white;
  grid-column-start: 1;
  grid-column-end: -1;
  border-radius: 0 0 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  backdrop-filter: blur(15px);
  position: sticky;
  width: 100%;
  bottom: 0;
  height: 80px;
  padding: 5px 10px 5px 30px;
`;

function Player() {
  return (
    <Container>
      <div
        css={{
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div>image</div>
        <div
          css={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div>title</div>
          <div>name</div>
        </div>
      </div>
      <div>primary control</div>
      <div>sec control</div>
    </Container>
  );
}

export default Player;
