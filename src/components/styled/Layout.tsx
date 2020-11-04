import styled from "styled-components";

const Layout = styled.div`
  width: calc(100vw - 19px);
  min-height: 100vh;
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 0px auto;

  .page-content {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
  }

  .divider {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    background: rgb(28, 32, 60);
  }

  .player {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    position: sticky;
    top: 0;
    display: flex;
    justify-content: flex-end;
  }

  .stations-list {
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 40px;
  }
`;

export default Layout;
