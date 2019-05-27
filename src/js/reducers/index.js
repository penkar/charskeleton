// @flow 
import { combineReducers } from 'redux';

import CharacterState from './CharacterState.js';
import UIState from './UIState.js';

const ApplicationState = combineReducers({CharacterState, UIState})
export default ApplicationState;