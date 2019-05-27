// @flow
import * as Constants from '../constants/UIConstants';
const initialState:Object = {
  menu:false,
}

function UIState(state:Object = initialState, action:Object) {
  console.log('action', action);
  switch (action.type) {
    case Constants.TOGGLE_MENU:
      return {...state, menu:!state.menu};
    default:
      return state;
  }
}
export default UIState