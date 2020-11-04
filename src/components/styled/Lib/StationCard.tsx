import styled from "styled-components";

const StationCard = styled.div`
  cursor: pointer;
  margin: 15px 0;
  display: flex;
  justify-content: start;
  height: 120px;
  color: #1c203c;

  * > {
    position: relative;

    .gg-play-button {
      box-sizing: border-box;
      position: relative;
      display: block;
      transform: scale(var(--ggs, 1));
      width: 22px;
      height: 22px;
    }
    .gg-play-button::before {
      content: "";
      display: block;
      box-sizing: border-box;
      position: absolute;
      width: 0;
      height: 10px;
      border-top: 5px solid transparent;
      border-bottom: 5px solid transparent;
      border-left: 6px solid;
      top: 6px;
      left: 9px;
    }

    .hover-effect {
      position: absolute;
      height: 100%;
      width: 100%;
      transition: 0.2s;
      background-color: rgba(255, 255, 255, 0);
    }

    :hover .hover-effect {
      background-color: rgba(255, 255, 255, 0.4);
    }
  }

  .tags {
    .tag {
      display: inline-block;
      padding: 5px;
      margin-right: 5px;
      border-radius: 4px;
      font-size: 10px;
      font-weight: bold;
      line-height: 14px;
      background: #1c203c;
      color: #14d8cc;
    }
  }

  .userpic {
    max-height: 120px;
    max-width: 120px;
  }
  .info {
    margin-left: 15px;
    display: flex;
    flex-direction: column;

    .name {
      font-size: 18px;
      line-height: 20px;
      font-weight: 600;
    }

    .decription {
      font-size: 16px;
      padding-top: 8px;
    }
  }
`;

export default StationCard;
