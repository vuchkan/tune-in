import styled from "styled-components";

const Player = styled.div`
  display: flex;
  justify-content: end;
  padding: 20px;
  align-items: center;

  .play-now {
    position: fixed;
    top: 0;
    right: 20px;
    width: 120px;
    height: 120px;
    background: rgb(28, 32, 60);
  }
`;

export default Player;
