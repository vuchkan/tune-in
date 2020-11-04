import * as actionTypes from "./actionTypes";

const initialState: PlayerState = {
  activeStation: undefined,
};

const reducer = (
  state: PlayerState = initialState,
  action: PlayerAction
): PlayerState => {
  console.log(action);
  switch (action.type) {
    case actionTypes.PLAY_STATION:
      return {
        ...state,
        activeStation: { ...action.station },
      };
  }
  return state;
};

export default reducer;
