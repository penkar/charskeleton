// @flow
import Redux from 'redux';

const initialState:Object = {}

function CharacterState(state:Object = initialState, action:Object) {
  switch (action.type) {
    case 'CHANGE':
      return state;
    default:
      return state;
  }
}
export default CharacterState