import * as actionTypes from "./actionTypes";

export function playStation(station: IStation) {
  const action: PlayerAction = {
    type: actionTypes.PLAY_STATION,
    station
  };

  return action;
}
