import * as actionTypes from "./action";

const initialState = {
  openSidedrawer: false
};

const sideDrawerReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.OPEN_SIDEDRAWER:
      return {
        ...state,
        openSidedrawer: true
      };
    case actionTypes.CLOSE_SIDEDRAWER:
      return {
        ...state,
        openSidedrawer: false
      };
    default:
      return state;
  }
};

export default sideDrawerReducer;
