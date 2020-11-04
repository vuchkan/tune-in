import * as React from "react";
import { Player } from "./styled/Lib";
import { useSelector, shallowEqual } from "react-redux";

const MusicPlayer = (): JSX.Element => {
  const activeStation: IStation | undefined = useSelector(
    (state: PlayerState) => state.activeStation,
    shallowEqual
  );

  if (!activeStation) return <></>;

  return (
    <Player>
      <div className={"play-now"}>
        <img src={activeStation.imgUrl} className={"userpic"} />
        {/*<div className={'info'}>*/}
        {/*    <div className="name">{activeStation.name}</div>*/}
        {/*</div>*/}
      </div>
      <audio src={activeStation.streamUrl} autoPlay></audio>
    </Player>
  );
};

export default MusicPlayer;
